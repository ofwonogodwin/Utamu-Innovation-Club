// Gallery Page JavaScript

// Mobile menu functionality
function openmenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.add('active');
    }
}

function closemenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.remove('active');
    }
}

// Gallery data
const galleryImages = [
    {
        src: 'images/AI.jpeg',
        title: 'AI for Social Good',
        category: 'Workshop',
        date: 'November 2024'
    },
    {
        src: 'images/AI2.jpeg',
        title: 'Machine Learning Bootcamp',
        category: 'Workshop',
        date: 'October 2024'
    },
    {
        src: 'images/AI3.jpeg',
        title: 'Cybersecurity Training',
        category: 'Workshop',
        date: 'September 2024'
    },
    {
        src: 'images/stud1campus.jpeg',
        title: 'Campus Innovation Day',
        category: 'Community',
        date: 'December 2024'
    },
    {
        src: 'images/stud1pc.jpeg',
        title: 'UTAMU Hackathon 2024',
        category: 'Hackathon',
        date: 'August 2024'
    },
    {
        src: 'images/stud2pc.jpeg',
        title: 'Collaborative Coding',
        category: 'Community',
        date: 'July 2024'
    },
    {
        src: 'Guys.jpeg',
        title: 'Innovation Team Meetup',
        category: 'Meetup',
        date: 'November 2024'
    },
    {
        src: 'clubimage.jpeg',
        title: 'Community Building Event',
        category: 'Meetup',
        date: 'October 2024'
    }
];

// Filter functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Animate gallery items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        observer.observe(item);
    });

    // Load more functionality
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            // Simulate loading more images
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

            setTimeout(() => {
                alert('This feature will load more images from your events. Add more photos to your images folder and update the gallery!');
                this.innerHTML = '<i class="fas fa-images"></i> Load More Photos';
            }, 1000);
        });
    }
});

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDate = document.getElementById('lightboxDate');

    const imageData = galleryImages[index];

    lightboxImage.src = imageData.src;
    lightboxTitle.textContent = imageData.title;
    lightboxCategory.textContent = imageData.category;
    lightboxDate.textContent = imageData.date;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeLightboxImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDate = document.getElementById('lightboxDate');

    const imageData = galleryImages[currentImageIndex];

    lightboxImage.style.opacity = '0';
    setTimeout(() => {
        lightboxImage.src = imageData.src;
        lightboxTitle.textContent = imageData.title;
        lightboxCategory.textContent = imageData.category;
        lightboxDate.textContent = imageData.date;
        lightboxImage.style.opacity = '1';
    }, 150);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function (e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeLightbox();
    }
});
