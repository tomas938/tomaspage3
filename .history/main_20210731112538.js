const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow = document.querySelectorAll("#mobileArrow");
const dropdown = document.querySelector(".dropdown");
const arrowConnect = document.querySelector(".arrowConnect");
const arrrowProduct = document.querySelector(".arrowProduct");
const arrrowCompany = document.querySelector(".arrowCompany");
const connect = document.querySelector(".connect");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
mobileArrow.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		arrow.classList.toggle("flip");
	});
});
arrowConnect.addEventListener("click", () => {
	dropdown.classList.toggle("active");
});
