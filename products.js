// عشان تعدّل: غيّر price أو images أو أضف منتج جديد في القائمة دي (ده الملف الوحيد للمنتجات). للمنتج اللي له لونين: اكتب نفس الكود في سطرين وضيف لكل سطر "color": {"ar":"وردي","en":"Pink","hex":"#f4b6c8"}
const PRODUCTS = [
  {
    "id": "8562",
    "code": "8562",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 675,
    "sizes": "2-3-4-5",
    "images": [
      "8562-1.jpg"
    ],
    "color": {
      "ar": "وردي",
      "en": "Pink",
      "hex": "#f4b6c8"
    }
  },
  {
    "id": "8562-2",
    "code": "8562",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 675,
    "sizes": "2-3-4-5",
    "images": [
      "8562-2-1.jpg",
      "8562-2-2.jpg"
    ],
    "color": {
      "ar": "موف",
      "en": "Purple",
      "hex": "#7b5ea7"
    }
  },
  {
    "id": "8560",
    "code": "8560",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 675,
    "sizes": "2-3-4-5",
    "images": [
      "8560-1.jpg",
      "8560-2.jpg"
    ]
  },
  {
    "id": "4902",
    "code": "4902",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 675,
    "sizes": "5-6-7-8-9-10",
    "images": [
      "4902-1.jpg",
      "4902-2.jpg"
    ]
  },
  {
    "id": "2685",
    "code": "2685",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 650,
    "sizes": "1-2-3",
    "images": [
      "2685-1.jpg",
      "2685-2.jpg"
    ]
  },
  {
    "id": "8553",
    "code": "8553",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 650,
    "sizes": "2-3-4-5",
    "images": [
      "8553-1.jpg",
      "8553-2.jpg"
    ]
  },
  {
    "id": "2947",
    "code": "2947",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 450,
    "sizes": "1-2-3",
    "images": [
      "2947-1.jpg",
      "2947-2.jpg",
      "2947-3.jpg"
    ]
  },
  {
    "id": "6918",
    "code": "6918",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 875,
    "sizes": "1-2-3",
    "images": [
      "6918-1.jpg",
      "6918-2.jpg",
      "6918-3.jpg"
    ]
  },
  {
    "id": "8569",
    "code": "8569",
    "title": "سويت شيرت",
    "cat": "sweatshirt",
    "price": 475,
    "sizes": "2-3-4-5",
    "images": [
      "8569-1.jpg",
      "8569-2.jpg",
      "8569-3.jpg"
    ]
  },
  {
    "id": "8938",
    "code": "8938",
    "title": "سويت شيرت",
    "cat": "sweatshirt",
    "price": 550,
    "sizes": "6-7-8-9-10",
    "images": [
      "8938-1.jpg",
      "8938-2.jpg"
    ]
  },
  {
    "id": "8561",
    "code": "8561",
    "title": "هودي",
    "cat": "hoodie",
    "price": 475,
    "sizes": "2-3-4-5",
    "images": [
      "8561-1.jpg",
      "8561-2.jpg"
    ],
    "color": {
      "ar": "وردي",
      "en": "Pink",
      "hex": "#f4b6c8"
    }
  },
  {
    "id": "8561-2",
    "code": "8561",
    "title": "هودي",
    "cat": "hoodie",
    "price": 475,
    "sizes": "2-3-4-5",
    "images": [
      "8561-2-1.jpg",
      "8561-2-2.jpg"
    ],
    "color": {
      "ar": "موف",
      "en": "Purple",
      "hex": "#7b5ea7"
    }
  },
  {
    "id": "271026",
    "code": "271026",
    "title": "جاكيت",
    "cat": "jacket",
    "price": 875,
    "sizes": "10-12-14-16",
    "images": [
      "271026-1.jpg"
    ],
    "color": {
      "ar": "بوردو",
      "en": "Burgundy",
      "hex": "#7a1f3d"
    }
  },
  {
    "id": "271026-2",
    "code": "271026",
    "title": "جاكيت",
    "cat": "jacket",
    "price": 875,
    "sizes": "8",
    "images": [
      "271026-2-1.jpg"
    ],
    "color": {
      "ar": "كحلي",
      "en": "Navy",
      "hex": "#1f2f6b"
    }
  },
  {
    "id": "2093",
    "code": "2093",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 350,
    "sizes": "1-2-3",
    "images": [
      "2093-1.jpg",
      "2093-2.jpg",
      "2093-3.jpg"
    ]
  },
  {
    "id": "2092",
    "code": "2092",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 350,
    "sizes": "1-2-3",
    "images": [
      "2092-1.jpg",
      "2092-2.jpg",
      "2092-3.jpg"
    ]
  },
  {
    "id": "2091",
    "code": "2091",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 350,
    "sizes": "1-2-3",
    "images": [
      "2091-1.jpg",
      "2091-2.jpg",
      "2091-3.jpg"
    ]
  },
  {
    "id": "26189",
    "code": "26189",
    "title": "سوت بناتي",
    "cat": "suit-girls",
    "price": 450,
    "sizes": "6-9 / 9-12 / 12-18 / 18-24",
    "images": [
      "26189-1.jpg",
      "26189-2.jpg",
      "26189-3.jpg"
    ]
  },
  {
    "id": "8063",
    "code": "8063",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "6-8-10-12",
    "images": [
      "8063-1.jpg"
    ]
  },
  {
    "id": "8062",
    "code": "8062",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "6-8-10-12",
    "images": [
      "8062-1.jpg"
    ]
  },
  {
    "id": "8061",
    "code": "8061",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "6-8-10-12",
    "images": [
      "8061-1.jpg"
    ]
  },
  {
    "id": "8060",
    "code": "8060",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "6-8-10-12",
    "images": [
      "8060-1.jpg"
    ]
  },
  {
    "id": "271023",
    "code": "271023",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "271023-1.jpg",
      "271023-2.jpg"
    ]
  },
  {
    "id": "271022",
    "code": "271022",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "271022-1.jpg",
      "271022-2.jpg"
    ]
  },
  {
    "id": "271021",
    "code": "271021",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "271021-1.jpg",
      "271021-2.jpg"
    ]
  },
  {
    "id": "3902",
    "code": "3902",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 675,
    "sizes": "5-6-7-8-9-10",
    "images": [
      "3902-1.jpg",
      "3902-2.jpg"
    ]
  },
  {
    "id": "600400",
    "code": "600400",
    "title": "بنطلون جوجر",
    "cat": "pants",
    "price": 425,
    "sizes": "4-6-8-10-12-14-16",
    "images": [
      "600400-1.jpg",
      "600400-2.jpg",
      "600400-3.jpg"
    ]
  },
  {
    "id": "27071",
    "code": "27071",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "27071-1.jpg",
      "27071-2.jpg"
    ],
    "color": {
      "ar": "أوف وايت",
      "en": "Off-white",
      "hex": "#f3ede0"
    }
  },
  {
    "id": "27071-2",
    "code": "27071",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "27071-2-1.jpg",
      "27071-2-2.jpg"
    ],
    "color": {
      "ar": "بني",
      "en": "Brown",
      "hex": "#5a3a28"
    }
  },
  {
    "id": "27005",
    "code": "27005",
    "title": "هودي",
    "cat": "hoodie",
    "price": 650,
    "sizes": "8-10-12-14-16",
    "images": [
      "27005-1.jpg",
      "27005-2.jpg"
    ]
  },
  {
    "id": "27008",
    "code": "27008",
    "title": "هودي",
    "cat": "hoodie",
    "price": 650,
    "sizes": "8-10-12-14-16",
    "images": [
      "27008-1.jpg",
      "27008-2.jpg"
    ]
  },
  {
    "id": "27031",
    "code": "27031",
    "title": "هودي",
    "cat": "hoodie",
    "price": 750,
    "sizes": "8-10-12-14-16",
    "images": [
      "27031-1.jpg",
      "27031-2.jpg",
      "27031-3.jpg"
    ]
  },
  {
    "id": "1923",
    "code": "1923",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 450,
    "sizes": "1-2-3",
    "images": [
      "1923-1.jpg"
    ]
  },
  {
    "id": "7041",
    "code": "7041",
    "title": "بلوفر سادة",
    "cat": "tops",
    "price": 425,
    "sizes": "8-10-12",
    "images": [
      "7041-1.jpg",
      "7041-2.jpg",
      "7041-3.jpg"
    ]
  },
  {
    "id": "261086",
    "code": "261086",
    "title": "سويت شيرت بسوستة رمادي غامق",
    "cat": "sweatshirt",
    "price": 550,
    "sizes": "8-10-12-14-16",
    "images": [
      "261086-1.jpg"
    ]
  },
  {
    "id": "251171",
    "code": "251171",
    "title": "توب كم طويل بياقة عالية",
    "cat": "tops",
    "price": 425,
    "sizes": "8-10-12-14-16",
    "images": [
      "251171-1.jpg"
    ]
  },
  {
    "id": "7035",
    "code": "7035",
    "title": "بلوفر سادة",
    "cat": "tops",
    "price": 425,
    "sizes": "8-10-12",
    "images": [
      "7035-1.jpg",
      "7035-2.jpg"
    ]
  },
  {
    "id": "271051",
    "code": "271051",
    "title": "هودي أوفر سايز بناتي - وردي",
    "cat": "hoodie",
    "price": 675,
    "sizes": "8-10-12-14-16",
    "images": [
      "271051-1.jpg"
    ]
  },
  {
    "id": "3914",
    "code": "3914",
    "title": "سوت أولاد",
    "cat": "suit-boys",
    "price": 675,
    "sizes": "8-9-10-11-12",
    "images": [
      "3914-1.jpg",
      "3914-2.jpg"
    ]
  },
  {
    "id": "261004",
    "code": "261004",
    "title": "قميص + تيشيرت كم طويل",
    "cat": "tops",
    "price": 550,
    "sizes": "6-8-10-12",
    "images": [
      "261004-1.jpg",
      "261004-2.jpg"
    ]
  },
  {
    "id": "261223",
    "code": "261223",
    "title": "تيشيرت كم طويل أطفال",
    "cat": "tops",
    "price": 425,
    "sizes": "8-10-12-14-16",
    "images": [
      "261223-1.jpg",
      "261223-2.jpg"
    ]
  },
  {
    "id": "261220",
    "code": "261220",
    "title": "سويت شيرت",
    "cat": "sweatshirt",
    "price": 425,
    "sizes": "2-3-4-5-6",
    "images": [
      "261220-1.jpg",
      "261220-2.jpg",
      "261220-3.jpg"
    ]
  },
  {
    "id": "120057",
    "code": "120057",
    "title": "جاكيت",
    "cat": "jacket",
    "price": 875,
    "sizes": "8-10-12-14-16",
    "images": [
      "120057-1.jpg"
    ]
  },
  {
    "id": "261003",
    "code": "261003",
    "title": "جاكيت بناتي",
    "cat": "jacket",
    "price": 875,
    "sizes": "8-10-12-14-16",
    "images": [
      "261003-1.jpg"
    ]
  }
];

