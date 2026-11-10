/* ======================= U CART (shared on every page) =======================
   Cart is saved in this browser (localStorage) and shared between pages.
   Checkout sends the whole order to the store on WhatsApp.
   Edit the settings below to change numbers, fees and discount codes. */
(function(){
var D=window.U_CFG||{};
var CFG={
  orderNumber:D.orderNumber||'201101192118',
  instapayNumber:D.instapayNumber||'+20 110 119 2118',
  shipFee:D.shipFee!=null?D.shipFee:95, freeOver:D.freeOver!=null?D.freeOver:2000,
  firstPct:D.firstPct!=null?D.firstPct:10,
  ordersApi:D.ordersApi||'',
  sizes:D.sizes||['S','M','L','XL'],
  codes:D.codes||{WELCOME10:{t:'pct',v:10},SALE50:{t:'flat',v:50}}
};
var GOV=[['القاهرة','Cairo'],['الجيزة','Giza'],['الإسكندرية','Alexandria'],['القليوبية','Qalyubia'],['الشرقية','Sharqia'],['الدقهلية','Dakahlia'],['الغربية','Gharbia'],['المنوفية','Monufia'],['البحيرة','Beheira'],['كفر الشيخ','Kafr El Sheikh'],['دمياط','Damietta'],['بورسعيد','Port Said'],['الإسماعيلية','Ismailia'],['السويس','Suez'],['شمال سيناء','North Sinai'],['جنوب سيناء','South Sinai'],['الفيوم','Faiyum'],['بني سويف','Beni Suef'],['المنيا','Minya'],['أسيوط','Asyut'],['سوهاج','Sohag'],['قنا','Qena'],['الأقصر','Luxor'],['أسوان','Aswan'],['البحر الأحمر','Red Sea'],['مطروح','Matrouh'],['الوادي الجديد','New Valley']];

/*PURE-START*/
function money(n,ar){return Number(n).toLocaleString('en-US')+(ar?' جنيه':' EGP')}
function totals(c){
  var sub=c.items.reduce(function(s,i){return s+i.price*i.qty},0),d=0,k=CFG.codes[c.code];
  if(k)d=Math.min(sub,k.t==='pct'?Math.round(sub*k.v/100):k.v);
  var fd=c.first&&CFG.firstPct?Math.min(sub,Math.round(sub*CFG.firstPct/100)):0,fromFirst=false;
  if(fd>d){d=fd;fromFirst=true}
  var ship=sub===0?0:(sub>=CFG.freeOver?0:CFG.shipFee);
  return{sub:sub,disc:d,ship:ship,total:sub-d+ship,first:fromFirst};
}
function buildMsg(c,f,id){
  var t=totals(c),L=['طلب جديد من موقع U-MODA','رقم الطلب: '+id,'',
   'الاسم: '+f.name,'الموبايل: '+f.phone,'المحافظة: '+f.gov,'العنوان: '+f.adr,'','المنتجات:'];
  c.items.forEach(function(i,n){L.push((n+1)+') '+i.name.ar+(i.color?' - اللون: '+i.color:'')+' - المقاس: '+i.size+' - الكمية: '+i.qty+' - '+money(i.price*i.qty,true))});
  L.push('','المجموع: '+money(t.sub,true));
  if(t.disc)L.push('الخصم ('+(t.first?'أول طلب':c.code)+'): -'+money(t.disc,true));
  L.push('الشحن: '+(t.ship?money(t.ship,true):'مجاني'),'الإجمالي: '+money(t.total,true),
   'الدفع: '+(f.pay==='insta'?'إنستاباي (هحوّل المبلغ وأبعت الإيصال هنا)':'عند الاستلام'));
  if(f.note)L.push('ملاحظات: '+f.note);
  return L.join('\n');
}
function validPhone(p){return /^(\+?20|0)1[0125]\d{8}$/.test(String(p).replace(/[\s-]/g,''))}
/*PURE-END*/

function dg(x){return String(x||'').replace(/\D/g,'').slice(-10)}
function checkFirst(phone,cb){
  if(!CFG.firstPct){cb(false);return}
  var ph=dg(phone);
  try{if(JSON.parse(localStorage.getItem('u-orders')||'[]').some(function(x){return dg(x.phone)===ph})){cb(false);return}}catch(e){}
  if(!CFG.ordersApi){cb(true);return}
  fetch(CFG.ordersApi+'?action=first&phone='+encodeURIComponent(phone)).then(function(r){return r.json()}).then(function(d){cb(d.first!==false)}).catch(function(){cb(true)})
}
/* remember the order on this device (for track.html) and send it to the orders sheet if ordersApi is set */
function logOrder(id,c,f){
  var t=totals(c);
  try{var l=JSON.parse(localStorage.getItem('u-orders')||'[]');l.push({id:id,phone:f.phone,status:0,date:Date.now()});localStorage.setItem('u-orders',JSON.stringify(l.slice(-30)))}catch(e){}
  if(!CFG.ordersApi)return;
  var items=c.items.map(function(i){return i.name.en+(i.color?' ('+i.color+')':'')+' / '+i.size+' x'+i.qty}).join('; ');
  try{fetch(CFG.ordersApi,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'create',order:{id:id,name:f.name,phone:f.phone,gov:f.gov,address:f.adr,items:items,subtotal:t.sub,shipping:t.ship,discount:t.disc,total:t.total,payment:f.pay==='insta'?'InstaPay':'COD',notes:f.note||''}})}).catch(function(){})}catch(e){}
}

