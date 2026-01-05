// بيانات السور
const surahs = [
    { number: 1, name_arabic: "الفاتحة", name_english: "Al-Fatiha", verses_count: 7, revelation_type: "مكية" },
    { number: 2, name_arabic: "البقرة", name_english: "Al-Baqara", verses_count: 286, revelation_type: "مدنية" },
    { number: 3, name_arabic: "آل عمران", name_english: "Aal-Imran", verses_count: 200, revelation_type: "مدنية" },
    { number: 4, name_arabic: "النساء", name_english: "An-Nisa", verses_count: 176, revelation_type: "مدنية" },
    { number: 5, name_arabic: "المائدة", name_english: "Al-Maida", verses_count: 120, revelation_type: "مدنية" },
    { number: 6, name_arabic: "الأنعام", name_english: "Al-Anam", verses_count: 165, revelation_type: "مكية" },
    { number: 7, name_arabic: "الأعراف", name_english: "Al-Araf", verses_count: 206, revelation_type: "مكية" },
    { number: 8, name_arabic: "الأنفال", name_english: "Al-Anfal", verses_count: 75, revelation_type: "مدنية" },
    { number: 9, name_arabic: "التوبة", name_english: "At-Tawba", verses_count: 129, revelation_type: "مدنية" },
    { number: 10, name_arabic: "يونس", name_english: "Yunus", verses_count: 109, revelation_type: "مكية" },
    { number: 11, name_arabic: "هود", name_english: "Hud", verses_count: 123, revelation_type: "مكية" },
    { number: 12, name_arabic: "يوسف", name_english: "Yusuf", verses_count: 111, revelation_type: "مكية" },
    { number: 13, name_arabic: "الرعد", name_english: "Ar-Rad", verses_count: 43, revelation_type: "مدنية" },
    { number: 14, name_arabic: "إبراهيم", name_english: "Ibrahim", verses_count: 52, revelation_type: "مكية" },
    { number: 15, name_arabic: "الحجر", name_english: "Al-Hijr", verses_count: 99, revelation_type: "مكية" },
    { number: 16, name_arabic: "النحل", name_english: "An-Nahl", verses_count: 128, revelation_type: "مكية" },
    { number: 17, name_arabic: "الإسراء", name_english: "Al-Isra", verses_count: 111, revelation_type: "مكية" },
    { number: 18, name_arabic: "الكهف", name_english: "Al-Kahf", verses_count: 110, revelation_type: "مكية" },
    { number: 19, name_arabic: "مريم", name_english: "Maryam", verses_count: 98, revelation_type: "مكية" },
    { number: 20, name_arabic: "طه", name_english: "Ta-Ha", verses_count: 135, revelation_type: "مكية" },
    { number: 21, name_arabic: "الأنبياء", name_english: "Al-Anbiya", verses_count: 112, revelation_type: "مكية" },
    { number: 22, name_arabic: "الحج", name_english: "Al-Hajj", verses_count: 78, revelation_type: "مدنية" },
    { number: 23, name_arabic: "المؤمنون", name_english: "Al-Mu'minun", verses_count: 118, revelation_type: "مكية" },
    { number: 24, name_arabic: "النور", name_english: "An-Nur", verses_count: 64, revelation_type: "مدنية" },
    { number: 25, name_arabic: "الفرقان", name_english: "Al-Furqan", verses_count: 77, revelation_type: "مكية" },
    { number: 26, name_arabic: "الشعراء", name_english: "Ash-Shu`ara'", verses_count: 227, revelation_type: "مكية" },
    { number: 27, name_arabic: "النمل", name_english: "An-Naml", verses_count: 93, revelation_type: "مكية" },
    { number: 28, name_arabic: "القصص", name_english: "Al-Qasas", verses_count: 88, revelation_type: "مكية" },
    { number: 29, name_arabic: "العنكبوت", name_english: "Al-Ankabut", verses_count: 69, revelation_type: "مكية" },
    { number: 30, name_arabic: "الروم", name_english: "Ar-Rum", verses_count: 60, revelation_type: "مكية" },
    { number: 31, name_arabic: "لقمان", name_english: "Luqman", verses_count: 34, revelation_type: "مكية" },
    { number: 32, name_arabic: "السجدة", name_english: "As-Sajda", verses_count: 30, revelation_type: "مكية" },
    { number: 33, name_arabic: "الأحزاب", name_english: "Al-Ahzab", verses_count: 73, revelation_type: "مدنية" },
    { number: 34, name_arabic: "سبأ", name_english: "Saba", verses_count: 54, revelation_type: "مكية" },
    { number: 35, name_arabic: "فاطر", name_english: "Fatir", verses_count: 45, revelation_type: "مكية" },
    { number: 36, name_arabic: "يس", name_english: "Ya-Sin", verses_count: 83, revelation_type: "مكية" },
    { number: 37, name_arabic: "الصافات", name_english: "As-Saffat", verses_count: 182, revelation_type: "مكية" },
    { number: 38, name_arabic: "ص", name_english: "Sad", verses_count: 88, revelation_type: "مكية" },
    { number: 39, name_arabic: "الزمر", name_english: "Az-Zumar", verses_count: 75, revelation_type: "مكية" },
    { number: 40, name_arabic: "غافر", name_english: "Ghafir", verses_count: 85, revelation_type: "مكية" },
    { number: 41, name_arabic: "فصلت", name_english: "Fussilat", verses_count: 54, revelation_type: "مكية" },
    { number: 42, name_arabic: "الشورى", name_english: "Ash-Shura", verses_count: 53, revelation_type: "مكية" },
    { number: 43, name_arabic: "الزخرف", name_english: "Az-Zukhruf", verses_count: 89, revelation_type: "مكية" },
    { number: 44, name_arabic: "الدخان", name_english: "Ad-Dukhan", verses_count: 59, revelation_type: "مكية" },
    { number: 45, name_arabic: "الجاثية", name_english: "Al-Jathiya", verses_count: 37, revelation_type: "مكية" },
    { number: 46, name_arabic: "الأحقاف", name_english: "Al-Ahqaf", verses_count: 35, revelation_type: "مكية" },
    { number: 47, name_arabic: "محمد", name_english: "Muhammad", verses_count: 38, revelation_type: "مدنية" },
    { number: 48, name_arabic: "الفتح", name_english: "Al-Fath", verses_count: 29, revelation_type: "مدنية" },
    { number: 49, name_arabic: "الحجرات", name_english: "Al-Hujurat", verses_count: 18, revelation_type: "مدنية" },
    { number: 50, name_arabic: "ق", name_english: "Qaf", verses_count: 45, revelation_type: "مكية" },
    { number: 51, name_arabic: "الذاريات", name_english: "Adh-Dhariyat", verses_count: 60, revelation_type: "مكية" },
    { number: 52, name_arabic: "الطور", name_english: "At-Tur", verses_count: 49, revelation_type: "مكية" },
    { number: 53, name_arabic: "النجم", name_english: "An-Najm", verses_count: 62, revelation_type: "مكية" },
    { number: 54, name_arabic: "القمر", name_english: "Al-Qamar", verses_count: 55, revelation_type: "مكية" },
    { number: 55, name_arabic: "الرحمن", name_english: "Ar-Rahman", verses_count: 78, revelation_type: "مدنية" },
    { number: 56, name_arabic: "الواقعة", name_english: "Al-Waqia", verses_count: 96, revelation_type: "مكية" },
    { number: 57, name_arabic: "الحديد", name_english: "Al-Hadid", verses_count: 29, revelation_type: "مدنية" },
    { number: 58, name_arabic: "المجادلة", name_english: "Al-Mujadila", verses_count: 22, revelation_type: "مدنية" },
    { number: 59, name_arabic: "الحشر", name_english: "Al-Hashr", verses_count: 24, revelation_type: "مدنية" },
    { number: 60, name_arabic: "الممتحنة", name_english: "Al-Mumtahina", verses_count: 13, revelation_type: "مدنية" },
    { number: 61, name_arabic: "الصف", name_english: "As-Saff", verses_count: 14, revelation_type: "مدنية" },
    { number: 62, name_arabic: "الجمعة", name_english: "Al-Jumu'a", verses_count: 11, revelation_type: "مدنية" },
    { number: 63, name_arabic: "المنافقون", name_english: "Al-Munafiqun", verses_count: 11, revelation_type: "مدنية" },
    { number: 64, name_arabic: "التغابن", name_english: "At-Taghabun", verses_count: 18, revelation_type: "مدنية" },
    { number: 65, name_arabic: "الطلاق", name_english: "At-Talaq", verses_count: 12, revelation_type: "مدنية" },
    { number: 66, name_arabic: "التحريم", name_english: "At-Tahrim", verses_count: 12, revelation_type: "مدنية" },
    { number: 67, name_arabic: "الملك", name_english: "Al-Mulk", verses_count: 30, revelation_type: "مكية" },
    { number: 68, name_arabic: "القلم", name_english: "Al-Qalam", verses_count: 52, revelation_type: "مكية" },
    { number: 69, name_arabic: "الحاقة", name_english: "Al-Haqqa", verses_count: 52, revelation_type: "مكية" },
    { number: 70, name_arabic: "المعارج", name_english: "Al-Ma'arij", verses_count: 44, revelation_type: "مكية" },
    { number: 71, name_arabic: "نوح", name_english: "Nuh", verses_count: 28, revelation_type: "مكية" },
    { number: 72, name_arabic: "الجن", name_english: "Al-Jinn", verses_count: 28, revelation_type: "مكية" },
    { number: 73, name_arabic: "المزمل", name_english: "Al-Muzzammil", verses_count: 20, revelation_type: "مكية" },
    { number: 74, name_arabic: "المدثر", name_english: "Al-Muddathir", verses_count: 56, revelation_type: "مكية" },
    { number: 75, name_arabic: "القيامة", name_english: "Al-Qiyama", verses_count: 40, revelation_type: "مكية" },
    { number: 76, name_arabic: "الإنسان", name_english: "Al-Insan", verses_count: 31, revelation_type: "مدنية" },
    { number: 77, name_arabic: "المرسلات", name_english: "Al-Mursalat", verses_count: 50, revelation_type: "مكية" },
    { number: 78, name_arabic: "النبأ", name_english: "An-Naba", verses_count: 40, revelation_type: "مكية" },
    { number: 79, name_arabic: "النازعات", name_english: "An-Nazi'at", verses_count: 46, revelation_type: "مكية" },
    { number: 80, name_arabic: "عبس", name_english: "Abasa", verses_count: 42, revelation_type: "مكية" },
    { number: 81, name_arabic: "التكوير", name_english: "At-Takwir", verses_count: 29, revelation_type: "مكية" },
    { number: 82, name_arabic: "الإنفطار", name_english: "Al-Infitar", verses_count: 19, revelation_type: "مكية" },
    { number: 83, name_arabic: "المطففين", name_english: "Al-Mutaffifin", verses_count: 36, revelation_type: "مكية" },
    { number: 84, name_arabic: "الإنشقاق", name_english: "Al-Inshiqaq", verses_count: 25, revelation_type: "مكية" },
    { number: 85, name_arabic: "البروج", name_english: "Al-Buruj", verses_count: 22, revelation_type: "مكية" },
    { number: 86, name_arabic: "الطارق", name_english: "At-Tariq", verses_count: 17, revelation_type: "مكية" },
    { number: 87, name_arabic: "الأعلى", name_english: "Al-A'la", verses_count: 19, revelation_type: "مكية" },
    { number: 88, name_arabic: "الغاشية", name_english: "Al-Ghashiya", verses_count: 26, revelation_type: "مكية" },
    { number: 89, name_arabic: "الفجر", name_english: "Al-Fajr", verses_count: 30, revelation_type: "مكية" },
    { number: 90, name_arabic: "البلد", name_english: "Al-Balad", verses_count: 20, revelation_type: "مكية" },
    { number: 91, name_arabic: "الشمس", name_english: "Ash-Shams", verses_count: 15, revelation_type: "مكية" },
    { number: 92, name_arabic: "الليل", name_english: "Al-Layl", verses_count: 21, revelation_type: "مكية" },
    { number: 93, name_arabic: "الضحى", name_english: "Ad-Duha", verses_count: 11, revelation_type: "مكية" },
    { number: 94, name_arabic: "الشرح", name_english: "Ash-Sharh", verses_count: 8, revelation_type: "مكية" },
    { number: 95, name_arabic: "التين", name_english: "At-Tin", verses_count: 8, revelation_type: "مكية" },
    { number: 96, name_arabic: "العلق", name_english: "Al-Alaq", verses_count: 19, revelation_type: "مكية" },
    { number: 97, name_arabic: "القدر", name_english: "Al-Qadr", verses_count: 5, revelation_type: "مكية" },
    { number: 98, name_arabic: "البينة", name_english: "Al-Bayyina", verses_count: 8, revelation_type: "مدنية" },
    { number: 99, name_arabic: "الزلزلة", name_english: "Az-Zalzala", verses_count: 8, revelation_type: "مدنية" },
    { number: 100, name_arabic: "العاديات", name_english: "Al-Adiyat", verses_count: 11, revelation_type: "مكية" },
    { number: 101, name_arabic: "القارعة", name_english: "Al-Qaria", verses_count: 11, revelation_type: "مكية" },
    { number: 102, name_arabic: "التكاثر", name_english: "At-Takathur", verses_count: 8, revelation_type: "مكية" },
    { number: 103, name_arabic: "العصر", name_english: "Al-Asr", verses_count: 3, revelation_type: "مكية" },
    { number: 104, name_arabic: "الهمزة", name_english: "Al-Humaza", verses_count: 9, revelation_type: "مكية" },
    { number: 105, name_arabic: "الفيل", name_english: "Al-Fil", verses_count: 5, revelation_type: "مكية" },
    { number: 106, name_arabic: "قريش", name_english: "Quraysh", verses_count: 4, revelation_type: "مكية" },
    { number: 107, name_arabic: "الماعون", name_english: "Al-Ma'un", verses_count: 7, revelation_type: "مكية" },
    { number: 108, name_arabic: "الكوثر", name_english: "Al-Kawthar", verses_count: 3, revelation_type: "مكية" },
    { number: 109, name_arabic: "الكافرون", name_english: "Al-Kafirun", verses_count: 6, revelation_type: "مكية" },
    { number: 110, name_arabic: "النصر", name_english: "An-Nasr", verses_count: 3, revelation_type: "مدنية" },
    { number: 111, name_arabic: "المسد", name_english: "Al-Masad", verses_count: 5, revelation_type: "مكية" },
    { number: 112, name_arabic: "الإخلاص", name_english: "Al-Ikhlas", verses_count: 4, revelation_type: "مكية" },
    { number: 113, name_arabic: "الفلق", name_english: "Al-Falaq", verses_count: 5, revelation_type: "مكية" },
    { number: 114, name_arabic: "الناس", name_english: "An-Nas", verses_count: 6, revelation_type: "مكية" }

    // ... أضف باقي السور هنا (من 21 إلى 114)
];

