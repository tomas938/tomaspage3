const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow = document.querySelectorAll("#mobileArrow");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
