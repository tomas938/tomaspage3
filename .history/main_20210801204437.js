const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow1 = document.querySelector("#mobileArrow1");
const mobileArrow2 = document.querySelectorAll("#mobileArrow2");
const mobileArrow3 = document.querySelectorAll("#mobileArrow3");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const arrowConnect = document.querySelector(".arrowConnect");
const arrowProduct = document.querySelector(".arrowProduct");
const arrowCompany = document.querySelector(".arrowCompany");
const links = document.querySelectorAll("li");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
// mobileArrow.forEach((arrow) => {
// 	arrow.addEventListener("click", () => {
// 		arrow.classList.toggle("flip");
// 	});
// });
arrowConnect.addEventListener("click", () => {
	dropdown3.classList.toggle("active");
	mobileArrow1.classList.toggle("flip");
});
arrowProduct.addEventListener("click", () => {
	dropdown1.classList.toggle("active");
});
arrowCompany.addEventListener("click", () => {
	dropdown2.classList.toggle("active");
});
