document.addEventListener('DOMContentLoaded', () => {
    console.log("Application Success Page Loaded");
    
    // તમે અહીં વધારાના એનિમેશન લોજિક ઉમેરી શકો છો
    const cards = document.querySelectorAll('.action-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log("Hovering over option...");
        });
    });
});