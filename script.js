// Floating Hearts Animation
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Create hearts continuously
setInterval(createHeart, 800);

// Initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}

// Countdown Timer
function updateCountdown() {
    // Set the birthday date (change this to Ravi's actual birthday)
    const birthday = new Date('2026-03-05T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Start Surprise Button
function startSurprise() {
    document.getElementById('countdown').scrollIntoView({ behavior: 'smooth' });
}

// Gallery Lightbox
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Confetti Animation
function createConfetti() {
    const colors = ['#ff6b9d', '#4a90e2', '#667eea', '#a8d8ff', '#ffd700'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const fallDistance = window.innerHeight + 100;
        const horizontalMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            {
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translate(${horizontalMovement}px, ${fallDistance}px) rotate(${Math.random() * 720}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Trigger Surprise
function triggerSurprise() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.add('active');
    createConfetti();
    
    // Create multiple waves of confetti
    setTimeout(createConfetti, 500);
    setTimeout(createConfetti, 1000);
}

// Scroll Animation for Timeline
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Observe timeline items when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.boxShadow = '0 0 10px white';
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});
