/* ===== U-MODA STORE SETTINGS: edit here only (used by cart.js and track.html) ===== */
window.U_CFG={
  orderNumber:'201101192118',          /* WhatsApp number that receives orders (international format, digits only) */
  instapayNumber:'+20 110 119 2118',   /* shown to customers who choose InstaPay */
  shipFee:95, freeOver:2000,           /* standard shipping fee and free-shipping threshold (EGP) */
  firstPct:0,                          /* خصم أول طلب: متوقف (0). لو عايز ترجّعه اكتب النسبة، مثلاً 10 */
  ordersApi:'',                        /* Google Apps Script Web App URL (see apps-script.gs) for live order status, ratings and first-order check. Empty = tracking works on the customer's device only */
  codes:{}                             /* أكواد الخصم: متوقفة. مثال لو عايز ترجّعها: {WELCOME10:{t:'pct',v:10},SALE50:{t:'flat',v:50}} */
};

/* ===== مساعدات صغيرة شغالة في كل الصفحات اللي بتحمّل الملف ده (السلة + تتبع الطلب) ===== */
(function(){
  /* 1) مفيش أكواد خصم => خانة "كود الخصم" في السلة تختفي بدل ما ترفض أي كود */
  try{
    if(!Object.keys(window.U_CFG.codes||{}).length){
      var st=document.createElement('style');
      st.textContent='.uc-cp{display:none!important}';
      document.head.appendChild(st);
    }
  }catch(e){}
  /* 2) العميل اللي كيبورده بيكتب أرقام عربي (٠١٢…) كان رقم موبايله بيترفض في السلة
        ومش بيتلاقى في تتبع الطلب. هنا الأرقام بتتحول لـ 012… وهو بيكتب. */
  function fix(v){
    return String(v).replace(/[\u0660-\u0669]/g,function(d){return String(d.charCodeAt(0)-0x0660)})
                    .replace(/[\u06F0-\u06F9]/g,function(d){return String(d.charCodeAt(0)-0x06F0)});
  }
  document.addEventListener('input',function(e){
    var t=e.target;
    if(!t||t.tagName!=='INPUT')return;
    if(t.type!=='tel'&&t.id!=='id'&&t.id!=='uc-phone'&&t.id!=='ph')return;
    var v=fix(t.value);
    if(v!==t.value){var p=t.selectionStart;t.value=v;try{t.setSelectionRange(p,p)}catch(x){}}
  },true);
})();
