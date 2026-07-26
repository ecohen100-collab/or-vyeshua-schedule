// נתוני לוח השיעורים - קהילת "אור וישועה"
// הועתק מתוך תמונת הלוח המודפס. יש לוודא מול הלוח המקורי, בפרט מספרי טלפון.

const CATEGORIES = {
  rabanim: { label: "רבני הישיבה", color: "#1f7a7a" },
  groups: { label: "קבוצות לימוד", color: "#2e86c1" },
  women: { label: "שיעורים לנשים", color: "#d81b8c" }
};

const DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

// לפרטים ליצירת קשר לכל שיעור/קבוצה (מתוך טבלת הפרטים שבתחתית הלוח)
const CONTACTS = {
  "שיעור הלכה עם הרב חננאל": { location: "אוהלים", contact: "ניר דהן", phone: "052-6097564" },
  "עין איה": { location: "אוהל משה", contact: "אמיר אלמוג", phone: "053-5313276" },
  "כוונה שבלב": { location: "במ\"ק בית המדרש", contact: "דוד לאופר", phone: "050-4542524" },
  "שיעורי הרב יהוידע בבקרים": { location: "חדר האוצר", contact: "יחזקאל בלוקה", phone: "052-3121098" },
  "שיעורי הרב יהוידע לילדים": { location: "מ\"ד קומה ראשונה", contact: "יונדב אלבז", phone: "054-5391977" },
  "דף יומי בוקר": { location: "פרגולה", contact: "", phone: "", groupLink: "https://chat.whatsapp.com/FnhfAv7iqvnGcqUvo8juIB" },
  "דף יומי ערב": { location: "היכל בנימין", contact: "קבוצת ערב", phone: "", groupLink: "https://chat.whatsapp.com/6aqRBCBtlWg5dlbryxgXaY" },
  "אור החיים": { location: "אוהלים", contact: "אליאס לוי", phone: "054-9995650" },
  "תלמוד למתחילים": { location: "מ\"ד בית המדרש", contact: "רו לוי", phone: "050-6566008" },
  "תורה נוער": { location: "פרגולה", contact: "יאיר סטודז'ינסקי", phone: "054-8978004" },
  "שערי אורה": { location: "פרגולה", contact: "אמיר אלמוג", phone: "053-5313276" },
  "Talmud en français": { location: "אוהלים", contact: "יוסף אסוס", phone: "053-9218272" },
  "גמרא תענית לכיתות ז": { location: "בפרגולה", contact: "ר' שמואל כהן", phone: "058-6681605" },
  "גמרא לכיתות ח": { location: "בפרגולה", contact: "ר' שמואל כהן", phone: "058-6681605" },
  "Shiur en français": { location: "היכל בנימין", contact: "יעל וייס", phone: "058-6667708" },
  "שיעורי הרבנית": { location: "בפרגולה 12", contact: "ברברה אלבז", phone: "054-7357945" }
};

// לוח השיעורים: כל שיעור עם היום/הימים בהם הוא מתקיים
const SCHEDULE = [
  { time: "6:30", subject: "דף יומי", teacher: "ירוחם נעמן", category: "groups", contactKey: "דף יומי בוקר", days: ["ראשון","שני","שלישי","רביעי","חמישי","שישי"], duration: 30, durationByDay: { "שישי": 60 } },

  { time: "8:00", subject: "Talmud en français", teacher: "ר' יוסף אסוס", category: "groups", contactKey: "Talmud en français", days: ["ראשון","שלישי","רביעי"], duration: 45 },
  { time: "8:00", subject: "תנ\"ך משנה - סוגיות בעיון", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע בבקרים", days: ["שלישי"] },
  { time: "8:00", subject: "מהר\"ל שבת", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע בבקרים", days: ["רביעי"] },

  { time: "10:00", subject: "Shiur en français", teacher: "הרבנית", category: "women", contactKey: "Shiur en français", days: ["שני"] },
  { time: "10:30", subject: "דרשת שבת של מו\"ר", teacher: "", category: "rabanim", contactKey: "", days: ["שבת"] },
  { time: "10:30", subject: "Shiur en français", teacher: "", category: "rabanim", contactKey: "", days: ["שבת"] },
  { time: "10:30", subject: "Shiur en español", teacher: "", category: "rabanim", contactKey: "", days: ["שבת"] },
  { time: "10:30", subject: "שיעורי ילדים", teacher: "", category: "groups", contactKey: "שיעורי הרב יהוידע לילדים", days: ["שבת"] },

  { time: "19:30", subject: "שיעור הלכה", teacher: "הרב חננאל", category: "rabanim", contactKey: "שיעור הלכה עם הרב חננאל", days: ["שני","חמישי"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "גמרא תענית - כיתות ז'", teacher: "", category: "groups", contactKey: "גמרא תענית לכיתות ז", days: ["ראשון"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "גמרא - כיתה ח'", teacher: "", category: "groups", contactKey: "גמרא לכיתות ח", days: ["חמישי"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "נוסח תפילה - כיתות ה'-ו'", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע לילדים", days: ["שלישי"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "טעמי המקרא - כיתות ב'-ו'", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע לילדים", days: ["שלישי"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "חברותות - כיתות ה'-ז' חט\"ב", teacher: "", category: "groups", contactKey: "", days: ["רביעי"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "טעמי המצוות", teacher: "הרב חננאל", category: "rabanim", contactKey: "שיעור הלכה עם הרב חננאל", days: ["שבת"], note: "בין מנחה לערבית" },
  { time: "19:30", subject: "דף יומי", teacher: "", category: "groups", contactKey: "דף יומי בוקר", days: ["שבת"], note: "בין מנחה לערבית" },

  { time: "19:30", subject: "תורה נוער - לימוד חבורות", teacher: "", category: "groups", contactKey: "תורה נוער", days: ["שני"] },
  { time: "20:30", subject: "אור החיים", teacher: "ר' שלמה נוימן", category: "groups", contactKey: "אור החיים", days: ["שלישי"] },

  { time: "20:00", subject: "כוונה שבלב", teacher: "הרב ידידיה", category: "rabanim", contactKey: "כוונה שבלב", days: ["שני"] },
  { time: "20:00", subject: "שיעור לאברכיות", teacher: "הרבנית", category: "women", contactKey: "שיעורי הרבנית", days: ["רביעי","חמישי"] },

  { time: "21:00", subject: "דף יומי (ערב)", teacher: "", category: "groups", contactKey: "דף יומי ערב", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 35 },
  { time: "20:30", subject: "שערי אורה", teacher: "ר' דוד לרדו", category: "groups", contactKey: "שערי אורה", days: ["שני"], duration: 60 },
  { time: "21:00", subject: "תלמוד למתחילים", teacher: "דב יציב", category: "groups", contactKey: "תלמוד למתחילים", days: ["שלישי"] },
  { time: "21:00", subject: "שיעור לכלל הנשים", teacher: "הרבנית", category: "women", contactKey: "שיעורי הרבנית", days: ["חמישי"] },
  { time: "21:00", subject: "עין איה", teacher: "הרב חננאל", category: "rabanim", contactKey: "עין איה", days: ["שבת"] },
  { time: "21:00", subject: "דף יומי", teacher: "", category: "groups", contactKey: "דף יומי בוקר", days: ["שבת"] }
];
