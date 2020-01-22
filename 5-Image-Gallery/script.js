const panels = document.querySelectorAll('.panel');

function toggleOpenImage() {
    this.classList.toggle('open-image');
}

function toggleOpenText(e) {
    if (e.propertyName === "flex-grow") {
        this.classList.toggle('open-text');
    }
}

function toggleAll() {
    this.classList.toggle('open-image');
    this.classList.toggle('open-text');
}

// // TOGGLE TEXT AFTER IMAGE ANIMATION
// panels.forEach(panel => panel.addEventListener('click', toggleOpenImage));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenText));


// TOGGLE IMAGE AND TEXT AT THE SAME TIME WITH MOUSEOVER
panels.forEach(panel => panel.addEventListener('mouseover', toggleAll));
panels.forEach(panel => panel.addEventListener('mouseout', toggleAll));