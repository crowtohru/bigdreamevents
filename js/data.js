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

const GALLERY = [];             /* 6 gallery photos */
const CONTACT_BG = "";          /* contact section background */
const IMG = {};                 /* optional cover photo per service card, key = the service name, e.g. IMG["Wedding"] = "images/wedding-cover.jpg" */

/* ===================================================================
   SERVICES AND PACKAGES  (taken from the price binder)
   One list drives the Services carousel, the pop-up and the Packages section.
   - tiers : the sizes/prices.  p = price, was = old crossed-out price, p2 = second line (e.g. "₱93,000 with venue")
   - inc   : key inclusions shown on the website
   - imgs  : photos of the binder pages (shown in the Packages section, tap to zoom)
   =================================================================== */
const SHEETS = "images/sheets/";
const S = f => SHEETS + f;

const SERVICES = [
  /* ---------- EVENT PACKAGES ---------- */
  { id:"wedding", cat:"Event Packages", n:"Wedding", e:"💍", price:"Starting at ₱130,000", from:"₱130,000",
    note:"Complete packages with venue, within your area. ₱30,000 off on all wedding packages.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Magical",  pax:"80 pax",  p:"₱130,000", was:"₱160,000", sheet:0,
         inc:["Good for 80 pax, with venue", "1 layered cake, smoke machine, photobooth and 1 bottle of wine", "3-4 hours of hosting, 2 OTD coordinators and 1 event organizer", "Hair and makeup (HMU service) is available as an add-on"] },
      { n:"Romantic", pax:"100 pax", p:"₱190,000", was:"₱220,000", sheet:1,
         inc:["Good for 100 pax, with venue", "2-layered cake and unlimited photobooth for 2 hours", "Prenuptial pictorial session and modern white bridal car", "Entourage flowers, plus hair and makeup for bride and groom", "4 OTD coordinators and 1 event organizer"] },
      { n:"Euphoric", pax:"120 pax", p:"₱220,000", was:"₱250,000", sheet:2,
         inc:["Good for 120 pax, with venue", "Everything in Romantic", "Grazing bar for 50 pax included", "5 OTD coordinators and 1 event organizer"] },
      { n:"Radiant",  pax:"150 pax", p:"₱260,000", was:"₱290,000", sheet:3,
         inc:["Good for 150 pax, with venue", "Everything in Euphoric", "4-hour mobile bar included, with 8 drinks on your personal drink menu", "Same-day-edit photo coverage", "5 OTD coordinators and 1 event organizer"] }
    ],
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
    imgs:[("images/MagicalWedding.jpg"), ("images/RomanticWedding.jpg"), ("images/EuphoricWedding.jpg"), ("images/RadiantWedding.jpg")] },

  { id:"debut", cat:"Event Packages", n:"Debut", e:"👗", price:"Starting at ₱68,000", from:"₱68,000",
    note:"Prices are without venue. Add ₱25,000 for with venue.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Gloss",    pax:"80 pax",  p:"₱68,000",  p2:"₱93,000 with venue", sheet:0,
         inc:["Good for 80 pax", "Photographer from preparation to recognition and unlimited photobooth for 2 hours", "3-4 hours of hosting, 2 OTD coordinators and 2 event organizers", "18 roses, 18 candles and red wine for the 18 toast"] },
      { n:"Dazzle",   pax:"100 pax", p:"₱75,000",  p2:"₱100,000 with venue", sheet:1,
         inc:["Good for 100 pax", "Everything in Gloss", "Full coverage with preparation shots and a 3-5 minute video highlight"] },
      { n:"Gorgeous", pax:"120 pax", p:"₱119,000", p2:"₱144,000 with venue", sheet:2,
         inc:["Good for 120 pax", "Everything in Dazzle", "Airbrush hair and makeup: up to 3 looks, 3D lashes, skin care prep and eyebrow shaping"] },
      { n:"Stunning", pax:"150 pax", p:"₱144,000", p2:"₱169,000 with venue", sheet:3,
         inc:["Good for 150 pax", "Everything in Gorgeous", "4-hour mobile bar with 8 drinks on your personal drink menu"] }
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
    imgs:[("images/GlossDebut.jpg"), ("images/DazzleDebut.jpg"), ("images/GorgeousDebut.jpg"), ("images/StunningDebut.jpg")] },

  { id:"baptismal", cat:"Event Packages", n:"Baptismal", e:"🕊️", price:"Starting at ₱56,000", from:"₱56,000",
    note:"Prices are without venue. Add ₱25,000 if with venue.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Celestial",  pax:"80 pax",  p:"₱56,000", sheet:0,
         inc:["Good for 80 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Celestial",  pax:"100 pax", p:"₱65,000", sheet:0,
         inc:["Good for 100 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Celestial",  pax:"120 pax", p:"₱75,000", sheet:0,
         inc:["Good for 120 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Celestial",  pax:"150 pax", p:"₱88,000", sheet:0,
         inc:["Good for 150 pax", "1 layer cake", "10 table centerpieces, photo standee or welcome board, lighted number standee", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Enchanting", pax:"80 pax",  p:"₱68,000", sheet:1,
         inc:["Good for 80 pax", "2 layers cake", "Unlimited photobooth for 2 hours", "Professional photographer with enhanced photos via Google Drive", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Enchanting", pax:"100 pax", p:"₱79,000", sheet:1,
         inc:["Good for 100 pax", "2 layers cake", "Unlimited photobooth for 2 hours", "Professional photographer with enhanced photos via Google Drive", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Enchanting", pax:"120 pax", p:"₱88,000", sheet:1,
         inc:["Good for 120 pax", "2 layers cake", "Unlimited photobooth for 2 hours", "Professional photographer with enhanced photos via Google Drive", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] },
      { n:"Enchanting", pax:"150 pax", p:"₱105,000", sheet:1,
         inc:["Good for 150 pax", "2 layers cake", "Unlimited photobooth for 2 hours", "Professional photographer with enhanced photos via Google Drive", "Basic lights and sounds system included", "Add ₱25,000 if with venue"] }
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, motif of your choice, buffet setup",
      "Dressed round tables and chairs, uniformed waitress and food attendant",
      "Basic lights and sounds system",
      "Styling: backdrop, styro name, standees, garland, cake arch, grass carpet, entrance balloon arch",
      "Celestial freebies: 1-layer cake, 10 table centerpieces, photo standee or welcome board, lighted number standee",
      "Enchanting upgrades: 2-layer cake, unlimited photobooth for 2 hours, professional photographer, enhanced photos via Google Drive"
    ],
    imgs:[("images/Baptismal1.jpg"), ("images/Baptismal2.jpg")] },

  { id:"kiddie", cat:"Event Packages", n:"Kiddie Party", e:"🎈", price:"Starting at ₱60,000", from:"₱60,000",
    note:"Prices are without venue. With venue is ₱25,000 more.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"Bubbly",  pax:"50 adults + 30 kids (80 pax)",  p:"₱60,000", p2:"₱85,000 with venue", sheet:0,
         inc:["50 adults + 30 kids (80 pax)", "1 tier cake", "2 clowns (host and magic show) and 3 coordinators", "Sweet treats / candy buffet and 30 kiddie loot bags"] },
      { n:"Amusing", pax:"70 adults + 30 kids (100 pax)", p:"₱75,000", p2:"₱100,000 with venue", sheet:1,
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
    imgs:[("images/BubblyParty.jpg"), ("images/AmusingParty.jpg")] },

  { id:"adult", cat:"Event Packages", n:"Adult Party", e:"🥂", price:"Starting at ₱76,000", from:"₱76,000",
    note:"Prices shown are without venue and with venue. Detailed inclusions are on the 120 and 150 pax sheets.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"80 pax",  p:"₱76,000",  p2:"₱101,000 with venue", sheet:0,
         inc:["Good for 80 pax", "The detailed list is shown for the 120 and 150 pax packages. Message us for this size's exact inclusions."] },
      { n:"100 pax", p:"₱94,000",  p2:"₱119,000 with venue", sheet:0,
         inc:["Good for 100 pax", "The detailed list is shown for the 120 and 150 pax packages. Message us for this size's exact inclusions."] },
      { n:"120 pax", p:"₱112,000", p2:"₱137,000 with venue", sheet:1,
         inc:["Good for 120 pax", "Photographer, unlimited photobooth for 2 hours and a 3-5 minute video highlight", "1 layer cake, event planning assistant, 10 table centerpieces", "Grazing bar is available as an add-on"] },
      { n:"150 pax", p:"₱140,000", p2:"₱165,000 with venue", sheet:1,
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
    imgs:[S("14-kiddie-amusing-adult-overview.jpg"), S("12-adult-120-150.jpg")] },

  { id:"corporate", cat:"Event Packages", n:"Corporate Event", e:"🏢", price:"Starting at ₱74,000", from:"₱74,000",
    note:"Price varies depending on the number of pax.",
    perks:["Gift voucher for Camaya Coast, Bataan (4-person day tour) with any package"],
    tiers:[
      { n:"80 pax",  p:"₱74,000",  p2:"₱99,000 with venue", sheet:0,
         inc:["Good for 80 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"100 pax", p:"₱92,000",  p2:"₱117,000 with venue", sheet:0,
         inc:["Good for 100 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"150 pax", p:"₱106,000", p2:"₱131,000 with venue", sheet:0,
         inc:["Good for 150 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] },
      { n:"200 pax", p:"₱131,000", p2:"₱156,000 with venue", sheet:0,
         inc:["Good for 200 pax", "2 coordinators, gift table and registration table", "Price varies depending on the number of pax"] }
    ],
    inc:[
      "Catering: 3 main dishes, rice, pasta or vegetables, dessert, drinks, buffet setup with centerpiece, uniformed waiters",
      "Styling: custom name and backdrop, couch, bouquet, cake arch, garland, grass carpet, entrance balloon arc",
      "Lights and sounds with DJ and tech crew",
      "Freebies: 2 coordinators, gift table, registration table",
      "Add-ons: souvenir, photobooth, video coverage, bars, HMU, hosting, projector"
    ],
    imgs:[S("09-corporate.jpg")] },

  /* ---------- COORDINATION ---------- */
  { id:"otdw", cat:"Coordination", n:"OTD Wedding Coordination", e:"📋", price:"Starting at ₱10,000", from:"₱10,000",
    note:"On-the-day wedding coordination.",
    tiers:[
      { n:"Elevation", pax:"80 pax",  p:"₱10,000", sheet:0,
         inc:["Good for 80 pax", "1 head coordinator and 2 event coordinators", "3 virtual meetings and 1 face-to-face final meeting"] },
      { n:"Rosy",      pax:"100 pax", p:"₱14,000", sheet:1,
         inc:["Good for 100 pax", "1 head coordinator and 3 event coordinators", "3 virtual meetings and 1 face-to-face final meeting"] },
      { n:"Elegant",   pax:"150 pax", p:"₱16,000", sheet:1,
         inc:["Good for 150 pax", "1 head coordinator and 4 event coordinators", "3 virtual meetings and 1 face-to-face final meeting"] }
    ],
    inc:[
      "1 head coordinator plus 2 (Elevation), 3 (Rosy) or 4 (Elegant) event coordinators",
      "Online and phone consultations, 3 virtual meetings (Messenger, Google Meet or Zoom), 1 face-to-face final meeting",
      "Wedding checklist, event program, guest list and seating arrangements",
      "In charge of registration, guest assistance, wedding timeline, gift management, souvenirs, suppliers, church coordination, overall management and crew meals",
      "Freebies: event signature frame and registration table"
    ],
    imgs:[S("11-otd-wedding-overview-elevation.jpg"), S("10-otd-wedding-rosy-elegant.jpg")] },

  { id:"otdd", cat:"Coordination", n:"OTD Debut Coordination", e:"🎀", price:"Starting at ₱9,000", from:"₱9,000",
    note:"Exclusive deals this season. Limited slots only!",
    tiers:[
      { n:"Sweet",  pax:"80 pax",  p:"₱9,000",  was:"₱14,000", sheet:0,
         inc:["Good for 80 pax", "Exclusive deal this season, limited slots only"] },
      { n:"Fine",   pax:"100 pax", p:"₱12,000", was:"₱17,000", sheet:1,
         inc:["Good for 100 pax", "Exclusive deal this season, limited slots only"] },
      { n:"Lovely", pax:"150 pax", p:"₱14,000", was:"₱19,000", sheet:1,
         inc:["Good for 150 pax", "Exclusive deal this season, limited slots only"] }
    ],
    inc:[
      "Registration and guest assistance",
      "Gift management and distribution of souvenirs",
      "Detailing of events and coordination to all suppliers",
      "Overall management, distribution of crew meals, emcee and coordinators",
      "Seating arrangement"
    ],
    imgs:[S("08-otd-debut-promo-sweet.jpg"), S("07-otd-debut-fine-lovely.jpg")] },

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
    imgs:[S("04-wedding-radiant-mobile-bar.jpg")] },

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
      { n:"150 pax", p:"₱29,500", sheet:0,
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
    imgs:[S("02-grazing-bar.jpg")] },

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
    imgs:[S("03-sushi-bar.jpg")] },

  { id:"takoyaki", cat:"Bars & Food", n:"Takoyaki Bar", e:"🐙", price:"Starting at ₱8,000", from:"₱8,000",
    note:"Price from our earlier website. Message us for the pax list.", tiers:[], inc:[] },
  { id:"coffee", cat:"Bars & Food", n:"Coffee Bar", e:"☕", price:"Starting at ₱10,500", from:"₱10,500",
    note:"Price from our earlier website. Message us for the pax list.", tiers:[], inc:[] },

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
    imgs:[S("20-menu-contents.jpg")] },

  /* ---------- RENTALS & ADD-ONS ---------- */
  { id:"equipment", cat:"Rentals & Add-ons", n:"Equipment Rental", e:"🪑", price:"From ₱30 per piece", from:"₱30",
    note:"Price per piece.",
    tiers:[
      { n:"Round table with cover",        p:"₱300" },
      { n:"Long table with cover",         p:"₱350" },
      { n:"Cocktail table with cover",     p:"₱300" },
      { n:"Square table with cover",       p:"₱250" },
      { n:"Half table with cover",         p:"₱250" },
      { n:"Monoblock chair",               p:"₱30" },
      { n:"Monoblock chair with cover",    p:"₱50" },
      { n:"Tiffany chair",                 p:"₱80" },
      { n:"Infinity chair",                p:"₱100" },
      { n:"Ghost chair",                   p:"₱120" },
      { n:"Folded chair",                  p:"₱100" },
      { n:"12 x 24 tent",                  p:"₱4,500" },
      { n:"Red carpet",                    p:"₱1,200" },
      { n:"Couch",                         p:"₱3,500" },
      { n:"8 x 8 platform",                p:"₱2,500" },
      { n:"Set of utensils",               pax:"plate, highball glass, goblet, spoon and fork", p:"₱50" }
    ],
    inc:[],
    imgs:[S("01-equipment-rental.jpg")] },

  { id:"sounds", cat:"Rentals & Add-ons", n:"Lights & Sounds", e:"🔊", price:"Starting at ₱12,000", from:"₱12,000",
    note:"Price from our earlier website. Packages include a standard sound and lights set with DJ and tech crew.", tiers:[], inc:[] },
  { id:"photobooth", cat:"Rentals & Add-ons", n:"Photobooth", e:"🤳", price:"Starting at ₱3,500", from:"₱3,500",
    note:"Price from our earlier website. Ask about photobooth packages.", tiers:[], inc:[] },
  { id:"hmu", cat:"Rentals & Add-ons", n:"HMU Service", e:"💄", price:"Inquire for quote", from:"",
    note:"Hair and makeup, including airbrush options. Message us for a quote.", tiers:[], inc:[] },

  /* ---------- MORE (from the earlier website; not in the binder) ---------- */
  { id:"proposal", cat:"More Services", n:"Wedding Proposal", e:"💐", price:"Inquire for quote", from:"", note:"", tiers:[], inc:[] },
  { id:"reveal",   cat:"More Services", n:"Gender Reveal", e:"💙", price:"Starting at ₱67,000", from:"₱67,000", note:"", tiers:[], inc:[] },
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