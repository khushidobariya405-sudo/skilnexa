let isExpanded = false;
let selectedFilter = "All";

function handleFilterChange(value) {
    selectedFilter = value;
    isExpanded = false; 
    renderCompanyCards();
}

function toggleDisplayLimit() {
    isExpanded = !isExpanded;
    renderCompanyCards();
}

function renderCompanyCards() {
    const grid = document.getElementById('companyGrid');
    const btn = document.getElementById('toggleBtn');
    grid.innerHTML = "";

    const filteredList = serverData.filter(item => 
        selectedFilter === "All" || item.type === selectedFilter
    );

    const countToShow = isExpanded ? filteredList.length : 6;
    const itemsToShow = filteredList.slice(0, countToShow);

    itemsToShow.forEach(item => {
        grid.innerHTML += `
            <div class="job-card">
                <div>
                    <h3 style="color: white; margin-bottom: 5px;">${item.name}</h3>
                    <p style="color: #3b82f6; font-weight: 500; margin-bottom: 15px;">${item.category}</p>
                    <p style="color: #8b949e; font-size: 0.9rem;">📍 Location: ${item.type}</p>
                </div>
               <button class="apply-btn" 
                    onclick="window.location.href='/Apply/Index?jobTitle=${encodeURIComponent(item.name)}&companyName=${encodeURIComponent(item.category)}'">
                    Apply Now
                </button>
            </div>
        `;
    });

    if (filteredList.length > 6) {
        btn.style.display = "block";
        btn.innerText = isExpanded ? "View Less" : "View More";
    } else {
        btn.style.display = "none";
    }
}

window.onload = renderCompanyCards;