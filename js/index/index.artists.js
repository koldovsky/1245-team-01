
const prevBtn = document.querySelector('.artists__prev-btn');
const nextBtn = document.querySelector('.artists__next-btn');
const itemsContainer = document.querySelector('.artists__list');
let items = document.querySelectorAll('.artists__item');

let itemCount = items.length;
let visibleItemsCount = getVisibleItemsCount();
let currentIndex = visibleItemsCount; // Start at the first real item position

// Clone the first and last sets of items
for (let i = 0; i < visibleItemsCount; i++) {
    const firstClone = items[i].cloneNode(true);
    const lastClone = items[itemCount - 1 - i].cloneNode(true);
    itemsContainer.appendChild(firstClone);
    itemsContainer.insertBefore(lastClone, items[0]);
}

// Update the items collection and itemCount after cloning
items = document.querySelectorAll('.artists__item');
itemCount = itemsContainer.children.length;

// Set initial position to the first real item
itemsContainer.style.transform = `translateX(-${(100 / visibleItemsCount) * currentIndex}%)`;

// Function to calculate the number of visible items based on screen width
function getVisibleItemsCount() {
    const containerWidth = itemsContainer.clientWidth;
    const itemWidth = items[0].clientWidth;
    return Math.round(containerWidth / itemWidth);
}

// Function to update the carousel position
function updateCarousel() {
    itemsContainer.style.transition = 'transform 0.5s ease-in-out';
    itemsContainer.style.transform = `translateX(-${(100 / visibleItemsCount) * currentIndex}%)`;
}

// Seamlessly loop when reaching the end or start
function checkLoop() {
    if (currentIndex >= itemCount - visibleItemsCount) {
        setTimeout(() => {
            itemsContainer.style.transition = 'none';
            currentIndex = visibleItemsCount; // Jump back to the first real item
            itemsContainer.style.transform = `translateX(-${(100 / visibleItemsCount) * currentIndex}%)`;
        }, 500);
    } else if (currentIndex < visibleItemsCount) {
        setTimeout(() => {
            itemsContainer.style.transition = 'none';
            currentIndex = itemCount - (2 * visibleItemsCount); // Jump back to the last real item
            itemsContainer.style.transform = `translateX(-${(100 / visibleItemsCount) * currentIndex}%)`;
        }, 500);
    }
}

// Event listener for the previous button
prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    currentIndex--;
    updateCarousel();
    checkLoop();
});

// Event listener for the next button
nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    currentIndex++;
    updateCarousel();
    checkLoop();
});

// Update carousel on window resize
window.addEventListener('resize', function () {
    visibleItemsCount = getVisibleItemsCount();
    itemsContainer.style.transition = 'none';
    itemsContainer.style.transform = `translateX(-${(100 / visibleItemsCount) * currentIndex}%)`;
});
