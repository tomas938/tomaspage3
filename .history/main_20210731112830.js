const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileArrow = document.querySelectorAll("#mobileArrow");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const arrowConnect = document.querySelector(".arrowConnect");
// const arrrowProduct = document.querySelector(".arrowProduct");
// const arrrowCompany = document.querySelector(".arrowCompany");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
mobileArrow.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		arrow.classList.toggle("flip");
	});
});
arrowConnect.addEventListener("click", () => {
	dropdown3.classList.toggle("active");
});
// arrrowProduct.addEventListener("click", () => {
// 	dropdown.classList.toggle("active");
// });
// arrrowCompany.addEventListener("click", () => {
// 	dropdown.classList.toggle("active");
// });
