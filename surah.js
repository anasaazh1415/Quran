// معلومات السور الكاملة (114 سورة)
const surahsInfo = {
    1: { name: "الفاتحة", english: "Al-Fatiha", verses: 7, type: "مكية" },
    2: { name: "البقرة", english: "Al-Baqara", verses: 286, type: "مدنية" },
    3: { name: "آل عمران", english: "Aal-Imran", verses: 200, type: "مدنية" },
    4: { name: "النساء", english: "An-Nisa", verses: 176, type: "مدنية" },
    5: { name: "المائدة", english: "Al-Maida", verses: 120, type: "مدنية" },
    6: { name: "الأنعام", english: "Al-Anam", verses: 165, type: "مكية" },
    7: { name: "الأعراف", english: "Al-Araf", verses: 206, type: "مكية" },
    8: { name: "الأنفال", english: "Al-Anfal", verses: 75, type: "مدنية" },
    9: { name: "التوبة", english: "At-Tawba", verses: 129, type: "مدنية" },
    10: { name: "يونس", english: "Yunus", verses: 109, type: "مكية" },
    11: { name: "هود", english: "Hud", verses: 123, type: "مكية" },
    12: { name: "يوسف", english: "Yusuf", verses: 111, type: "مكية" },
    13: { name: "الرعد", english: "Ar-Rad", verses: 43, type: "مدنية" },
    14: { name: "إبراهيم", english: "Ibrahim", verses: 52, type: "مكية" },
    15: { name: "الحجر", english: "Al-Hijr", verses: 99, type: "مكية" },
    16: { name: "النحل", english: "An-Nahl", verses: 128, type: "مكية" },
    17: { name: "الإسراء", english: "Al-Isra", verses: 111, type: "مكية" },
    18: { name: "الكهف", english: "Al-Kahf", verses: 110, type: "مكية" },
    19: { name: "مريم", english: "Maryam", verses: 98, type: "مكية" },
    20: { name: "طه", english: "Ta-Ha", verses: 135, type: "مكية" },
    21: { name: "الأنبياء", english: "Al-Anbiya", verses: 112, type: "مكية" },
    22: { name: "الحج", english: "Al-Hajj", verses: 78, type: "مدنية" },
    23: { name: "المؤمنون", english: "Al-Muminun", verses: 118, type: "مكية" },
    24: { name: "النور", english: "An-Nur", verses: 64, type: "مدنية" },
    25: { name: "الفرقان", english: "Al-Furqan", verses: 77, type: "مكية" },
    26: { name: "الشعراء", english: "Ash-Shuara", verses: 227, type: "مكية" },
    27: { name: "النمل", english: "An-Naml", verses: 93, type: "مكية" },
    28: { name: "القصص", english: "Al-Qasas", verses: 88, type: "مكية" },
    29: { name: "العنكبوت", english: "Al-Ankabut", verses: 69, type: "مكية" },
    30: { name: "الروم", english: "Ar-Rum", verses: 60, type: "مكية" },
    31: { name: "لقمان", english: "Luqman", verses: 34, type: "مكية" },
    32: { name: "السجدة", english: "As-Sajda", verses: 30, type: "مكية" },
    33: { name: "الأحزاب", english: "Al-Ahzab", verses: 73, type: "مدنية" },
    34: { name: "سبأ", english: "Saba", verses: 54, type: "مكية" },
    35: { name: "فاطر", english: "Fatir", verses: 45, type: "مكية" },
    36: { name: "يس", english: "Ya-Sin", verses: 83, type: "مكية" },
    37: { name: "الصافات", english: "As-Saffat", verses: 182, type: "مكية" },
    38: { name: "ص", english: "Sad", verses: 88, type: "مكية" },
    39: { name: "الزمر", english: "Az-Zumar", verses: 75, type: "مكية" },
    40: { name: "غافر", english: "Ghafir", verses: 85, type: "مكية" },
    41: { name: "فصلت", english: "Fussilat", verses: 54, type: "مكية" },
    42: { name: "الشورى", english: "Ash-Shura", verses: 53, type: "مكية" },
    43: { name: "الزخرف", english: "Az-Zukhruf", verses: 89, type: "مكية" },
    44: { name: "الدخان", english: "Ad-Dukhan", verses: 59, type: "مكية" },
    45: { name: "الجاثية", english: "Al-Jathiya", verses: 37, type: "مكية" },
    46: { name: "الأحقاف", english: "Al-Ahqaf", verses: 35, type: "مكية" },
    47: { name: "محمد", english: "Muhammad", verses: 38, type: "مدنية" },
    48: { name: "الفتح", english: "Al-Fath", verses: 29, type: "مدنية" },
    49: { name: "الحجرات", english: "Al-Hujurat", verses: 18, type: "مدنية" },
    50: { name: "ق", english: "Qaf", verses: 45, type: "مكية" },
    51: { name: "الذاريات", english: "Adh-Dhariyat", verses: 60, type: "مكية" },
    52: { name: "الطور", english: "At-Tur", verses: 49, type: "مكية" },
    53: { name: "النجم", english: "An-Najm", verses: 62, type: "مكية" },
    54: { name: "القمر", english: "Al-Qamar", verses: 55, type: "مكية" },
    55: { name: "الرحمن", english: "Ar-Rahman", verses: 78, type: "مدنية" },
    56: { name: "الواقعة", english: "Al-Waqia", verses: 96, type: "مكية" },
    57: { name: "الحديد", english: "Al-Hadid", verses: 29, type: "مدنية" },
    58: { name: "المجادلة", english: "Al-Mujadila", verses: 22, type: "مدنية" },
    59: { name: "الحشر", english: "Al-Hashr", verses: 24, type: "مدنية" },
    60: { name: "الممتحنة", english: "Al-Mumtahina", verses: 13, type: "مدنية" },
    61: { name: "الصف", english: "As-Saff", verses: 14, type: "مدنية" },
    62: { name: "الجمعة", english: "Al-Jumua", verses: 11, type: "مدنية" },
    63: { name: "المنافقون", english: "Al-Munafiqun", verses: 11, type: "مدنية" },
    64: { name: "التغابن", english: "At-Taghabun", verses: 18, type: "مدنية" },
    65: { name: "الطلاق", english: "At-Talaq", verses: 12, type: "مدنية" },
    66: { name: "التحريم", english: "At-Tahrim", verses: 12, type: "مدنية" },
    67: { name: "الملك", english: "Al-Mulk", verses: 30, type: "مكية" },
    68: { name: "القلم", english: "Al-Qalam", verses: 52, type: "مكية" },
    69: { name: "الحاقة", english: "Al-Haqqa", verses: 52, type: "مكية" },
    70: { name: "المعارج", english: "Al-Maarij", verses: 44, type: "مكية" },
    71: { name: "نوح", english: "Nuh", verses: 28, type: "مكية" },
    72: { name: "الجن", english: "Al-Jinn", verses: 28, type: "مكية" },
    73: { name: "المزمل", english: "Al-Muzzammil", verses: 20, type: "مكية" },
    74: { name: "المدثر", english: "Al-Muddaththir", verses: 56, type: "مكية" },
    75: { name: "القيامة", english: "Al-Qiyama", verses: 40, type: "مكية" },
    76: { name: "الإنسان", english: "Al-Insan", verses: 31, type: "مدنية" },
    77: { name: "المرسلات", english: "Al-Mursalat", verses: 50, type: "مكية" },
    78: { name: "النبأ", english: "An-Naba", verses: 40, type: "مكية" },
    79: { name: "النازعات", english: "An-Naziat", verses: 46, type: "مكية" },
    80: { name: "عبس", english: "Abasa", verses: 42, type: "مكية" },
    81: { name: "التكوير", english: "At-Takwir", verses: 29, type: "مكية" },
    82: { name: "الانفطار", english: "Al-Infitar", verses: 19, type: "مكية" },
    83: { name: "المطففين", english: "Al-Mutaffifin", verses: 36, type: "مكية" },
    84: { name: "الانشقاق", english: "Al-Inshiqaq", verses: 25, type: "مكية" },
    85: { name: "البروج", english: "Al-Buruj", verses: 22, type: "مكية" },
    86: { name: "الطارق", english: "At-Tariq", verses: 17, type: "مكية" },
    87: { name: "الأعلى", english: "Al-Ala", verses: 19, type: "مكية" },
    88: { name: "الغاشية", english: "Al-Ghashiya", verses: 26, type: "مكية" },
    89: { name: "الفجر", english: "Al-Fajr", verses: 30, type: "مكية" },
    90: { name: "البلد", english: "Al-Balad", verses: 20, type: "مكية" },
    91: { name: "الشمس", english: "Ash-Shams", verses: 15, type: "مكية" },
    92: { name: "الليل", english: "Al-Layl", verses: 21, type: "مكية" },
    93: { name: "الضحى", english: "Ad-Duha", verses: 11, type: "مكية" },
    94: { name: "الشرح", english: "Ash-Sharh", verses: 8, type: "مكية" },
    95: { name: "التين", english: "At-Tin", verses: 8, type: "مكية" },
    96: { name: "العلق", english: "Al-Alaq", verses: 19, type: "مكية" },
    97: { name: "القدر", english: "Al-Qadr", verses: 5, type: "مكية" },
    98: { name: "البينة", english: "Al-Bayyina", verses: 8, type: "مدنية" },
    99: { name: "الزلزلة", english: "Az-Zalzala", verses: 8, type: "مدنية" },
    100: { name: "العاديات", english: "Al-Adiyat", verses: 11, type: "مكية" },
    101: { name: "القارعة", english: "Al-Qaria", verses: 11, type: "مكية" },
    102: { name: "التكاثر", english: "At-Takathur", verses: 8, type: "مكية" },
    103: { name: "العصر", english: "Al-Asr", verses: 3, type: "مكية" },
    104: { name: "الهمزة", english: "Al-Humaza", verses: 9, type: "مكية" },
    105: { name: "الفيل", english: "Al-Fil", verses: 5, type: "مكية" },
    106: { name: "قريش", english: "Quraysh", verses: 4, type: "مكية" },
    107: { name: "الماعون", english: "Al-Maun", verses: 7, type: "مكية" },
    108: { name: "الكوثر", english: "Al-Kawthar", verses: 3, type: "مكية" },
    109: { name: "الكافرون", english: "Al-Kafirun", verses: 6, type: "مكية" },
    110: { name: "النصر", english: "An-Nasr", verses: 3, type: "مدنية" },
    111: { name: "المسد", english: "Al-Masad", verses: 5, type: "مكية" },
    112: { name: "الإخلاص", english: "Al-Ikhlas", verses: 4, type: "مكية" },
    113: { name: "الفلق", english: "Al-Falaq", verses: 5, type: "مكية" },
    114: { name: "الناس", english: "An-Nas", verses: 6, type: "مكية" }
};

