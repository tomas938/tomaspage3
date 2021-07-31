const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow = document.querySelectorAll("#mobileArrow");
const content = document.querySelector(".content");
const dropdown = document.querySelector(".dropdown");
console.log(mobileArrow);
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
mobileArrow.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		arrow.classList.toggle("flip");
		content.classList.toggle("active");
	});
});
