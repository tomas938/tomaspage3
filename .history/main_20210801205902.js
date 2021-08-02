const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow1 = document.querySelector("#mobileArrow1");
const mobileArrow2 = document.querySelector("#mobileArrow2");
const mobileArrow3 = document.querySelector("#mobileArrow3");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const arrowConnect = document.querySelector(".arrowConnect");
const arrowProduct = document.querySelector(".arrowProduct");
const arrowCompany = document.querySelector(".arrowCompany");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
// arrowConnect.addEventListener("click", () => {
// 	dropdown3.classList.toggle("active");
// 	mobileArrow3.classList.toggle("flip");
// });
// arrowProduct.addEventListener("click", () => {
// 	dropdown1.classList.toggle("active");
// 	mobileArrow1.classList.toggle("flip");
// });
// arrowCompany.addEventListener("click", () => {
// 	dropdown2.classList.toggle("active");
// 	mobileArrow2.classList.toggle("flip");
// });
const acordeon = function (className, dropdown, arrow) {
	className.addEventListener("click", () => {
		dropdown.classList.toggle("active");
		arrow.classList.toggle("flip");
	});
};
acordeon(arrowConnect, dropdown3, mobileArrow3);
