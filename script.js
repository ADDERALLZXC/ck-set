const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const clickPopUpInner = document.querySelector('.oneclick-popup__inner');
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  clickPopUpInner.classList.toggle("oneclick-popup__inner-active")
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
	clickPopUpInner.classList.remove("oneclick-popup__inner-active")
  });
});