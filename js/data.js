/* ===== DATA & SETTINGS — edit this file to change content ===== */

/* ---- LINKS ---- */
const LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100063910696276",
  messenger: "https://www.messenger.com/t/105458504664204",
  instagram: "https://www.instagram.com/bigdreameventby.aki_ali",
  email: "mailto:bigdreamevents25@gmail.com"
};
const EMAIL = "bigdreamevents25@gmail.com";
const PHONES = "02 8516 1206 / 0953 970 0029";
const ADDRESS = "Lagro Subd., Quezon City";

/* Seconds each home photo stays before fading to the next one */
const HERO_SECONDS = 6;

const HERO_IMG = [
  "images/carousel5.jpg",
  "images/carousel2.png",
  "images/carousel4.jpg",
  "images/carousel6.jpg",
];

const GALLERY = [
  "images/Gallery1.jpg",
  "images/Gallery2.jpg",
  "images/Gallery3.jpg",
  "images/Gallery4.jpg",
  "images/Gallery5.jpg",
  "images/Gallery6.jpg",
];             /* 6 gallery photos */
const CONTACT_BG = "images/Background1.jpg";          /* contact section background */
const IMG = {};                 /* optional cover photo per service card, key = the service name, e.g. IMG["Wedding"] = "images/wedding-cover.jpg" */
const SHEETS = "images/sheets/";
const S = f => SHEETS + f;

