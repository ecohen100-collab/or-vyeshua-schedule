// נתוני לוח השיעורים - קהילת "אור וישועה"
// הועתק מתוך תמונת הלוח המודפס. יש לוודא מול הלוח המקורי, בפרט מספרי טלפון.

const CATEGORIES = {
  rabanim: { label: "רבני הישיבה", color: "#1f7a7a" },
  groups: { label: "קבוצות לימוד", color: "#2e86c1" },
  women: { label: "שיעורים לנשים", color: "#d81b8c" },
  youth: { label: "נוער", color: "#c77b1f" }
};

const LANGUAGES = ["עברית", "צרפתית", "ספרדית"];

const DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

// לפרטים ליצירת קשר לכל שיעור/קבוצה (מתוך טבלת הפרטים שבתחתית הלוח)
const CONTACTS = {
  "שיעור הלכה עם הרב חננאל": { location: "אוהלים", contact: "איתן", phone: "058-5858432" },
  "עין איה": { location: "אוהל משה", contact: "אמיר אלמוג", phone: "053-5313276" },
  "כוונה שבלב": { location: "ממ\"ק בית המדרש", contact: "ניר דהן", phone: "052-6097564" },
  "שיעורי הרב יהוידע בבקרים": { location: "חדר האוצר", contact: "יחזקאל בלוקה", phone: "052-3121098" },
  "שיעורי הרב יהוידע לילדים": { location: "ממ\"ק קומה ראשונה", contact: "יונדב אלבז", phone: "054-5391977" },
  "דף יומי בוקר": { location: "פרגולה", contact: "ירוחם נעמן", phone: "053-4939075", groupLink: "https://chat.whatsapp.com/FnhfAv7iqvnGcqUvo8juIB" },
  "דף יומי ערב": { location: "היכל בנימין", contact: "קבוצת ערב", phone: "", groupLink: "https://chat.whatsapp.com/6aqRBCBtlWg5dlbryxgXaY" },
  "אור החיים": { location: "אוהלים", contact: "אליאס לוי", phone: "054-9995650" },
  "תלמוד למתחילים": { location: "ממ\"ק בית המדרש", contact: "רז לוי", phone: "050-6566008" },
  "תורה נוער": { location: "פרגולה", contact: "יאיר סטודנסקי", phone: "054-8978004" },
  "שערי אורה": { location: "פרגולה", contact: "אמיר אלמוג", phone: "053-5313276" },
  "Talmud en français": { location: "אוהלים", contact: "יוסף אסוס", phone: "053-9218272" },
  "גמרא תענית לכיתות ז": { location: "בפרגולה", contact: "ר' שמואל כהן", phone: "058-6681605" },
  "גמרא לכיתות ח": { location: "בפרגולה", contact: "ר' שמואל כהן", phone: "058-6681605" },
  "Shiur en français": { location: "היכל בנימין", contact: "יעל וייס", phone: "058-6667708" },
  "Shiur en español": { location: "", contact: "איתן", phone: "058-5858432" },
  "שיעורי הרבנית": { location: "בפרגולה 12", contact: "יעל וייס", phone: "058-6667708" }
};