var KEY='u-cart-v1',mem=null;
function load(){try{var s=localStorage.getItem(KEY);if(s){var o=JSON.parse(s);if(o&&o.items){o.first=false;return o}}}catch(e){}return mem||{items:[],code:''}}
function save(){mem=S;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
var S=load(),F={name:'',phone:'',gov:'',adr:'',pay:'cod',note:''},step='cart',sent=null,msgErr='',lastUrl='';
var $=function(i){return document.getElementById(i)};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var isAr=function(){return document.documentElement.lang==='ar'};
var T=function(e,a){return isAr()?a:e};
var M=function(n){return money(n,isAr())};
var count=function(){return S.items.reduce(function(s,i){return s+i.qty},0)};
function refresh(){var b=$('cnt');if(b)b.textContent=count()}

/* ---------- styles ---------- */
var css=document.createElement('style');
css.textContent='.uc-dim{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99998;display:none}.uc-dim.on{display:block}'
+'.uc{position:fixed;top:0;bottom:0;inset-inline-end:0;width:min(460px,100%);background:#fff;color:#111;z-index:99999;overflow:auto;transform:translateX(105%);transition:transform .25s;padding:calc(16px + env(safe-area-inset-top,0px)) 16px calc(24px + env(safe-area-inset-bottom,0px));font-family:inherit;color-scheme:light;text-align:start}'
+'[dir=rtl] .uc{transform:translateX(-105%)}.uc.on{transform:none!important}'
+'.uc *{box-sizing:border-box}.uc h3{font-size:20px;margin:0 0 4px}.uc .x{float:inline-end;background:none;border:0;font-size:28px;line-height:1;cursor:pointer;color:#111}'
+'.uc-steps{display:flex;gap:6px;margin:10px 0 14px;font-size:12px}.uc-steps span{flex:1;border-top:3px solid #ddd;padding-top:4px;color:#888}.uc-steps .on{border-color:#000;color:#000}'
+'.uc-line{display:flex;gap:10px;justify-content:space-between;padding:12px 0;border-bottom:1px solid #e3e3e3;font-size:14px}.uc-line small{display:block;color:#666;margin-top:2px}'
+'.uc-q{display:flex;align-items:center;gap:8px;margin-top:8px}.uc-q button{width:30px;height:30px;border:1px solid #999;background:#fff;border-radius:8px;font-size:16px;cursor:pointer;color:#111}'
+'.uc select,.uc input,.uc textarea{width:100%;padding:11px;border:1px solid #999;border-radius:8px;background:#fff;color:#111;font:inherit;font-size:16px}.uc textarea{min-height:60px}'
+'.uc label{display:block;font-size:13px;margin:12px 0 4px;color:#555}.uc .sz{width:auto;margin-top:6px;padding:6px 8px;font-size:14px}'
+'.uc-b{width:100%;margin-top:16px;padding:14px;background:#000;color:#fff;border:1px solid #000;border-radius:30px;font:inherit;font-size:16px;cursor:pointer}.uc-b.o{background:#fff;color:#000;border-color:#999}'
+'.uc-b.g{background:#1c9b4b;border-color:#1c9b4b}.uc-row{display:flex;justify-content:space-between;padding:6px 0;font-size:14px}.uc-row.t{font-weight:600;font-size:17px;border-top:1px solid #ddd;margin-top:6px;padding-top:12px}'
+'.uc-err{color:#b00020;font-size:13px;min-height:18px;margin-top:8px}.uc-rad{display:flex;gap:10px;align-items:center;border:1px solid #999;border-radius:8px;padding:11px;margin-top:8px;font-size:14px;color:#111}.uc-rad input{width:auto}'
+'.uc-note{background:#f4f4f4;border-radius:8px;padding:10px;font-size:13px;line-height:1.7;margin-top:8px}.uc-cp{display:flex;gap:8px;margin-top:12px}.uc-cp button{padding:0 16px;border:1px solid #000;background:#000;color:#fff;border-radius:8px;cursor:pointer;font:inherit}'
+'@media(prefers-reduced-motion:reduce){.uc{transition:none}}';
document.head.appendChild(css);

/* ---------- drawer shell ---------- */
var dim=document.createElement('div');dim.className='uc-dim';
var dr=document.createElement('aside');dr.className='uc';dr.setAttribute('role','dialog');dr.setAttribute('aria-modal','true');dr.tabIndex=-1;
document.body.appendChild(dim);document.body.appendChild(dr);

function open(s){if(s)step=s;msgErr='';draw();dr.classList.add('on');dim.classList.add('on');document.body.style.overflow='hidden';dr.focus()}
function close(){dr.classList.remove('on');dim.classList.remove('on');document.body.style.overflow=''}
dim.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
window.addEventListener('storage',function(e){if(e.key===KEY){S=load();refresh();if(dr.classList.contains('on'))draw()}});

function stepsBar(){
  var n={cart:0,details:1,review:2,done:3}[step],l=[T('Cart','السلة'),T('Details','البيانات'),T('Review','المراجعة')];
  return'<div class="uc-steps">'+l.map(function(x,i){return'<span'+(i<=n?' class="on"':'')+'>'+x+'</span>'}).join('')+'</div>';
}
function head(t){return'<button class="x" data-a="close" aria-label="Close">×</button><h3>'+t+'</h3>'}
function sumHtml(){
  var t=totals(S);
  return'<div class="uc-row"><span>'+T('Subtotal','المجموع')+'</span><span>'+M(t.sub)+'</span></div>'
   +(t.disc?'<div class="uc-row"><span>'+T('Discount','الخصم')+' ('+(t.first?T('First order','أول طلب'):esc(S.code))+')</span><span>−'+M(t.disc)+'</span></div>':'')
   +'<div class="uc-row"><span>'+T('Shipping','الشحن')+'</span><span>'+(t.ship?M(t.ship):T('Free','مجاني'))+'</span></div>'
   +'<div class="uc-row t"><span>'+T('Total','الإجمالي')+'</span><span>'+M(t.total)+'</span></div>';
}
function draw(){
  var h='';
  if(step==='done'){
    h=head(T('Order sent','تم إرسال الطلب'))+'<p style="line-height:1.8;margin-top:14px">'+(sent?T('Order number: ','رقم الطلب: ')+'<b dir="ltr">'+esc(sent.id)+'</b><br>':'')+T('Your order opened in WhatsApp. Press send there, and we will call you to confirm.','طلبك اتفتح على الواتساب. اضغط إرسال هناك، وهنكلمك نأكد الطلب.')+'</p>'
     +(sent&&sent.pay==='insta'?'<div class="uc-note">'+T('InstaPay: transfer the total to ','إنستاباي: حوّل الإجمالي على الرقم ')+'<b dir="ltr">'+esc(CFG.instapayNumber)+'</b>'+T(' and send the receipt on WhatsApp.',' وابعت الإيصال على الواتساب.')+'</div>':'')
     +'<a class="uc-b g" style="display:block;text-align:center;text-decoration:none" href="'+esc(lastUrl)+'" target="_blank" rel="noopener">'+T('Open WhatsApp again','افتح الواتساب تاني')+'</a>'
     +(sent?'<a class="uc-b" style="display:block;text-align:center;text-decoration:none" href="track.html?id='+encodeURIComponent(sent.id)+'">'+T('Track my order','تتبع طلبي')+'</a>':'')
     +'<button class="uc-b o" data-a="close">'+T('Close','إغلاق')+'</button>';
    dr.innerHTML=h;return;
  }
  if(!S.items.length){dr.innerHTML=head(T('Your cart','سلتك'))+'<p style="margin-top:18px;line-height:1.8">'+T('Your cart is empty.','السلة فاضية.')+'</p><button class="uc-b" data-a="close">'+T('Continue shopping','كمّل تسوق')+'</button>';return}
  h=head(T('Your order','طلبك'))+stepsBar();
  if(step==='cart'){
    S.items.forEach(function(i,n){
      h+='<div class="uc-line"><div style="flex:1;min-width:0"><b>'+esc(isAr()?i.name.ar:i.name.en)+'</b><small>'+(i.color?esc(i.color)+' · ':'')+(i.size?T('Size ','المقاس ')+esc(i.size):'')+'</small>'
       +(i.size?'':'<select class="sz" data-sz="'+n+'" aria-label="Size"><option value="">'+T('Choose size','اختر المقاس')+'</option>'+CFG.sizes.map(function(z){return'<option>'+z+'</option>'}).join('')+'</select>')
       +'<div class="uc-q"><button data-a="dec" data-i="'+n+'" aria-label="-">−</button><span>'+i.qty+'</span><button data-a="inc" data-i="'+n+'" aria-label="+">+</button><button data-a="del" data-i="'+n+'" aria-label="Remove" style="margin-inline-start:10px;width:auto;padding:0 10px;font-size:13px">'+T('Remove','حذف')+'</button></div></div><div>'+M(i.price*i.qty)+'</div></div>';
    });
    h+='<div class="uc-cp"><input id="uc-code" placeholder="'+T('Discount code','كود الخصم')+'" value="'+esc(S.code||'')+'" dir="ltr"><button data-a="code">'+T('Apply','تطبيق')+'</button></div><div class="uc-err">'+esc(msgErr)+'</div>'+sumHtml()
     +'<button class="uc-b" data-a="toDetails">'+T('Continue','متابعة')+'</button><button class="uc-b o" data-a="close">'+T('Keep shopping','كمّل تسوق')+'</button>';
  }
  if(step==='details'){
    h+='<label>'+T('Full name','الاسم')+'</label><input id="uc-name" autocomplete="name" value="'+esc(F.name)+'">'
     +'<label>'+T('Mobile number','رقم الموبايل')+'</label><input id="uc-phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" placeholder="01XXXXXXXXX" value="'+esc(F.phone)+'">'
     +'<label>'+T('Governorate','المحافظة')+'</label><select id="uc-gov"><option value="">'+T('Choose','اختر')+'</option>'+GOV.map(function(g){return'<option value="'+g[0]+'"'+(F.gov===g[0]?' selected':'')+'>'+(isAr()?g[0]:g[1])+'</option>'}).join('')+'</select>'
     +'<label>'+T('Full address','العنوان بالتفصيل')+'</label><input id="uc-adr" autocomplete="street-address" value="'+esc(F.adr)+'">'
     +'<label>'+T('Payment method','طريقة الدفع')+'</label>'
     +'<label class="uc-rad"><input type="radio" name="uc-pay" value="cod"'+(F.pay==='cod'?' checked':'')+'>'+T('Cash on delivery','الدفع عند الاستلام')+'</label>'
     +'<label class="uc-rad"><input type="radio" name="uc-pay" value="insta"'+(F.pay==='insta'?' checked':'')+'>InstaPay</label>'
     +'<label>'+T('Notes (optional)','ملاحظات (اختياري)')+'</label><textarea id="uc-note">'+esc(F.note)+'</textarea>'
     +'<div class="uc-err">'+esc(msgErr)+'</div><button class="uc-b" data-a="toReview">'+T('Review order','مراجعة الطلب')+'</button><button class="uc-b o" data-a="toCart">'+T('Back','رجوع')+'</button>';
  }
  if(step==='review'){
    S.items.forEach(function(i){h+='<div class="uc-line"><div>'+esc(isAr()?i.name.ar:i.name.en)+'<small>'+(i.color?esc(i.color)+' · ':'')+esc(i.size)+' × '+i.qty+'</small></div><div>'+M(i.price*i.qty)+'</div></div>'});
    h+=sumHtml()+'<div class="uc-note"><b>'+esc(F.name)+'</b> · <span dir="ltr">'+esc(F.phone)+'</span><br>'+esc(F.gov)+' - '+esc(F.adr)+'<br>'+(F.pay==='insta'?'InstaPay':T('Cash on delivery','الدفع عند الاستلام'))+'</div>'
     +(F.pay==='insta'?'<div class="uc-note">'+T('After sending, transfer the total via InstaPay to ','بعد الإرسال حوّل الإجمالي على إنستاباي للرقم ')+'<b dir="ltr">'+esc(CFG.instapayNumber)+'</b>'+T(' and send the receipt on WhatsApp.',' وابعت الإيصال على الواتساب.')+'</div>':'')
     +'<button class="uc-b g" data-a="send">'+T('Send order on WhatsApp','إرسال الطلب على واتساب')+'</button><button class="uc-b o" data-a="toDetails">'+T('Back','رجوع')+'</button>';
  }
  dr.innerHTML=h;
}
function readForm(){
  if($('uc-name')){F.name=$('uc-name').value.trim();F.phone=$('uc-phone').value.trim();F.gov=$('uc-gov').value;F.adr=$('uc-adr').value.trim();F.note=$('uc-note').value.trim();
    var r=dr.querySelector('input[name=uc-pay]:checked');if(r)F.pay=r.value}
}
var A={
  close:close,
  inc:function(b){var i=S.items[+b.dataset.i];if(i&&i.qty<20){i.qty++;save();refresh();draw()}},
  dec:function(b){var n=+b.dataset.i,i=S.items[n];if(!i)return;if(i.qty>1){i.qty--}else{S.items.splice(n,1)}save();refresh();draw()},
  del:function(b){S.items.splice(+b.dataset.i,1);save();refresh();draw()},
  code:function(){var v=($('uc-code').value||'').trim().toUpperCase();if(!v){S.code='';msgErr=''}else if(!CFG.codes[v]){msgErr=T('Invalid code','الكود غير صحيح')}else{S.code=v;msgErr=''}save();draw()},
  toCart:function(){readForm();S.first=false;step='cart';msgErr='';draw()},
  toDetails:function(){
    if(step==='cart'&&S.items.some(function(i){return!i.size})){msgErr=T('Please choose a size for every item.','من فضلك اختر المقاس لكل المنتجات.');draw();return}
    readForm();S.first=false;step='details';msgErr='';draw()},
  toReview:function(){
    readForm();
    if(F.name.length<2){msgErr=T('Enter your name.','اكتب اسمك.')}
    else if(!validPhone(F.phone)){msgErr=T('Enter a valid Egyptian mobile number (01XXXXXXXXX).','اكتب رقم موبايل مصري صحيح (01XXXXXXXXX).')}
    else if(!F.gov){msgErr=T('Choose your governorate.','اختر المحافظة.')}
    else if(F.adr.length<6){msgErr=T('Enter your full address.','اكتب العنوان بالتفصيل.')}
    else{msgErr='';checkFirst(F.phone,function(f){S.first=f;step='review';draw()});return}
    draw()},
  send:function(){
    var id='U-'+Math.floor(10000+Math.random()*90000),text=buildMsg(S,F,id);
    lastUrl='https://wa.me/'+CFG.orderNumber+'?text='+encodeURIComponent(text);
    sent={id:id,pay:F.pay};
    logOrder(id,S,F);
    S={items:[],code:''};save();refresh();step='done';draw();
    var w=window.open(lastUrl,'_blank');if(!w)location.href=lastUrl}
};
dr.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(b&&A[b.dataset.a])A[b.dataset.a](b)});
dr.addEventListener('change',function(e){var t=e.target;if(t.dataset&&t.dataset.sz!==undefined&&t.value){S.items[+t.dataset.sz].size=t.value;
  var a=S.items[+t.dataset.sz],j=S.items.findIndex(function(o,k){return k!==+t.dataset.sz&&o.id===a.id&&o.color===a.color&&o.size===a.size});
  if(j>-1){S.items[j].qty=Math.min(20,S.items[j].qty+a.qty);S.items.splice(+t.dataset.sz,1)}
  save();draw()}});

function add(it){
  it.qty=it.qty||1;it.color=it.color||'';it.size=it.size||'';
  var f=S.items.filter(function(o){return o.id===it.id&&o.color===it.color&&o.size===it.size})[0];
  if(f)f.qty=Math.min(20,f.qty+it.qty);else S.items.push(it);
  save();refresh();
}
/* open the cart from the header bag button */
var badge=$('cnt'),btn=badge&&badge.closest('button');
if(btn)btn.addEventListener('click',function(e){e.preventDefault();step='cart';open()});
new MutationObserver(function(){if(dr.classList.contains('on'))draw()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
window.UCart={add:add,open:function(){step='cart';open()},refresh:refresh,count:count,_t:{totals:totals,buildMsg:buildMsg,validPhone:validPhone,CFG:CFG}};
refresh();
})();