const SERVICES = [
  /* ---------- EVENT PACKAGES ---------- */
  { id:"wedding", cat:"Event Packages", n:"Wedding", e:"💍", price:"Starting at ₱85,000", from:"₱85,000",
    note:"Complete packages with venue, within your area. ₱30,000 off on all wedding packages.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Magical",  pax:"80 pax",  p:"₱130,000", was:"₱160,000", sheet:1,
        inc:["Good for 80 pax, with venue", "1 layered cake, smoke machine, photobooth and 1 bottle of wine", "3-4 hours of hosting, 2 OTD coordinators and 1 event organizer", "Hair and makeup (HMU service) is available as an add-on"] },
     { n:"Romantic", pax:"100 pax", p:"₱190,000", was:"₱220,000", sheet:2,
        inc:["Good for 100 pax, with venue", "2-layered cake and unlimited photobooth for 2 hours", "Prenuptial pictorial session and modern white bridal car", "Entourage flowers, plus hair and makeup for bride and groom", "4 OTD coordinators and 1 event organizer"] },
     { n:"Euphoric", pax:"120 pax", p:"₱220,000", was:"₱250,000", sheet:3,
        inc:["Good for 120 pax, with venue", "Everything in Romantic", "Grazing bar for 50 pax included", "5 OTD coordinators and 1 event organizer"] },
     { n:"Radiant",  pax:"150 pax", p:"₱260,000", was:"₱290,000", sheet:4,
        inc:["Good for 150 pax, with venue", "Everything in Euphoric", "4-hour mobile bar included, with 8 drinks on your personal drink menu", "Same-day-edit photo coverage", "5 OTD coordinators and 1 event organizer"] }    ],
    inc:[
      "Venue included, complete package within your area",
      "Catering: 3 main dishes (pork, chicken, fish), rice, pasta or vegetables, dessert, drinks, buffet setup, uniformed waiters",
      "Styling: custom name and backdrop, couch, bouquet, cake arch, garland, grass carpet, entrance balloon arc",
      "Lights and sounds with DJ and tech crew",
      "Smoke machine, mannequin use, 1 bottle of wine, 10 hardcopy invitations, photobooth and photo coverage",
      "3-4 hours of hosting, on-the-day coordinators and an event organizer",
      "Romantic, Euphoric and Radiant add: 2-layered cake, unlimited photobooth for 2 hours, prenuptial pictorial, modern white bridal car, entourage flowers, hair and makeup",
      "Euphoric and Radiant also include a grazing bar for 50 pax; Radiant adds a 4-hour mobile bar"
    ],
    imgs:[("images/Marriage.jpg"), ("images/MagicalWedding.jpg"), ("images/RomanticWedding.jpg"), ("images/EuphoricWedding.jpg"), ("images/RadiantWedding.jpg")] },

  { id:"debut", cat:"Event Packages", n:"Debut", e:"👗", price:"Starting at ₱88,000", from:"₱88,000",
    note:"Prices are without venue. Add ₱25,000 for with venue.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Classic", pax:"50 pax", was:"₱98,000",  p:"₱88,000", sheet:1,
         inc:["Good for 50 pax", "Photographer from preparation to recognition and unlimited photobooth for 2 hours", "3-4 hours of hosting, 2 OTD coordinators and 2 event organizers", "18 roses, 18 candles and red wine for the 18 toast"] },
      { n:"Signature", pax:"80 pax", was:"₱120,000", p:"₱92,000", sheet:2,
         inc:["Good for 80 pax", "Everything in Gloss", "Full coverage with preparation shots and a 3-5 minute video highlight"] },
      { n:"Elegance", pax:"100 pax", was:"₱145,000", p:"₱125,000", sheet:3,
         inc:["Good for 100 pax", "Everything in Dazzle", "Airbrush hair and makeup: up to 3 looks, 3D lashes, skin care prep and eyebrow shaping"] },
      { n:"Prestige", pax:"120 pax", was:"₱155,000", p:"₱135,000", sheet:4,
         inc:["Good for 120 pax", "Everything in Gorgeous", "4-hour mobile bar with 8 drinks on your personal drink menu"] }
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, buffet setup, uniformed waiters",
      "Styling: custom name and backdrop, couch, bouquet, cake arch, garland, grass carpet, entrance balloon arc",
      "Lights and sounds with DJ and tech crew",
      "Hosting for 3-4 hours, 2 OTD coordinators, 2 event organizers",
      "Photographer and unlimited photobooth for 2 hours",
      "Freebies: 18 roses, 18 candles, red wine fo  r the 18 toast, 10 invitations, debut planning assistant, welcome board, mannequin use",
      "Dazzle, Gorgeous and Stunning add full photo coverage with a 3-5 minute video highlight",
      "Gorgeous and Stunning add airbrush hair and makeup; Stunning adds a 4-hour mobile bar"
    ],
    imgs:[("images/Debut.jpg"), ("images/Debut1.jpg"), ("images/Debut2.jpg"), ("images/Debut3.jpg"), ("images/Debut4.jpg")] },

  { id:"baptismal", cat:"Event Packages", n:"Baptismal", e:"🕊️", price:"Starting at ₱55,000", from:"₱55,000",
    note:"Prices are without venue. Add ₱25,000 if with venue.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Little Blessing",  pax:"50 pax", was:"₱67,000",  p:"₱55,000", sheet:1,
         inc:["Good for 50 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Blessed Moments",  pax:"80 pax", was:"₱92,000", p:"₱80,000", sheet:2,
         inc:["Good for 80 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Heavenely Celebration",  pax:"100 pax", was:"₱112,000", p:"₱100,000", sheet:3,
         inc:["Good for 100 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, motif of your choice, buffet setup",
      "Dressed round tables and chairs, uniformed waitress and food attendant",
      "Basic lights and sounds system",
      "Styling: backdrop, styro name, standees, garland, cake arch, grass carpet, entrance balloon arch",
      "Celestial freebies: 1-layer cake, 10 table centerpieces, photo standee or welcome board, lighted number standee",
      "Enchanting upgrades: 2-layer cake, unlimited photobooth for 2 hours, professional photographer, enhanced photos via Google Drive"
    ],
    imgs:[("images/Baptismal1.jpg"), ("images/Baptismal.jpg"), ("images/Baptismal2.jpg"), ("images/Baptismal3.jpg")] },

  { id:"kiddie", cat:"Event Packages", n:"Kiddie Party", e:"🎈", price:"Starting at ₱68,000", from:"₱68,000",
    note:"Prices are without venue. With venue is ₱25,000 more.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Little Dreamer",  pax:"30 adults + 20 kids (50 pax)", was:"₱93,000",  p:"₱68,000", sheet:1,
         inc:["30 adults + 20 kids (50 pax)", "1 tier cake", "2 clowns (host and magic show) and 3 coordinators", "Sweet treats / candy buffet and 30 kiddie loot bags"] },
      { n:"Magical Moments", pax:"60 adults + 20 kids (80 pax)", was:"₱103,000", p:"₱87,000", sheet:2,
         inc:["60 adults + 20 kids (80 pax)", "2 tier cake and unlimited photobooth for 2 hours", "2 clowns (host and magic show) and 3 coordinators", "Sweet treats / candy buffet and 30 kiddie loot bags"] },
      { n:"Royal Kids", pax:"70 adults + 30 kids (100 pax)", was:"₱120,000", p:"₱98,000", sheet:3,
         inc:["70 adults + 30 kids (100 pax)", "2 tier cake and unlimited photobooth for 2 hours", "2 clowns (host and magic show) and 3 coordinators", "Sweet treats / candy buffet and 30 kiddie loot bags"] }
    ],
    inc:[
      "Catering for adults plus a kids menu: spaghetti, fried chicken, hotdog with marshmallows on a stick, drinks",
      "2 clowns (host and magic show) and 3 coordinators",
      "Styling: custom name and backdrop, couch, garland, cake arch, grass carpet, entrance balloon arch",
      "Lights and sounds with DJ and tech crew",
      "Sweet treats and candy buffet, registration table, 30 kiddie loot bags",
      "Bubbly: 1-tier cake. Amusing: 2-tier cake and unlimited photobooth for 2 hours"
    ],
    imgs:[("images/Kiddie.jpg"), ("images/Kiddie1.jpg"), ("images/Kiddie2.jpg"), ("images/Kiddie3.jpg")] },

  { id:"adult", cat:"Event Packages", n:"Adult Party", e:"🥂", price:"Starting at ₱88,000", from:"₱88,000",
    note:"Prices shown are without venue and with venue. Detailed inclusions are on the 120 and 150 pax sheets.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Silver Elegant", pax:"50 pax", was:"₱97,000",  p:"₱88,000", sheet:1,
         inc:["Good for 80 pax", "The detailed list is shown for the 120 and 150 pax packages. Message us for this size's exact inclusions."] },
      { n:"Golden Celebration", pax:"80 pax", was:"₱102,000", p:"₱95,000",  sheet:2,
         inc:["Good for 100 pax", "The detailed list is shown for the 120 and 150 pax packages. Message us for this size's exact inclusions."] },
      { n:"Premium Package", pax:"100 pax", was:"₱127,000", p:"₱115,000", sheet:3,
         inc:["Good for 120 pax", "Photographer, unlimited photobooth for 2 hours and a 3-5 minute video highlight", "1 layer cake, event planning assistant, 10 table centerpieces", "Grazing bar is available as an add-on"] },
      { n:"Platinum Package", pax:"120 pax", was:"₱168,000", p:"₱155,000", sheet:4,
         inc:["Good for 150 pax", "Everything in the 120 pax package", "Grazing bar included"] }
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, buffet setup, uniformed waiters",
      "Styling: custom name and backdrop, couch, bouquet, cake arch, garland, grass carpet, entrance balloon arc",
      "Lights and sounds with DJ and tech crew",
      "Professional photographer, enhanced photos via Google Drive, unlimited photobooth for 2 hours, 3-5 minute video highlight",
      "Freebies: 1-layer cake, invitations, event planning assistant, 10 table centerpieces, welcome board, light number standee",
      "The 150 pax package includes a grazing bar"
    ],
    imgs:[("images/OTDAdult.jpg"), ("images/OTDAdult1.jpg"), ("images/OTDAdult2.jpg"), ("images/OTDAdult3.jpg"), ("images/OTDAdult4.jpg")] },

  { id:"corporate", cat:"Event Packages", n:"Corporate Event", e:"🏢", price:"Starting at ₱74,000", from:"₱74,000",
    note:"Price varies depending on the number of pax.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Christmas Classic",  p:"₱88,000", pax:"80 pax", sheet:1,
         inc:["Good for 80 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"Christmas Deluxe", p:"₱95,000", pax:"100 pax", sheet:2,
         inc:["Good for 100 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"Christmas Elite", p:"₱120,000", pax:"150 pax", sheet:3,
         inc:["Good for 150 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"Big Event", p:"₱148,000", pax:"200 pax", sheet:4,
         inc:["Good for 200 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] }
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, buffet setup with centerpiece, uniformed waiters",
      "Styling: custom name and backdrop, couch, bouquet, cake arch, garland, grass carpet, entrance balloon arc",
      "Lights and sounds with DJ and tech crew",
      "Freebies: 2 coordinators, gift table, registration table",
      "Add-ons: souvenir, photobooth, video coverage, bars, HMU, hosting, projector"
    ],
    imgs:[("images/Corporate0.jpg"), ("images/Corporate.jpg"), ("images/Corporate1.jpg"), ("images/Corporate2.jpg"), ("images/Corporate3.jpg")] },

  /* ---------- COORDINATION ---------- */
  { id:"otdw", cat:"Coordination", n:"OTD Wedding Coordination", e:"📋", price:"Starting at ₱85,000", from:"₱85,000",
    note:"On-the-day wedding coordination.",
    tiers:[
      { n:"Everlasting",  pax:"50 pax",  p:"₱85,000", was:"₱92,000", sheet:1,
        inc:["Good for 50 pax, with venue", "1 layered cake, smoke machine, photobooth and 1 bottle of wine", "3-4 hours of hosting, 2 OTD coordinators and 1 event organizer", "Hair and makeup (HMU service) is available as an add-on"] },
     { n:"Forever & Always", pax:"80 pax", p:"₱116,000", was:"₱124,000", sheet:2,
        inc:["Good for 80 pax, with venue", "2-layered cake and unlimited photobooth for 2 hours", "Prenuptial pictorial session and modern white bridal car", "Entourage flowers, plus hair and makeup for bride and groom", "4 OTD coordinators and 1 event organizer"] },
     { n:"Royal Package", pax:"100 pax", p:"₱165,000", was:"₱177,000", sheet:3,
        inc:["Good for 100 pax, with venue", "Everything in Forever & Always", "Grazing bar for 50 pax included", "5 OTD coordinators and 1 event organizer"] },
     { n:"Diamond Package",  pax:"120 pax", p:"₱188,000", was:"₱201,000", sheet:4,
        inc:["Good for 120 pax, with venue", "Everything in Royal", "4-hour mobile bar included, with 8 drinks on your personal drink menu", "Same-day-edit photo coverage", "5 OTD coordinators and 1 event organizer"] }
   ],
    inc:[
      "1 head coordinator plus 2 (Elevation), 3 (Rosy) or 4 (Elegant) event coordinators",
      "Online and phone consultations, 3 virtual meetings (Messenger, Google Meet or Zoom), 1 face-to-face final meeting",
      "Wedding checklist, event program, guest list and seating arrangements",
      "In charge of registration, guest assistance, wedding timeline, gift management, souvenirs, suppliers, church coordination, overall management and crew meals",
      "Freebies: event signature frame and registration table"
    ],
    imgs:[("images/OTDWedding.jpg"), ("images/OTDWedding1.jpg"), ("images/OTDWedding2.jpg"), ("images/OTDWedding3.jpg"), ("images/OTDWedding4.jpg")] },

  { id:"otdd", cat:"Coordination", n:"OTD Debut Coordination", e:"🎀", price:"Starting at ₱9,000", from:"₱9,000",
    note:"Exclusive deals this season. Limited slots only!",
    tiers:[
      { n:"Classic", pax:"50 pax", was:"₱98,000",  p:"₱88,000", sheet:1,
        inc:["Good for 50 pax", "Photographer from preparation to recognition and unlimited photobooth for 2 hours", "3-4 hours of hosting, 2 OTD coordinators and 2 event organizers", "18 roses, 18 candles and red wine for the 18 toast"] },
     { n:"Signature", pax:"80 pax", was:"₱120,000", p:"₱92,000", sheet:2,
        inc:["Good for 80 pax", "Everything in Gloss", "Full coverage with preparation shots and a 3-5 minute video highlight"] },
     { n:"Elegance", pax:"100 pax", was:"₱145,000", p:"₱125,000", sheet:3,
        inc:["Good for 100 pax", "Everything in Dazzle", "Airbrush hair and makeup: up to 3 looks, 3D lashes, skin care prep and eyebrow shaping"] },
    ],
    inc:[
      "Registration and guest assistance",
      "Gift management and distribution of souvenirs",
      "Detailing of events and coordination to all suppliers",
      "Overall management, distribution of crew meals, emcee and coordinators",
      "Seating arrangement"
    ],
    imgs:[("images/Debut.jpg"), ("images/Debut1.jpg"), ("images/Debut2.jpg"), ("images/Debut3.jpg")] },

  /* ---------- BARS & FOOD ---------- */
  { id:"mobilebar", cat:"Bars & Food", n:"Mobile Bar", e:"🍸", price:"Starting at ₱15,000", from:"₱15,000",
    note:"Crafted cocktails, wherever you are! Get ₱1,000 off if you book 2 months in advance.",
    perks:["Add-on: local beer, ₱1,800 per case"],
    tiers:[
      { n:"50 guests",  p:"₱15,000", sheet:0,
         inc:["Good for 50 guests", "4-hour unlimited open bar with 8 drinks on your personal drink menu", "Includes a free bottle of red wine and a half case of local beer"] },
      { n:"100 guests", p:"₱18,000", sheet:0,
         inc:["Good for 100 guests", "4-hour unlimited open bar with 8 drinks on your personal drink menu", "Includes a free bottle of red wine and a half case of local beer"] },
      { n:"150 guests", p:"₱22,000", sheet:0,
         inc:["Good for 150 guests", "4-hour unlimited open bar with 8 drinks on your personal drink menu", "Includes a free bottle of red wine and a half case of local beer"] },
      { n:"200 guests", p:"₱25,000", sheet:0,
         inc:["Good for 200 guests", "4-hour unlimited open bar with 8 drinks on your personal drink menu", "Includes a free bottle of red wine and a half case of local beer"] }
    ],
    inc:[
      "4-hour unlimited open bar",
      "8 drinks on your personal drink menu (cocktails, mocktails and shooters)",
      "Customized granite top bar setup, bartenders and bar backs, complete glassware and accessories, purified water and ice",
      "Freebies: pika-pika (nuts and chips), a bottle of red wine, half case of local beer, free service of guests' liquor, breakfast for 2, Kanto freestyle"
    ],
    imgs:[("images/Mobile.jpg")] },

  { id:"grazing", cat:"Bars & Food", n:"Grazing Bar", e:"🧀", price:"Starting at ₱15,900", from:"₱15,900",
    note:"Gather, graze and enjoy. The perfect spread awaits!",
    perks:["Freebie: blue lemonade or lemon iced tea"],
    tiers:[
      { n:"60 pax",  p:"₱15,900", sheet:0,
         inc:["Good for 60 pax", "4 hours consumable with a table attendant", "Freebie: blue lemonade or lemon iced tea"] },
      { n:"80 pax",  p:"₱17,900", sheet:0,
         inc:["Good for 80 pax", "4 hours consumable with a table attendant", "Freebie: blue lemonade or lemon iced tea"] },
      { n:"100 pax", p:"₱19,900", sheet:0,
         inc:["Good for 100 pax", "4 hours consumable with a table attendant", "Freebie: blue lemonade or lemon iced tea"] },
      { n:"120 pax", p:"₱23,900", sheet:0,
         inc:["Good for 120 pax", "4 hours consumable with a table attendant", "Freebie: blue lemonade or lemon iced tea"] },
      { n:"150 pax", p:"₱29,900", sheet:0,
         inc:["Good for 150 pax", "4 hours consumable with a table attendant", "Freebie: blue lemonade or lemon iced tea"] }
    ],
    inc:[
      "4 kinds of cold cuts: farmers ham, salami, prosciutto, beef pastrami",
      "4 kinds of cheese: brie, gouda, cheddar, blue cheese",
      "Pica-pica sides: mini waffle, sourdough, pretzels, crackers, cookies, nuts, pepperoni, baguette, garlic breadsticks, sausage, olives, chips, jam, salsa",
      "Fresh fruit platter: watermelon, orange, grapes, kiwi and cucumber slices",
      "Table styling and design, 4 hours consumable, table attendant",
      "No transportation fee in northern Metro Manila; minimal fee for southern Metro Manila",
      "50% downpayment on contract signing; the other 50% before the event starts"
    ],
    imgs:[("images/Grazing.jpg")] },

  { id:"sushi", cat:"Bars & Food", n:"Sushi Bar", e:"🍣", price:"Starting at ₱28,000", from:"₱28,000",
    note:"₱6,000 downpayment to reserve your slot.",
    tiers:[
      { n:"100 pax", p:"₱28,000", sheet:0,
         inc:["Good for 100 pax", "23 flavors of classic and premium rolls, with a sushi chef", "₱6,000 downpayment reserves your slot"] },
      { n:"150 pax", p:"₱38,000", sheet:0,
         inc:["Good for 150 pax", "23 flavors of classic and premium rolls, with a sushi chef", "₱6,000 downpayment reserves your slot"] },
      { n:"200 pax", p:"₱48,000", sheet:0,
         inc:["Good for 200 pax", "23 flavors of classic and premium rolls, with a sushi chef", "₱6,000 downpayment reserves your slot"] }
    ],
    inc:[
      "23 flavors of classic and premium sushi rolls",
      "Japanese-inspired food cart with full buffet-style setup",
      "Free dedication maki platter, disposable utensils, unlimited sushi condiments",
      "On-the-spot sushi prep with a sushi chef and a table attendant"
    ],
    imgs:[("images/Sushi.jpg")] },

  { id:"takoyaki", cat:"Bars & Food", n:"Takoyaki Bar", e:"🐙", price:"Starting at ₱8,000", from:"₱8,000",
    note:"Price from our earlier website. Message us for the pax list.", 
    tiers:[
      { n:"50 Pax", pax:"50 pax",  p:"₱8,500", sheet:0,
        inc:["Good for 80 pax", "2 Premium Flavors"] },
      { n:"100 Pax", pax:"100 pax", p:"₱16,500", sheet:0,
        inc:["Good for 100 pax", "2 Premium Flavors"] },
      { n:"150 Pax", pax:"150 pax", p:"₱25,000", sheet:0,
        inc:["Good for 150 pax", "2 Premium Flavors"] }
    ], 
    inc:[
      "4 Takoyaki Balls per pax rule",
      "2 to 3 Trained Staff",
      "Served in a platter per flavor",
      "Client will provide table and electricity for the Takoyaki Machine",
      "Transporation will be added to the total package cost depending on the location"
    ], 
    imgs:[("images/Takoyaki.jpg")] },

  { id:"coffee", cat:"Bars & Food", n:"Coffee Bar", e:"☕", price:"Starting at ₱10,500", from:"₱10,500",
    note:"Price from our earlier website. Message us for the pax list.", 
    tiers:[
    { n:"50 Cups", p:"₱12,000", sheet:0,
      inc:["Addtional (Per Pack)", "816 Signatures"] },
    { n:"100 Cups", p:"₱18,000", sheet:0,
      inc:["Addtional (Per Pack)", "816 Signatures"] },
    { n:"150 Cups", p:"₱25,000", sheet:0,
      inc:["Addtional (Per Pack)", "816 Signatures"] },
    { n:"200 Cups", p:"₱30,000", sheet:0,
      inc:["Addtional (Per Pack)", "816 Signatures"] },
    ], 
    inc:[
      "Full Set-Up Coffee Cart",
      "Espresso Machine & Coffee Grinder",
      "Hot and Iced Drinks",
      "100% Arabica Beans",
      "Premium Qualtiy Ingredients",
      "Professional Baristas",
      "Add-Ons: Additional Hour - ₱1,500"
    ], 
    imgs:[("images/Coffee.jpg")] },

  { id:"menu", cat:"Bars & Food", n:"Catering Menu", e:"🍽️", price:"₱650 per head", from:"",
    note:"Choose from our catering menu. Packages include 3 main dishes (pork, chicken and fish), rice, a pasta or vegetable dish, dessert and drinks.",
    tiers:[],
    inc:[
      "Vegetable: mixed veggies with quail eggs · stir fry tofu with snow peas · fresh lumpiang ubod with peanut sauce",
      "Fish: fish finger with mayo garlic dip · fish fillet in creamy lemon · sweet and sour fish fillet",
      "Beef: beef pochero · beef salpicao · roast beef with mushroom sauce",
      "Pork: pork asado · pork hamonado · pork humba",
      "Chicken: chicken cordon bleu · chicken teriyaki · chicken pastel",
      "Pasta: creamy carbonara · sweet style spaghetti · chicken and alfredo pasta",
      "Dessert: buko pandan · coffee jelly · fruits salad",
      "Drinks: four season · cucumber lime · red iced tea · blue lemonade · pineapple juice",
      "Add-on soups: creamy mushroom · creamy pumpkin · crab and corn"
    ],
    imgs:[("images/Catering.jpg")] },

  { id:"perfume", cat:"Bars & Food", n:"Perfume Bar", e:"🌸", price:"Starting at ₱15,000", from:"₱15,000", note:"", 
    tiers:[
      { n:"10 ml", pax: "100 pax", p:"₱15,000", sheet:0,
        inc:["Free Sticker Layout", "Free Welcome Signage"] },
      { n:"15 ml", pax: "100 pax", p:"₱18,000", sheet:0,
        inc:["Free Sticker Layout", "Free Welcome Signage"] },
      { n:"30 ml", pax: "100 pax", p:"₱27,000", sheet:0,
        inc:["Free Sticker Layout", "Free Welcome Signage"] }
    ], 
    inc:[
      "3 hours Fragrance Bar setup with elegant apothecary jars",
      "Choice 4-6 designer inspired scents perfume tester",
      "Coffee bean to neutralized sense of smell personalized perfume bottle sticker label",
      "Personalized claim stubs",
      "On-Site Perfume Attendants"
    ], 
    imgs:[("images/Perfume.jpg")] },

  { id:"flavor", cat:"Bars & Food", n:"Fruit Soda & Milktea Bar", e:"🍹", price:"Starting at ₱9,800", from:"₱9,800", note:"", 
      tiers:[
        { n:"The Experience", pax: "50 pax", p:"₱9,800", sheet:0,
          inc:[] },
      ], 
      inc:[
        "5 Flavors to Choose",
        "4 Milk Tea",
        "4 Fruit Soda",
        "12 Oz Cups",
        "Long Table Setup",
        "2 to 3 Crews",
        "Complimentary Brownies",
        "4 Hours Serving"
      ], 
    imgs:[("images/Fruit.jpg")] },

  /* ---------- RENTALS & ADD-ONS ---------- */
  { id:"equipment", cat:"Rentals & Add-ons", n:"Equipment Rental", e:"🪑", price:"From ₱30 per piece", from:"₱30",
    note:"Price per piece.",
    tiers:[
      { n:"Round table with cover",        p:"₱300" },
      { n:"Long table with cover",         p:"₱350" },
      { n:"Cocktail table with cover",     p:"₱300" },
      { n:"Square table with cover",       p:"₱200" },
      { n:"Half table with cover",         p:"₱200" },
      { n:"Monoblock chair",               p:"₱30" },
      { n:"Monoblock chair with cover",    p:"₱50" },
      { n:"Tiffany chair",                 p:"₱80" },
      { n:"Infinity chair",                p:"₱100" },
      { n:"Ghost chair",                   p:"₱120" },
      { n:"Folded chair",                  p:"₱100" },
      { n:"12 x 24 tent",                  p:"₱3,500" },
      { n:"Red carpet",                    p:"₱1,000" },
      { n:"Wedding Couch",                 p:"₱2,500" },
      { n:"8 x 8 platform",                p:"₱3,000" },
      { n:"Set of utensils",               pax:"plate, highball glass, goblet, spoon and fork", p:"₱80" },
      { n:"Set of Kids",                   pax:"(1) Long Table and (10) Chairs with Cover", p:"₱500" },
      { n:"Beer Mug",                      p:"₱70" },
      { n:"Beer Pilsner",                  p:"₱70" },
      { n:"Champagne Saucer",              p:"₱100/50" },
      { n:"Champagne Flute",               p:"₱5" },
    ],
    inc:[],
    imgs:[("images/Equipment.jpg")] },

  { id:"sounds", cat:"Rentals & Add-ons", n:"Lights & Sounds", e:"🔊", price:"Starting at ₱12,000", from:"₱12,000",
    note:"Price from our earlier website. Packages include a standard sound and lights set with DJ and tech crew.", tiers:[], inc:[], imgs:[("images/Soundbooth.jpg")] },
  
  { id:"photobooth", cat:"Rentals & Add-ons", n:"Photobooth", e:"🤳", price:"Starting at ₱3,500", from:"₱3,500",
    note:"Price from our earlier website. Ask about photobooth packages.", tiers:[], inc:[], imgs:[("images/Photobooth.jpg")] },
  
  { id:"hmu", cat:"Rentals & Add-ons", n:"HMU Service", e:"💄", price:"Inquire for quote", from:"",
    note:"Hair and makeup, including airbrush options. Message us for a quote.", tiers:[], inc:[], imgs:[("images/HMU.jpg")] },

  /* ---------- MORE ---------- */
  { id:"proposal", cat:"More Services", n:"Wedding Proposal", e:"💐", price:"Inquire for quote", from:"", note:"", tiers:[], inc:[] },
  
  { id:"reveal",   cat:"More Services", n:"Gender Reveal", e:"💙", price:"Starting at ₱67,000", from:"₱67,000", note:"", 
    tiers:[
      { n:"Sweet Littlee", pax:"50 pax", was:"₱94,000",  p:"₱87,000", sheet:1,
        inc:["Good for 50 pax", "Photographer from preparation to recognition and unlimited photobooth for 2 hours", "3-4 hours of hosting, 2 OTD coordinators and 2 event organizers", "18 roses, 18 candles and red wine for the 18 toast"] },
     { n:"He or She", pax:"80 pax", was:"₱109,000", p:"₱98,000", sheet:2,
        inc:["Good for 80 pax", "Everything in Sweet Littlee", "Full coverage with preparation shots and a 3-5 minute video highlight"] },
     { n:"The Big Reveal", pax:"100 pax", was:"₱118,000", p:"₱110,000", sheet:3,
        inc:["Good for 100 pax", "Everything in He or She"] },
    ], 
    inc:[], 
    imgs:[("images/Gender.jpg"), ("images/Gender1.jpg"), ("images/Gender2.jpg"), ("images/Gender3.jpg")] },
  
  { id:"opening",  cat:"More Services", n:"Store Grand Opening", e:"🎊", price:"Inquire for quote", from:"", note:"", tiers:[], inc:[] },
  
  { id:"styling",  cat:"More Services", n:"Event Styling", e:"✨", price:"Starting at ₱10,000", from:"₱10,000", note:"", tiers:[], inc:[] },
  
  { id:"hosting",  cat:"More Services", n:"Hosting Services", e:"🎤", price:"Starting at ₱10,000", from:"₱10,000", note:"", tiers:[], inc:[] },
  
  { id:"photovid", cat:"More Services", n:"Photo & Video Coverage", e:"📸", price:"Starting at ₱6,000", from:"₱6,000", note:"", tiers:[], inc:[] },
  
  { id:"venue",    cat:"More Services", n:"Event Venue Rental", e:"🏛️", price:"Starting at ₱18,000", from:"₱18,000", note:"", tiers:[], inc:[] }
];

const CATS = [...new Set(SERVICES.map(s => s.cat))];                 /* tabs above the carousel */
const PKGS = SERVICES.filter(s => s.imgs && s.imgs.length);          /* items that have binder photos → Packages section */
const EVENT_PKGS = SERVICES.filter(s => s.cat === "Event Packages");
const DEFAULT_INC = ["Message us for the full inclusions and a custom quote."];

/* Placeholder gradients (red + yellow palette) */
const G = [["#7a0f1f","#f2b632"],["#b3122b","#ffcf6b"],["#4a0a12","#e8742a"],["#8f1d1d","#ffd983"],["#5c0a14","#ff8a1f"],["#a31621","#f7c948"]];