// לוח השיעורים: כל שיעור עם היום/הימים בהם הוא מתקיים
const SCHEDULE = [
  { time: "6:30", subject: "דף יומי", teacher: "ירוחם נעמן", category: "groups", contactKey: "דף יומי בוקר", days: ["ראשון","שני","שלישי","רביעי","חמישי","שישי"], duration: 30, durationByDay: { "שישי": 60 } },

  { time: "8:00", subject: "Talmud en français", teacher: "ר' יוסף אסוס", category: "groups", contactKey: "Talmud en français", days: ["ראשון","שלישי","רביעי"], duration: 45, lang: "צרפתית" },
  { time: "8:00", subject: "סוגיות בעיון", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע בבקרים", days: ["שלישי"], hidden: true },
  { time: "8:00", subject: "מהר\"ל שבת", teacher: "הרב יהוידע", category: "groups", contactKey: "שיעורי הרב יהוידע בבקרים", days: ["רביעי"], hidden: true },

  { time: "10:00", subject: "Shiur en français", teacher: "הרבנית", category: "women", contactKey: "Shiur en français", days: ["שני"], lang: "צרפתית" },
  { time: "10:35", subject: "דרשת שבת של מו\"ר", teacher: "", category: "rabanim", contactKey: "", days: ["שבת"], duration: 75 },
  { time: "10:35", subject: "Shiur en français", teacher: "", category: "rabanim", contactKey: "", days: ["שבת"], lang: "צרפתית", duration: 75 },
  { time: "10:35", subject: "Shiur en español", teacher: "", category: "rabanim", contactKey: "Shiur en español", days: ["שבת"], lang: "ספרדית", duration: 75 },
  { time: "10:35", subject: "שיעורי ילדים", teacher: "", category: "youth", contactKey: "שיעורי הרב יהוידע לילדים", days: ["שבת"], duration: 75, note: "לפי גילאים - פירוט קבוצות ומיקומים יושלם בהמשך" },

  { time: "19:30", subject: "שיעור הלכה", teacher: "הרב חננאל", category: "rabanim", contactKey: "שיעור הלכה עם הרב חננאל", days: ["שני","חמישי"], timeLabel: "בין מנחה לערבית", duration: 30 },
  { time: "19:30", subject: "גמרא תענית - כיתות ז'", teacher: "", category: "youth", contactKey: "גמרא תענית לכיתות ז", days: ["ראשון"], timeLabel: "בין מנחה לערבית", duration: 30 },
  { time: "19:30", subject: "גמרא - כיתה ח'", teacher: "", category: "youth", contactKey: "גמרא לכיתות ח", days: ["חמישי"], timeLabel: "בין מנחה לערבית", duration: 30 },
  { time: "19:30", subject: "לכיתות ה'-ו': נוסח תפילה. לכיתות ב'-ו': טעמי המקרא", teacher: "הרב יהוידע", category: "youth", contactKey: "שיעורי הרב יהוידע לילדים", days: ["שלישי"], timeLabel: "בין מנחה לערבית", duration: 30, hidden: true },
  { time: "19:30", subject: "חברותות - כיתות ה'-ז' חט\"ב", teacher: "", category: "youth", contactKey: "", days: ["רביעי"], timeLabel: "בין מנחה לערבית", duration: 30 },
  { time: "19:30", subject: "טעמי המצוות", teacher: "הרב חננאל", category: "rabanim", contactKey: "שיעור הלכה עם הרב חננאל", days: ["שבת"], timeLabel: "בין מנחה לערבית", duration: 45 },
  { time: "19:30", subject: "דף יומי", teacher: "", category: "groups", contactKey: "דף יומי בוקר", days: ["שבת"], timeLabel: "בין מנחה לערבית", duration: 45 },

  { time: "19:30", subject: "תורה נוער - לימוד חבורות", teacher: "", category: "youth", contactKey: "תורה נוער", days: ["שני"], note: "בחופש הגדול" },
  { time: "20:30", subject: "אור החיים", teacher: "ר' שלמה נוימן", category: "groups", contactKey: "אור החיים", days: ["שלישי"] },

  { time: "19:45", subject: "כוונה שבלב", teacher: "הרב ידידיה", category: "rabanim", contactKey: "כוונה שבלב", days: ["ראשון"], timeLabel: "אחרי ערבית", note: "בקיץ: באוהלים" },
  { time: "20:15", subject: "שיעור לנשות האברכים", teacher: "הרבנית", category: "women", contactKey: "שיעורי הרבנית", days: ["רביעי"], duration: 30 },

  { time: "21:00", subject: "דף יומי (ערב)", teacher: "", category: "groups", contactKey: "דף יומי ערב", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 35 },
  { time: "20:30", subject: "שערי אורה", teacher: "ר' דוד לרדו", category: "groups", contactKey: "שערי אורה", days: ["שני"], duration: 60 },
  { time: "21:00", subject: "תלמוד למתחילים", teacher: "דב יציב", category: "groups", contactKey: "תלמוד למתחילים", days: ["שלישי"] },
  { time: "20:45", subject: "שיעור לכלל הנשים", teacher: "הרבנית", category: "women", contactKey: "שיעורי הרבנית", days: ["רביעי"], duration: 75 },
  { time: "21:00", subject: "עין איה", teacher: "הרב חננאל", category: "rabanim", contactKey: "עין איה", days: ["חמישי"] }
];