/* ===== يبني كتالوج صفحة المنتج والسلة تلقائياً من القائمة اللي فوق (لا تعدّل هنا) ===== */
(function(){
  var EN={"suit-girls":"Girls' Suit","suit-boys":"Boys' Suit","hoodie":"Hoodie","sweatshirt":"Sweatshirt","jacket":"Jacket","tops":"Top","pants":"Joggers"};
  var by={},order=[];
  PRODUCTS.forEach(function(p){
    if(!by[p.code]){by[p.code]=[];order.push(p.code)}
    by[p.code].push(p);
  });
  var products=order.map(function(code){
    var v=by[code],f=v[0];
    var sz=String(f.sizes||'');
    var sizes=(sz.indexOf('/')>-1?sz.split('/'):sz.split('-')).map(function(x){return x.trim()}).filter(Boolean);
    return {
      code:code,
      name:{en:EN[f.cat]||'Product',ar:f.title},
      sizes:sizes,
      group:f.cat,
      price:f.price,
      old:0,
      colors:v.map(function(x,i){
        var k=x.color;return {name:k?{en:k.en,ar:k.ar}:(v.length>1?{en:'Color '+(i+1),ar:'لون '+(i+1)}:{en:'',ar:''}),hex:k?k.hex:'#d9d9d9',imgs:x.images};
      })
    };
  });
  window.CATALOG={groups:[],products:products};
})();
