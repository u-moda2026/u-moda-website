/* U Women & Kids – order sheet backend (Google Apps Script)
   Paste into a Google Sheet: Extensions > Apps Script. Deploy > New deployment > Web app:
   Execute as: Me | Who has access: Anyone. Copy the Web app URL into config.js (ordersApi). */
var SHEET = 'Orders';
var HEAD = ['id','date','name','phone','governorate','address','items','subtotal','shipping','discount','total','payment','notes','status','rating','review'];
var STAT = ['Received','Processing','Dispatched','On the way','Delivered'];

function sh() {
  var s = SpreadsheetApp.getActive(), t = s.getSheetByName(SHEET);
  if (!t) {
    t = s.insertSheet(SHEET); t.appendRow(HEAD); t.setFrozenRows(1);
    t.getRange('D:D').setNumberFormat('@');
    t.getRange(2, 14, 2000).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STAT, true).build());
  }
  return t;
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function dg(x) { return String(x || '').replace(/\D/g, '').slice(-10); }
function find(t, id, phone) {
  var v = t.getDataRange().getValues();
  for (var i = 1; i < v.length; i++) if (String(v[i][0]) === String(id) && dg(v[i][3]) === dg(phone)) return i + 1;
  return 0;
}
function doPost(e) {
  var d = JSON.parse(e.postData.contents), t = sh();
  if (d.action === 'create') {
    var o = d.order;
    t.appendRow([o.id, new Date(), o.name, o.phone, o.gov, o.address, o.items, o.subtotal, o.shipping, o.discount, o.total, o.payment, o.notes, STAT[0], '', '']);
    return out({ ok: true });
  }
  if (d.action === 'rate') {
    var r = find(t, d.id, d.phone);
    if (r) { t.getRange(r, 15).setValue(d.stars); t.getRange(r, 16).setValue(d.review || ''); }
    return out({ ok: !!r });
  }
  return out({ ok: false });
}
function doGet(e) {
  var p = e.parameter, t = sh();
  if (p.action === 'first') {
    var v = t.getDataRange().getValues(), seen = false;
    for (var i = 1; i < v.length; i++) if (dg(v[i][3]) === dg(p.phone)) { seen = true; break; }
    return out({ ok: true, first: !seen });
  }
  if (p.action === 'status') {
    var r = find(t, p.id, p.phone);
    if (!r) return out({ ok: false });
    var row = t.getRange(r, 1, 1, 16).getValues()[0], s = STAT.indexOf(String(row[13]));
    return out({ ok: true, status: s < 0 ? 0 : s, rating: row[14] || 0 });
  }
  return out({ ok: false });
}