// الحصول على رقم السورة من URL
const urlParams = new URLSearchParams(window.location.search);
const surahNumber = parseInt(urlParams.get('number')) || 1;
const surahInfo = surahsInfo[surahNumber];

// تحويل الأرقام للعربية
function toArabicNumber(num) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicNumbers[parseInt(d)]).join('');
}

// عرض معلومات السورة

if (!surahInfo) {
    showError('رقم السورة غير صحيح');
    throw new Error('Invalid surah number');
}

function displaySurahHeader() {
    document.getElementById('headerNumber').textContent = toArabicNumber(surahNumber);
    document.getElementById('headerTitle').textContent = `سورة ${surahInfo.name}`;
    document.getElementById('headerSubtitle').textContent = surahInfo.english;
    
    const metaHTML = `
        <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            ${surahInfo.verses} آية
        </div>
        <span class="meta-badge">${surahInfo.type}</span>
    `;
    document.getElementById('headerMeta').innerHTML = metaHTML;
}

// عرض البسملة
function showBismillah() {
    // لا تظهر البسملة في سورة التوبة (9) أو سورة الفاتحة (1)
    if (surahNumber !== 9) {
        document.getElementById('bismillah').style.display = 'block';
    }
}




// تحميل الآيات
async function loadVerses() {
    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const data = await response.json();
        
        if (data.code === 200) {
            displayVerses(data.data.ayahs);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('versesContainer').style.display = 'block';
            showBismillah();
            setupNavigation();
        } else {
            showError('حدث خطأ في تحميل السورة');
        }
    } catch (error) {
        showError('حدث خطأ في الاتصال');
    }
}
;



        

