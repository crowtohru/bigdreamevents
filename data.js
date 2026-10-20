/* ===== DATA & SETTINGS — edit this file to change content ===== */

/* ---- LINKS ---- */
const LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100063910696276",
  messenger: "https://www.messenger.com/t/105458504664204",
  instagram: "https://www.instagram.com/bigdreameventby.aki_ali",
  email: "mailto:bigdreamevents25@gmail.com"
};
const EMAIL = "bigdreamevents25@gmail.com";


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
const IMG = {};                 /* service style images, key "Wedding|0" (style number after the bar) */
const PKG_IMG = {               /* package inclusion sheets, in order */
  wedding: [],                  /* 5 images */
  debut: [],                    /* 5 */
  baptismal: [],                /* 5 */
  adult: [],                    /* 5 */
  kiddie: [],                   /* 5 */
  corporate: []                 /* 5 */
};

/* ---- PACKAGES (section "Package Inclusions") ---- */
const PKGS = [
  { k:"wedding",   n:"Wedding",         e:"💍", from:"₱85,000", c:5, desc:"Everything for your big day, from styling to coordination. Swipe through the inclusion sheets." },
  { k:"debut",     n:"Debut",           e:"👗", from:"₱87,000", c:5, desc:"A debut worthy of a princess, with a program and styling made around you." },
  { k:"baptismal", n:"Baptismal",       e:"🕊️", from:"₱51,000", c:5, desc:"A warm, beautiful celebration for your little one's milestone." },
  { k:"adult",     n:"Adult Party",     e:"🥂", from:"₱88,000", c:5, desc:"Birthdays, anniversaries and reunions, hosted and styled with flair." },
  { k:"kiddie",    n:"Kiddie Party",    e:"🎈", from:"₱88,000", c:5, desc:"Colorful themes, games and joy for the little ones." },
  { k:"corporate", n:"Corporate Event", e:"🏢", from:"₱88,000", c:5, desc:"Polished, professional events handled from stage to sound." }
];

/* Highlights shown beside each package (placeholders — replace with real inclusions) */
const INC = {
  "Wedding": ["Full event coordination","Styling & floral setup","Catering & host","Photo & video coverage","Lights & sounds"],
  "Debut": ["18 roses & candles program","Themed styling","Host & coordinator","Photo & video","Photobooth"],
  "Baptismal": ["Themed backdrop","Catering","Coordinator","Photo coverage"],
  "Adult Party": ["Stage & styling","Host & coordinator","Catering","Lights & sounds"],
  "Kiddie Party": ["Themed styling","Host & games","Catering","Photobooth"],
  "Corporate Event": ["Stage, sound & lights","Host & coordinator"]
};
const DEFAULT_INC = ["Setup & teardown","Dedicated coordinator","Styling to your theme"];

/* ---- SERVICES (carousel). [name, price, emoji] ---- */

const D = {
  Celebrations: [
    ["Wedding","Starting at ₱85,000","💍"],
    ["Debut","Starting at ₱87,000","👗"],
    ["Adult Party","Starting at ₱88,000","🥂"],
    ["Kiddie Party","Starting at ₱88,000","🎈"],
    ["Baptismal","Starting at ₱51,000","🕊️"],
    ["Corporate Event","Starting at ₱88,000","🏢"],
    ["Wedding Proposal","Inquire for quote","💐"],
    ["Gender Reveal","Starting at ₱67,000","🎀"],
    ["Store Grand Opening","Inquire for quote","🎊"]
  ],
  Add_ons: [
    ["Catering Services","₱650 per head","🍽️"],
    ["On-the-Day Coordinator","Starting at ₱9,000","📋"],
    ["Hosting Services","Starting at ₱10,000","🎤"],
    ["Event Styling","Starting at ₱10,000","✨"],
    ["Photo & Video Coverage","Starting at ₱6,000","📸"],
    ["Photobooth","Starting at ₱3,500","🤳"]
  ],
  Rentals: [
    ["Lights & Sounds Rental","Starting at ₱12,000","🔊"],
    ["Event Venue Rental","Starting at ₱18,000","🏛️"],
    ["Tables & Chairs Rental","Tables ₱300 · Chairs ₱30","🪑"],
    ["Cocktail Tables & Wine Glasses","Table ₱300 · Glass ₱30","🍷"]
  ],
  Bars: [
    ["Perfume Bar","Starting at ₱16,000","🌸"],
    ["Mobile Bar","Starting at ₱16,000","🍸"],
    ["Grazing Bar","Starting at ₱15,900","🧀"],
    ["Coffee Bar","Starting at ₱10,500","☕"],
    ["Takoyaki Bar","Starting at ₱8,000","🐙"]]
};

/* Style tabs inside the service popup */
const STYLES = {
  Celebrations: ["Classic","Modern","Rustic","Luxe"],
  Add_ons: ["Basic","Standard","Premium"],
  Rentals: ["Standard","Premium"],
  Bars: ["Classic","Signature","Premium"]
};

/* Placeholder gradients (red + yellow palette) */
const G = [
  ["#7a0f1f","#f2b632"],
  ["#b3122b","#ffcf6b"],
  ["#4a0a12","#e8742a"],
  ["#8f1d1d","#ffd983"],
  ["#5c0a14","#ff8a1f"],
  ["#a31621","#f7c948"]
];

const ALL = Object.entries(D).flatMap(([c, a]) => a.map(x => ({ c, n: x[0], p: x[1], e: x[2] })));