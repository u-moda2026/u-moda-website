/* ============================================================
   U-MODA — الكوليكشن الجديد 2027
   ده الملف الوحيد اللي فيه بيانات الموديلات. الصفحات التلاتة
   (index.html و product.html و new-collection.html) بتقرا منه.
   لتعديل سعر أو مقاس أو لون: عدّل هنا بس.

   group  : نوع القطعة (suit-girls, suit-boys, hoodie, sweatshirt, jacket, tops, pants, women)
   gender : girls بناتي | boys أولادي | both للاتنين | women حريمي
   ages   : kids أطفال (حتى 6 سنين) | teen محير (8-16)
   ============================================================ */
window.CATALOG = {products: [
/* ---- حريمي ---- */
{"code": "w1268", "name": {"en": "Polka-Dot Bow Blouse", "ar": "بلوزة منقطة بفيونكة"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 450, "old": 0, "colors": [{"name": {"en": "Beige Dots", "ar": "بيج منقط"}, "hex": "#e9e0d2", "imgs": ["w1268-beige.jpg"]}]},
{"code": "w1269", "name": {"en": "Striped Oversized Shirt", "ar": "قميص مقلم واسع"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 450, "old": 0, "colors": [{"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#6f93d6", "imgs": ["w1269-blue.jpg"]}, {"name": {"en": "Pink", "ar": "بينك"}, "hex": "#eab3dc", "imgs": ["w1269-pink.jpg"]}]},
{"code": "w12681", "name": {"en": "Textured Shirt", "ar": "قميص بتكستشر"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 450, "old": 0, "colors": [{"name": {"en": "Olive", "ar": "زيتي"}, "hex": "#7d8a5c", "imgs": ["w12681-olive.jpg"]}, {"name": {"en": "Black", "ar": "أسود"}, "hex": "#1a1a1a", "imgs": ["w12681-black.jpg"]}]},
{"code": "w12682", "name": {"en": "Side-Tie Shirt", "ar": "قميص برباط جانبي"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 400, "old": 0, "colors": [{"name": {"en": "Yellow", "ar": "أصفر"}, "hex": "#f5e27a", "imgs": ["w12682-yellow.jpg"]}]},
{"code": "w12683", "name": {"en": "Pocket Shirt", "ar": "قميص بجيب"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 450, "old": 0, "colors": [{"name": {"en": "Yellow", "ar": "أصفر"}, "hex": "#f5e27a", "imgs": ["w12683-yellow.jpg"]}, {"name": {"en": "Pink", "ar": "بينك"}, "hex": "#f0a8d0", "imgs": ["w12683-pink.jpg"]}]},
{"code": "w12684", "name": {"en": "Floral Button Dress", "ar": "فستان مشجر بزراير"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 550, "old": 0, "colors": [{"name": {"en": "Lavender", "ar": "لافندر"}, "hex": "#b9b8d3", "imgs": ["w12684-lavender.jpg"]}, {"name": {"en": "Peach", "ar": "خوخي"}, "hex": "#e2b8a3", "imgs": ["w12684-peach.jpg"]}, {"name": {"en": "Light Green", "ar": "أخضر فاتح"}, "hex": "#a9bb98", "imgs": ["w12684-green.jpg"]}, {"name": {"en": "Rose", "ar": "روز"}, "hex": "#e2a3b0", "imgs": ["w12684-rose.jpg"]}]},
{"code": "w12685", "name": {"en": "Floral Elastic-Waist Dress", "ar": "فستان مشجر بوسط أستك"}, "sizes": ["One Size"], "group": "women", "gender": "women", "ages": ["women"], "price": 650, "old": 0, "colors": [{"name": {"en": "Off-White", "ar": "أوف وايت"}, "hex": "#efe9df", "imgs": ["w12685-offwhite.jpg"]}]},
{"code": "w12686", "name": {"en": "Long Denim Skirt", "ar": "جيبة جينز طويلة"}, "sizes": ["M", "L", "XL"], "group": "women", "gender": "women", "ages": ["women"], "price": 550, "old": 0, "colors": [{"name": {"en": "Denim Blue", "ar": "أزرق جينز"}, "hex": "#1f3f73", "imgs": ["w12686-denim.jpg"]}]},
{"code": "w12687", "name": {"en": "Wide-Leg Belted Pants", "ar": "بنطلون واسع بحزام"}, "sizes": ["42", "44", "46"], "group": "women", "gender": "women", "ages": ["women"], "price": 450, "old": 0, "colors": [{"name": {"en": "Black", "ar": "أسود"}, "hex": "#1a1a1a", "imgs": ["w12687-black.jpg"]}]},
/* ---- أطفال ---- */
{"code": "8562", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["2", "3", "4", "5"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 675, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-8562-1.jpg"]}, {"name": {"en": "Purple", "ar": "بنفسجي"}, "hex": "#6b3fa0", "imgs": ["m-8562-3.jpg", "m-8562-2.jpg"]}]},
{"code": "8560", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["2", "3", "4", "5"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 675, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-8560-1.jpg"]}, {"name": {"en": "Purple", "ar": "بنفسجي"}, "hex": "#6b3fa0", "imgs": ["m-8560-2.jpg"]}]},
{"code": "4902", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["5", "6", "7", "8", "9", "10"], "group": "suit-girls", "gender": "girls", "ages": ["kids", "teen"], "price": 675, "old": 0, "colors": [{"name": {"en": "Pink & Grey", "ar": "وردي × رمادي"}, "hex": "#e7a6bd", "imgs": ["m-4902-1.jpg"]}, {"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-4902-2.jpg"]}]},
{"code": "2685", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["1", "2", "3"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 650, "old": 0, "colors": [{"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-2685-1.jpg"]}, {"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-2685-2.jpg"]}]},
{"code": "8553", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["2", "3", "4", "5"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 650, "old": 0, "colors": [{"name": {"en": "Cream", "ar": "كريمي"}, "hex": "#efe6d2", "imgs": ["m-8553-1.jpg"]}, {"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-8553-2.jpg"]}]},
{"code": "2947", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["1", "2", "3"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 450, "old": 0, "colors": [{"name": {"en": "Dusty Rose Pink", "ar": "بنك فاتح"}, "hex": "#eeb7bb", "imgs": ["m-2947-4.jpg"]}, {"name": {"en": "Salmon", "ar": "سيمون"}, "hex": "#f2a497", "imgs": ["m-2947-1.jpg"]}, {"name": {"en": "Dark Pink", "ar": "بنك غامق"}, "hex": "#e8579d", "imgs": ["m-2947-2.jpg", "m-2947-3.jpg"]}]},
{"code": "8569", "name": {"en": "Girls' Sweatshirt", "ar": "سويت شيرت بناتي"}, "sizes": ["2", "3", "4", "5"], "group": "sweatshirt", "gender": "girls", "ages": ["kids"], "price": 475, "old": 0, "colors": [{"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-8569-2.jpg", "m-8569-1.jpg"]}, {"name": {"en": "White", "ar": "أبيض"}, "hex": "#f7f7f7", "imgs": ["m-8569-3.jpg"]}]},
{"code": "8938", "name": {"en": "Girls' Sweatshirt", "ar": "سويت شيرت بناتي"}, "sizes": ["6", "7", "8", "9", "10"], "group": "sweatshirt", "gender": "girls", "ages": ["kids", "teen"], "price": 550, "old": 0, "colors": [{"name": {"en": "Cream", "ar": "كريمي"}, "hex": "#efe6d2", "imgs": ["m-8938-1.jpg"]}, {"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-8938-2.jpg"]}]},
{"code": "8561", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["2", "3", "4", "5"], "group": "hoodie", "gender": "girls", "ages": ["kids"], "price": 475, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-8561-1.jpg", "m-8561-2.jpg"]}, {"name": {"en": "Purple", "ar": "بنفسجي"}, "hex": "#6b3fa0", "imgs": ["m-8561-3.jpg", "m-8561-4.jpg"]}]},
{"code": "26189", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["6-9 شهر", "9-12 شهر", "12-18 شهر", "18-24 شهر"], "group": "suit-girls", "gender": "girls", "ages": ["kids"], "price": 450, "old": 0, "colors": [{"name": {"en": "Green", "ar": "أخضر"}, "hex": "#a9c98a", "imgs": ["m-26189-1.jpg"]}, {"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-26189-2.jpg"]}, {"name": {"en": "Cream", "ar": "كريمي"}, "hex": "#efe6d2", "imgs": ["m-26189-3.jpg"]}]},
{"code": "6918", "name": {"en": "Girls' Set", "ar": "سوت بناتي"}, "sizes": ["8", "10", "11", "12"], "group": "suit-girls", "gender": "girls", "ages": ["teen"], "price": 875, "old": 0, "colors": [{"name": {"en": "Burgundy", "ar": "بورجندي"}, "hex": "#6e1423", "imgs": ["m-6918-2.jpg", "m-6918-1.jpg"]}, {"name": {"en": "Navy", "ar": "نيفي"}, "hex": "#1b2440", "imgs": ["m-6918-3.jpg"]}]},
{"code": "271026", "name": {"en": "Girls' Jacket", "ar": "جاكيت بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "jacket", "gender": "girls", "ages": ["teen"], "price": 875, "old": 0, "colors": [{"name": {"en": "Red", "ar": "أحمر"}, "hex": "#a3122b", "imgs": ["m-271026-1.jpg"], "sizes": ["10", "12", "14", "16"]}, {"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#2f5fa8", "imgs": ["m-271026-2.jpg"], "sizes": ["8"]}]},
{"code": "271023", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-271023-1.jpg", "m-271023-2.jpg"]}]},
{"code": "271022", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Burgundy", "ar": "نبيتي"}, "hex": "#6e1423", "imgs": ["m-271022-1.jpg", "m-271022-2.jpg"]}]},
{"code": "271021", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-271021-1.jpg"]}, {"name": {"en": "Light Blue", "ar": "لبني"}, "hex": "#a9c8e6", "imgs": ["m-271021-2.jpg"]}]},
{"code": "27005", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 650, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-27005-2.jpg", "m-27005-1.jpg"]}]},
{"code": "27008", "name": {"en": "Girls' Hoodie", "ar": "هودي بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 650, "old": 0, "colors": [{"name": {"en": "Light Blue", "ar": "لبني"}, "hex": "#a9c8e6", "imgs": ["m-27008-1.jpg", "m-27008-2.jpg"]}]},
{"code": "271051", "name": {"en": "Girls' Oversized Hoodie", "ar": "هودي بناتي أوفر سايز"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "girls", "ages": ["teen"], "price": 675, "old": 0, "colors": [{"name": {"en": "Pink", "ar": "وردي"}, "hex": "#e89ab5", "imgs": ["m-271051-1.jpg"]}]},
{"code": "261003", "name": {"en": "Girls' Jacket", "ar": "جاكيت بناتي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "jacket", "gender": "girls", "ages": ["teen"], "price": 875, "old": 0, "colors": [{"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-261003-1.jpg"]}]},
{"code": "2093", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["1", "2", "3"], "group": "suit-boys", "gender": "boys", "ages": ["kids"], "price": 350, "old": 0, "colors": [{"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#2f5fa8", "imgs": ["m-2093-1.jpg"]}, {"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-2093-2.jpg"]}, {"name": {"en": "Mint", "ar": "أخضر فاتح"}, "hex": "#9fcdbd", "imgs": ["m-2093-3.jpg"]}]},
{"code": "2092", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["1", "2", "3"], "group": "suit-boys", "gender": "boys", "ages": ["kids"], "price": 350, "old": 0, "colors": [{"name": {"en": "Brown", "ar": "بني"}, "hex": "#6b4a36", "imgs": ["m-2092-1.jpg"]}, {"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-2092-2.jpg"]}, {"name": {"en": "Beige & Blue", "ar": "بيج × أزرق"}, "hex": "#c9b79a", "imgs": ["m-2092-3.jpg"]}]},
{"code": "2091", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["1", "2", "3"], "group": "suit-boys", "gender": "boys", "ages": ["kids"], "price": 350, "old": 0, "colors": [{"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-2091-1.jpg"]}, {"name": {"en": "Olive", "ar": "زيتي"}, "hex": "#5d6b3c", "imgs": ["m-2091-2.jpg"]}, {"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#2f5fa8", "imgs": ["m-2091-3.jpg"]}]},
{"code": "8063", "name": {"en": "Boys' Hoodie", "ar": "هودي أولادي"}, "sizes": ["6", "8", "10", "12"], "group": "hoodie", "gender": "boys", "ages": ["kids", "teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Olive", "ar": "زيتي"}, "hex": "#5d6b3c", "imgs": ["m-8063-1.jpg"]}]},
{"code": "8062", "name": {"en": "Boys' Hoodie", "ar": "هودي أولادي"}, "sizes": ["6", "8", "10", "12"], "group": "hoodie", "gender": "boys", "ages": ["kids", "teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Grey", "ar": "رمادي"}, "hex": "#9a9a9e", "imgs": ["m-8062-1.jpg"]}]},
{"code": "8061", "name": {"en": "Boys' Hoodie", "ar": "هودي أولادي"}, "sizes": ["6", "8", "10", "12"], "group": "hoodie", "gender": "boys", "ages": ["kids", "teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Mauve", "ar": "موف"}, "hex": "#b48a9c", "imgs": ["m-8061-1.jpg"]}]},
{"code": "8060", "name": {"en": "Boys' Hoodie", "ar": "هودي أولادي"}, "sizes": ["6", "8", "10", "12"], "group": "hoodie", "gender": "boys", "ages": ["kids", "teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Purple", "ar": "بنفسجي"}, "hex": "#6b3fa0", "imgs": ["m-8060-1.jpg"]}]},
{"code": "3902", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["5", "6", "7", "8", "9", "10"], "group": "suit-boys", "gender": "boys", "ages": ["kids", "teen"], "price": 675, "old": 0, "colors": [{"name": {"en": "Navy", "ar": "كحلي"}, "hex": "#1b2440", "imgs": ["m-3902-1.jpg"]}, {"name": {"en": "Charcoal", "ar": "رمادي غامق"}, "hex": "#3d3f42", "imgs": ["m-3902-2.jpg"]}]},
{"code": "1923", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["1", "2", "3"], "group": "suit-boys", "gender": "boys", "ages": ["kids"], "price": 450, "old": 0, "colors": [{"name": {"en": "Teal", "ar": "تركواز"}, "hex": "#6fb8ad", "imgs": ["m-1923-1.jpg"]}]},
{"code": "261220", "name": {"en": "Boys' Sweatshirt", "ar": "سويت شيرت أولادي"}, "sizes": ["2", "3", "4", "5", "6"], "group": "sweatshirt", "gender": "boys", "ages": ["kids"], "price": 425, "old": 0, "colors": [{"name": {"en": "Grey", "ar": "رمادي"}, "hex": "#9a9a9e", "imgs": ["m-261220-1.jpg"]}, {"name": {"en": "Yellow Camo", "ar": "مموه أصفر"}, "hex": "#d8cf5a", "imgs": ["m-261220-2.jpg"]}, {"name": {"en": "Pink Camo", "ar": "مموه وردي"}, "hex": "#d9a3a8", "imgs": ["m-261220-3.jpg"]}]},
{"code": "27071", "name": {"en": "Boys' Hoodie", "ar": "هودي أولادي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "boys", "ages": ["teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Off-White", "ar": "أوف وايت"}, "hex": "#f1ede4", "imgs": ["m-27071-1.jpg", "m-27071-2.jpg"]}, {"name": {"en": "Brown", "ar": "بني"}, "hex": "#6b4a36", "imgs": ["m-27071-4.jpg", "m-27071-3.jpg"]}]},
{"code": "261086", "name": {"en": "Boys' Zip-Neck Sweatshirt", "ar": "سويت شيرت بسوستة أولادي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "sweatshirt", "gender": "boys", "ages": ["teen"], "price": 550, "old": 0, "colors": [{"name": {"en": "Dark Grey", "ar": "رمادي غامق"}, "hex": "#33363b", "imgs": ["m-261086-1.jpg"]}]},
{"code": "3914", "name": {"en": "Boys' Set", "ar": "سوت أولاد"}, "sizes": ["8", "9", "10", "11", "12"], "group": "suit-boys", "gender": "boys", "ages": ["teen"], "price": 675, "old": 0, "colors": [{"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#2f5fa8", "imgs": ["m-3914-1.jpg"]}, {"name": {"en": "Olive", "ar": "زيتي"}, "hex": "#5d6b3c", "imgs": ["m-3914-2.jpg"]}]},
{"code": "120057", "name": {"en": "Boys' Jacket", "ar": "جاكيت أولادي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "jacket", "gender": "boys", "ages": ["teen"], "price": 875, "old": 0, "colors": [{"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-120057-1.jpg"]}]},
{"code": "600400", "name": {"en": "Joggers", "ar": "بنطلون جوجر"}, "sizes": ["4", "6", "8", "10", "12", "14", "16"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 425, "old": 0, "colors": [{"name": {"en": "Denim Blue", "ar": "أزرق جينز"}, "hex": "#6f8fb0", "imgs": ["m-600400-1.jpg"]}, {"name": {"en": "Black", "ar": "أسود"}, "hex": "#111111", "imgs": ["m-600400-2.jpg"]}, {"name": {"en": "Navy", "ar": "كحلي"}, "hex": "#1b2440", "imgs": ["m-600400-3.jpg"]}]},
{"code": "261004", "name": {"en": "Shirt + Long-Sleeve T-Shirt", "ar": "قميص + تيشيرت كم طويل"}, "sizes": ["6", "8", "10", "12"], "group": "tops", "gender": "both", "ages": ["kids", "teen"], "price": 550, "old": 0, "colors": [{"name": {"en": "Burgundy Check", "ar": "كاروه نبيتي"}, "hex": "#7a2b3a", "imgs": ["m-261004-1.jpg"]}, {"name": {"en": "Navy Check", "ar": "كاروه كحلي"}, "hex": "#2b3350", "imgs": ["m-261004-2.jpg"]}]},
{"code": "27031", "name": {"en": "Hoodie", "ar": "هودي"}, "sizes": ["8", "10", "12", "14", "16"], "group": "hoodie", "gender": "both", "ages": ["teen"], "price": 750, "old": 0, "colors": [{"name": {"en": "Beige", "ar": "بيج"}, "hex": "#d9c6a8", "imgs": ["m-27031-1.jpg"]}, {"name": {"en": "Light Grey", "ar": "رمادي فاتح"}, "hex": "#d6d4cf", "imgs": ["m-27031-2.jpg"]}, {"name": {"en": "Grey", "ar": "رمادي"}, "hex": "#9a9a9e", "imgs": ["m-27031-3.jpg"]}]},
{"code": "7041", "name": {"en": "Plain Slim-Fit Pullover", "ar": "بلوفر سادة سليم فيت"}, "sizes": ["8", "10", "12"], "group": "tops", "gender": "both", "ages": ["teen"], "price": 425, "old": 0, "colors": [{"name": {"en": "Light Blue", "ar": "لبني"}, "hex": "#a9c8e6", "imgs": ["m-7041-1.jpg"]}, {"name": {"en": "Green", "ar": "أخضر"}, "hex": "#a9c98a", "imgs": ["m-7041-2.jpg"]}, {"name": {"en": "Lilac", "ar": "ليلك"}, "hex": "#c79ae0", "imgs": ["m-7041-3.jpg"]}]},
{"code": "251171", "name": {"en": "Long-Sleeve Roll-Neck Top", "ar": "توب رول نك كم طويل"}, "sizes": ["8", "10", "12", "14", "16"], "group": "tops", "gender": "both", "ages": ["teen"], "price": 425, "old": 0, "colors": [{"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#2f5fa8", "imgs": ["m-251171-1.jpg"]}]},
{"code": "7035", "name": {"en": "Plain Slim-Fit Pullover", "ar": "بلوفر سادة سليم فيت"}, "sizes": ["8", "10", "12"], "group": "tops", "gender": "both", "ages": ["teen"], "price": 425, "old": 0, "colors": [{"name": {"en": "Mint", "ar": "أخضر فاتح"}, "hex": "#9fcdbd", "imgs": ["m-7035-1.jpg"]}, {"name": {"en": "Mustard", "ar": "مسطردة"}, "hex": "#c98a2b", "imgs": ["m-7035-2.jpg"]}]},
{"code": "261223", "name": {"en": "Long-Sleeve T-Shirt", "ar": "تيشيرت كم طويل"}, "sizes": ["8", "10", "12", "14", "16"], "group": "tops", "gender": "both", "ages": ["teen"], "price": 425, "old": 0, "colors": [{"name": {"en": "Navy", "ar": "كحلي"}, "hex": "#1b2440", "imgs": ["m-261223-1.jpg"]}, {"name": {"en": "Light Blue", "ar": "لبني"}, "hex": "#a9c8e6", "imgs": ["m-261223-2.jpg"]}]},
/* ---- بناطيل جينز (بناتي وأولادي) — مقاسات 19 إلى 30 ---- */
{"code": "3330", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 600, "old": 0, "colors": [{"name": {"en": "Blue", "ar": "أزرق"}, "hex": "#3f6fa6", "imgs": ["m-3330-1.jpg"]}]},
{"code": "3331", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 600, "old": 0, "colors": [{"name": {"en": "Dark Blue", "ar": "أزرق غامق"}, "hex": "#4a5f80", "imgs": ["m-3331-1.jpg"]}]},
{"code": "3332", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 450, "old": 0, "colors": [{"name": {"en": "Washed Blue", "ar": "أزرق مغسول"}, "hex": "#4f7691", "imgs": ["m-3332-1.jpg"]}]},
{"code": "3333", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 450, "old": 0, "colors": [{"name": {"en": "Black", "ar": "أسود"}, "hex": "#2a2a2c", "imgs": ["m-3333-1.jpg"]}]},
{"code": "3334", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 450, "old": 0, "colors": [{"name": {"en": "Medium Blue", "ar": "أزرق متوسط"}, "hex": "#5f8fc0", "imgs": ["m-3334-1.jpg"]}]},
{"code": "3335", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 450, "old": 0, "colors": [{"name": {"en": "Light Blue", "ar": "لبني فاتح"}, "hex": "#c4dbe8", "imgs": ["m-3335-1.jpg"]}]},
{"code": "3336", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 600, "old": 0, "colors": [{"name": {"en": "Grey", "ar": "رمادي"}, "hex": "#8f9092", "imgs": ["m-3336-1.jpg"]}]},
{"code": "3337", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 600, "old": 0, "colors": [{"name": {"en": "Medium Blue", "ar": "أزرق متوسط"}, "hex": "#5b8cc2", "imgs": ["m-3337-1.jpg"]}]},
{"code": "3338", "name": {"en": "Jeans", "ar": "بنطلون جينز"}, "sizes": ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "group": "pants", "gender": "both", "ages": ["kids", "teen"], "price": 600, "old": 0, "colors": [{"name": {"en": "Medium Blue", "ar": "أزرق متوسط"}, "hex": "#5d86b4", "imgs": ["m-3338-1.jpg"]}]}
]};

/* نفس البيانات بالشكل اللي صفحة new-collection.html بتستخدمه (متولدة تلقائي، ما تتعدلش) */
var PRODUCTS = CATALOG.products.map(function(p){
  var images = [], imageColors = [];
  p.colors.forEach(function(c){ c.imgs.forEach(function(u){ images.push(u); imageColors.push(c.name.ar); }); });
  var months = /شهر/.test(p.sizes[0]);
  var sizes = months ? p.sizes.join(' / ') : p.sizes.join('-');
  p.colors.forEach(function(c){ if(c.sizes && c.sizes.length < p.sizes.length) sizes += ' (' + c.name.ar + ': ' + c.sizes.join('-') + ' فقط)'; });
  return {code:p.code, title:p.name.ar, cat:p.group, gender:p.gender, ages:p.ages, price:p.price, sizes:sizes, images:images, imageColors:imageColors};
});

/* ============================================================
   البحث — شغال في كل الصفحات اللي فيها خانة البحث (الرئيسية وصفحة الموديل)
   لأن الملف ده بيتحمل فيهم كلهم. الكتابة + Enter (أو الضغط على العدسة):
   - لو المكتوب كود موديل بالظبط  -> يفتح صفحة الموديل
   - غير كده -> يفتح صفحة الكوليكشن بنتايج البحث
   ============================================================ */
(function(){
  function norm(s){
    return String(s||'').toLowerCase()
      .replace(/[\u064B-\u0652\u0640]/g,'').replace(/[\u0623\u0625\u0622]/g,'\u0627')
      .replace(/\u0629/g,'\u0647').replace(/\u0649/g,'\u064A')
      .replace(/[\u0660-\u0669]/g,function(d){return String(d.charCodeAt(0)-0x0660)});
  }
  var G={girls:'بناتي بنات بنت girls girl',boys:'أولادي أولاد ولادي ولاد ولد boys boy',both:'بناتي بنات بنت أولادي أولاد ولادي ولاد ولد girls girl boys boy',women:'حريمي ستات نساء women woman ladies'};
  var T={'suit-girls':'سوت طقم set suit','suit-boys':'سوت طقم set suit',hoodie:'هودي هوديز hoodie',sweatshirt:'سويت شيرت سويتشيرت sweatshirt',jacket:'جاكيت جاكت jacket',tops:'بلوفر توب تيشيرت قميص top pullover shirt',pants:'بنطلون بناطيل pants trousers',women:'قميص بلوزة فستان جيبة بنطلون shirt blouse dress skirt pants'};
  var A={kids:'أطفال اطفال بيبي kids baby',teen:'محير teen',women:'حريمي women'};
  function hay(p){
    var c=p.colors.map(function(k){return k.name.ar+' '+k.name.en}).join(' ');
    var a=(p.ages||[]).map(function(x){return A[x]||''}).join(' ');
    return norm([p.code,p.name.ar,p.name.en,c,G[p.gender]||'',T[p.group]||'',a,p.sizes.join(' ')].join(' '));
  }
  /* بيرجع أكواد الموديلات اللي فيها كل كلمات البحث */
  window.UMODA_SEARCH=function(q){
    var t=norm(q).split(/\s+/).filter(Boolean);
    if(!t.length) return null;
    return CATALOG.products.filter(function(p){var h=hay(p);return t.every(function(w){return h.indexOf(w)>=0})}).map(function(p){return String(p.code)});
  };
  function go(q){
    q=String(q||'').trim(); if(!q) return;
    var code=norm(q);
    var exact=CATALOG.products.some(function(p){return String(p.code)===code});
    location.href=exact?'product.html?code='+encodeURIComponent(code):'new-collection.html?q='+encodeURIComponent(q);
  }
  function hook(){
    document.querySelectorAll('.search input').forEach(function(inp){
      var busy=false,run=function(e){if(e)e.preventDefault();if(busy)return;busy=true;setTimeout(function(){busy=false},400);go(inp.value)};
      inp.setAttribute('enterkeyhint','search');
      inp.addEventListener('keydown',function(e){if(e.key==='Enter'||e.keyCode===13)run(e)});
      inp.addEventListener('search',function(){if(inp.value)run()});
      var ic=inp.parentNode.querySelector('svg');
      if(ic){ic.style.cursor='pointer';ic.addEventListener('click',run)}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hook);else hook();
})();

/* ============================================================
   المفضلة (القلب) + أزرار وروابط كانت موجودة شكل بس
   - القلب على أي موديل بيتحفظ على جهاز العميل
   - القلب اللي فوق في الهيدر بيفتح صفحة المفضلة
   - "حسابي" وأيقونة الحساب بيفتحوا صفحة تتبع الطلب (الموقع مفيهوش تسجيل حسابات)
   - رابط "وصل حديثاً" القديم (#new) بيفتح صفحة الكوليكشن
   ============================================================ */
(function(){
  var KEY='u-fav';
  function get(){try{var a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a.map(String):[]}catch(e){return[]}}
  function set(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){}}
  window.UMODA_FAV={
    list:get,
    has:function(c){return get().indexOf(String(c))>=0},
    toggle:function(c){c=String(c);var a=get(),i=a.indexOf(c);if(i<0)a.push(c);else a.splice(i,1);set(a);return i<0}
  };
  function mark(){
    document.querySelectorAll('.card[data-code] .fav').forEach(function(b){
      var on=UMODA_FAV.has(b.closest('.card').dataset.code),t=on?'\u2665':'\u2661';
      if(b.getAttribute('aria-pressed')!==String(on))b.setAttribute('aria-pressed',String(on));
      if(b.textContent!==t)b.textContent=t;
    });
  }
  window.UMODA_FAV_MARK=mark;
  document.addEventListener('click',function(e){
    var b=e.target&&e.target.closest?e.target.closest('.card[data-code] .fav'):null;
    if(b){UMODA_FAV.toggle(b.closest('.card').dataset.code);setTimeout(mark,0)}
  },true);
  function hook(){
    document.querySelectorAll('.icons button[aria-label="Wishlist"]').forEach(function(b){b.addEventListener('click',function(){location.href='new-collection.html?fav=1'})});
    document.querySelectorAll('.icons button[aria-label="Account"]').forEach(function(b){b.addEventListener('click',function(){location.href='track.html'})});
    document.querySelectorAll('.top nav a[href="#"]').forEach(function(a){a.setAttribute('href','track.html')});
    document.querySelectorAll('a[href="#new"],a[href="index.html#new"]').forEach(function(a){a.setAttribute('href','new-collection.html')});
    mark();
    var cols=document.getElementById('cols');
    if(cols&&window.MutationObserver)new MutationObserver(mark).observe(cols,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hook);else hook();
})();

/* ============================================================
   سلايدر الحريمي في الصفحة الرئيسية
   بيظهر لوحده فوق موديلات الأطفال، وبيعرض كل موديل group بتاعه "women".
   لإضافة موديل حريمي جديد: ضيف سطر فوق في قسم "حريمي" بس.
   ============================================================ */
(function(){
  function fmt(n,ar){return Number(n).toLocaleString('en-US')+(ar?' \u062c\u0646\u064a\u0647':' EGP')}
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function build(){
    var best=document.getElementById('best'),cols=document.getElementById('cols');
    if(!best||!cols)return;
    var items=CATALOG.products.filter(function(p){return p.group==='women'});
    if(!items.length)return;
    var ar=document.documentElement.lang==='ar';
    var d=document.getElementById('women-c');
    if(!d){d=document.createElement('div');d.className='col';d.id='women-c';best.insertBefore(d,cols)}
    d.innerHTML='<h3>'+(ar?'\u062d\u0631\u064a\u0645\u064a':'Women')+'</h3><div class="slider"><button class="arr a1" aria-label="Previous">\u2039</button><div class="track">'
      +items.map(function(p){
        var img=p.colors[0].imgs[0],nm=(ar?p.name.ar:p.name.en)+' \u2013 '+p.code;
        return '<article class="card" data-code="'+esc(p.code)+'"><span class="tag">'+(ar?'\u062c\u062f\u064a\u062f':'New')+'</span><button class="fav" aria-pressed="false" aria-label="Wishlist">\u2661</button>'
          +'<div class="img" style="background:#eee url('+esc(img)+') center 22%/cover"></div>'
          +'<div class="info"><b>'+esc(nm)+'</b><span class="p">'+fmt(p.price,ar)+'</span><button class="add">'+(ar?'\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0642\u0627\u0633':'Choose size')+'</button></div></article>';
      }).join('')
      +'</div><button class="arr a2" aria-label="Next">\u203a</button></div>';
    var t=d.querySelector('.track');
    function by(dir){var k=t.children[0];t.scrollBy({left:dir*(k?k.offsetWidth+14:300)})}
    d.querySelector('.a1').onclick=function(){by(-1)};
    d.querySelector('.a2').onclick=function(){by(1)};
    d.querySelectorAll('.add').forEach(function(b){b.onclick=function(){location.href='product.html?code='+encodeURIComponent(b.closest('.card').dataset.code)}});
    if(window.UMODA_FAV_MARK)window.UMODA_FAV_MARK();
  }
  function start(){
    build();
    if(window.MutationObserver)new MutationObserver(build).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