// تحويل الأرقام للعربية
function toArabicNumber(num) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicNumbers[parseInt(d)]).join('');
}

// عرض السور
function displaySurahs(surahsToDisplay) {
    const grid = document.getElementById('surahsGrid');
    grid.innerHTML = '';
    
    surahsToDisplay.forEach(surah => {
        const card = document.createElement('a');
        card.href = `surah.html?number=${surah.number}`;
        card.className = 'surah-card';
        
        card.innerHTML = `
            <div class="surah-number">${toArabicNumber(surah.number)}</div>
            <div class="surah-content">
                <h3 class="surah-name-arabic">${surah.name_arabic}</h3>
                <p class="surah-name-english">${surah.name_english}</p>
                <div class="surah-meta">
                    <span class="surah-verses">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        ${surah.verses_count} آية
                    </span>
                    <span class="surah-type">${surah.revelation_type}</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}


// البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = surahs.filter(surah => 
        surah.name_arabic.includes(query) ||
        surah.name_english.toLowerCase().includes(query) ||
        surah.number.toString().includes(query)
    );
    displaySurahs(filtered);
});

// عرض السور عند التحميل

displaySurahs(surahs);



function displayVerses(verses) {
    const container = document.getElementById('versesContent');
    let html = '';

    verses.forEach((verse, index) => {
        let text = verse.text;

        // إزالة البسملة من أول آية نهائيًا
        if (index === 0 && surahNumber !== 9) { // التوبة لا تحتوي بسملة
            // إذا كانت الآية تبدأ بالبسملة
            const bismillah = "بسم الله الرحمن الرحيم";
            if (text.startsWith(bismillah)) {
                text = text.slice(bismillah.length).trim();
            }
        }

        html += `
            <span class="verse-text">${text}</span>
            <span class="verse-number">${toArabicNumber(verse.numberInSurah)}</span>
        `;
    });

    container.innerHTML = html;
}


