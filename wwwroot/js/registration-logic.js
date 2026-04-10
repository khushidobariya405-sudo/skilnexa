// registration-logic.js
let debounceTimer;

// OpenStreetMap (Nominatim) માંથી ડેટા ફેચ કરવાનું ફંક્શન
function handleSearch(query) {
    const resultList = document.getElementById('searchList');
    
    if (query.length < 3) {
        resultList.style.display = 'none';
        return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                resultList.innerHTML = '';
                if (data.length > 0) {
                    resultList.style.display = 'block';
                    data.forEach(item => {
                        const div = document.createElement('div');
                        div.className = 'result-item';
                        div.innerText = item.display_name;
                        div.onclick = () => {
                            // ફક્ત મુખ્ય નામ લેવા માટે (પહેલો અલ્પવિરામ સુધી)
                            document.getElementById('orgInput').value = item.display_name.split(',')[0];
                            resultList.style.display = 'none';
                        };
                        resultList.appendChild(div);
                    });
                } else {
                    resultList.style.display = 'none';
                }
            })
            .catch(err => console.error("OSM Error:", err));
    }, 500); // 500ms નો વિલંબ જેથી API ઓવરલોડ ન થાય
}

// Fresher / Experience બદલતી વખતે ફિલ્ડ્સ બદલવાનું લોજિક
function toggleUserType(type) {
    const label = document.getElementById('orgLabel');
    const input = document.getElementById('orgInput');
    const expDiv = document.getElementById('experienceSection');
    const expSelect = document.getElementById('expYears');

    input.value = ""; // ક્લિયર ઇનપુટ
    document.getElementById('searchList').style.display = 'none';

    if (type === 'fresher') {
        label.innerText = "College / University Name";
        input.placeholder = "e.g. Nirma University, GTU";
        expDiv.style.display = "none";
        expSelect.required = false;
    } else {
        label.innerText = "Last Company Name";
        input.placeholder = "e.g. TCS, Google, Reliance";
        expDiv.style.display = "block";
        expSelect.required = true;
    }
}

// બહાર ક્લિક કરવાથી સર્ચ લિસ્ટ બંધ કરવું
document.addEventListener('click', (e) => {
    if (e.target.id !== 'orgInput') {
        document.getElementById('searchList').style.display = 'none';
    }
});