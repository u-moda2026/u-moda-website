/* ===== U-MODA STORE SETTINGS: edit here only (used by cart.js and track.html) ===== */
window.U_CFG={
  orderNumber:'201101192118',          /* WhatsApp number that receives orders (international format, digits only) */
  instapayNumber:'+20 110 119 2118',   /* shown to customers who choose InstaPay */
  shipFee:95, freeOver:2000,           /* standard shipping fee and free-shipping threshold (EGP) */
  firstPct:10,                         /* automatic % discount on a customer's first order (by phone number). 0 = off */
  ordersApi:'',                        /* Google Apps Script Web App URL (see apps-script.gs) for live order status, ratings and first-order check. Empty = tracking works on the customer's device only */
  codes:{WELCOME10:{t:'pct',v:10},SALE50:{t:'flat',v:50}}   /* discount codes: t:'pct' = percent, t:'flat' = fixed EGP */
};
