const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
