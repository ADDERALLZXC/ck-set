const sizeLabel = document.querySelectorAll(".label");

function labelToggle() {
	sizeLabel.classList.toggle("label");
}

sizeLabel.forEach((eq) => {
    eq.addEventListener('click', labelToggle)
})
