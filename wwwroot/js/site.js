gsap.from(".hero-left", { opacity: 0, x: -100, duration: 1 });
gsap.from(".hero-right", { opacity: 0, x: 100, duration: 1 });

gsap.from(".feature-card", {
    scrollTrigger: ".features",
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1
});

const track = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cards = document.querySelectorAll('.testimonial-card');

let index = 0;

function updateSlider() {
    // કાર્ડની પહોળાઈ + માર્જિન (380 + 30)
    const cardWidth = cards[0].offsetWidth + 30; 
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    
    // Active class updates for animation
    cards.forEach((c, i) => {
        c.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= cards.length) {
        index = 0; // Loop back to first
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = cards.length - 1; // Loop back to last
    }
    updateSlider();
});

// Initial call to set first card as active
updateSlider();

// FAQ Section Toggle Logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // જો કોઈ બીજું FAQ ખુલ્લું હોય તો તેને બંધ કરો
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // હાલના FAQ ને Toggle કરો
        faqItem.classList.toggle('active');
    });
});