function displayVerses(verses) {
    const container = document.getElementById('versesContent');
    let html = '';

    // إزالة البسملة من أول آية إذا كانت موجودة
    const bismillah = "بسم الله الرحمن الرحيم";

    verses.forEach((verse, index) => {
        let text = verse.text;

        if (index === 0 && surahNumber !== 9) { // التوبة لا تحتوي بسملة
            if (text.startsWith(bismillah)) {
                text = text.replace(bismillah, '').trim();
            }
        }

        html += `
            <span class="verse-text">${text}</span>
            <span class="verse-number">${toArabicNumber(verse.numberInSurah)}</span>
        `;
    });

    container.innerHTML = html;

    // عرض البسملة فقط في العنصر المخصص
    if (surahNumber !== 9) {
        document.getElementById('bismillah').textContent = bismillah;
        document.getElementById('bismillah').style.display = 'block';
    }
}

// عرض رسالة خطأ
function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('errorMessage').textContent = message;
}

// إعداد أزرار التنقل
function setupNavigation() {
    const prevBtn = document.getElementById('prevSurah');
    const nextBtn = document.getElementById('nextSurah');
    const prevBtnBottom = document.getElementById('prevSurahBottom');
    const nextBtnBottom = document.getElementById('nextSurahBottom');
    
    if (surahNumber > 1) {
        prevBtn.style.display = 'flex';
        prevBtnBottom.style.display = 'flex';
        prevBtn.onclick = () => goToSurah(surahNumber - 1);
        prevBtnBottom.onclick = () => goToSurah(surahNumber - 1);
        document.getElementById('prevSurahName').textContent = surahsInfo[surahNumber - 1].name;
    }
    
    if (surahNumber < 114) {
        nextBtn.style.display = 'flex';
        nextBtnBottom.style.display = 'flex';
        nextBtn.onclick = () => goToSurah(surahNumber + 1);
        nextBtnBottom.onclick = () => goToSurah(surahNumber + 1);
        document.getElementById('nextSurahName').textContent = surahsInfo[surahNumber + 1].name;
    }
    
    document.getElementById('bottomNav').style.display = 'flex';
}

// الانتقال لسورة أخرى
function goToSurah(number) {
    window.location.href = `surah.html?number=${number}`;
}

// تشغيل التطبيق
displaySurahHeader();

loadVerses();












