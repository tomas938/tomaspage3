const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow = document.querySelectorAll("#mobileArrow");
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
});
arrowProduct.addEventListener("click", () => {
	dropdown1.classList.toggle("active");
});
arrowCompany.addEventListener("click", () => {
	dropdown2.classList.toggle("active");
});
