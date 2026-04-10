function applyFilters() {
    const cards = document.querySelectorAll('.internship-card');
    const btnContainer = document.querySelector('.toggle-container');

    // રેડિયો બટન્સ માંથી વેલ્યુ મેળવો
    const typeElement = document.querySelector('input[name="jobType"]:checked');
    const stipendElement = document.querySelector('input[name="stipendType"]:checked');

    const selectedType = typeElement ? typeElement.value : "All";
    const selectedStipend = stipendElement ? stipendElement.value : "All";

    cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardStipend = card.getAttribute('data-stipend');

        const matchesType = (selectedType === "All" || cardType === selectedType);
        const matchesStipend = (selectedStipend === "All" || cardStipend === selectedStipend);

        if (matchesType && matchesStipend) {
            card.style.display = "flex";
            card.classList.remove('extra-card'); 
        } else {
            card.style.display = "none";
        }
    });

    // જો કોઈ ફિલ્ટર એક્ટિવ હોય તો View More છુપાવવું
    if (selectedType !== "All" || selectedStipend !== "All") {
        btnContainer.style.display = "none";
    } else {
        btnContainer.style.display = "block";
        resetView(); 
    }
}

function resetView() {
    const cards = document.querySelectorAll('.internship-card');
    cards.forEach((card, index) => {
        if (index >= 6) {
            card.style.display = "none";
            card.classList.add('extra-card');
        } else {
            card.style.display = "flex";
            card.classList.remove('extra-card');
        }
    });
    document.getElementById('toggleBtn').innerText = "View More";
}

function toggleInternships() {
    const extraCards = document.querySelectorAll('.extra-card');
    const btn = document.getElementById('toggleBtn');
    
    if (extraCards.length === 0) return;

    const isHidden = extraCards[0].style.display === "none" || extraCards[0].style.display === "";

    if (isHidden) {
        extraCards.forEach(card => card.style.display = "flex");
        btn.innerText = "View Less";
    } else {
        extraCards.forEach(card => card.style.display = "none");
        btn.innerText = "View More";
        window.scrollTo({ top: 100, behavior: 'smooth' });
    }
}

window.onload = resetView;