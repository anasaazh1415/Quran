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