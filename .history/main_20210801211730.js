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
// const acordeon = function (className, dropdown, arrow) {
// 	className.addEventListener("click", () => {
// 		dropdown.classList.toggle("active");
// 		arrow.classList.toggle("flip");
// 	});
// };
// acordeon(arrowProduct, dropdown1, mobileArrow1);
// acordeon(arrowCompany, dropdown2, mobileArrow2);
// acordeon(arrowConnect, dropdown3, mobileArrow3);
new Accordion(".arrowProduct");
new Accordion(".arrowProduct", {
	duration: 400,
	showMultiple: true,
	onOpen: function (currentElement) {
		console.log(currentElement);
	},
});
