const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
// const mobileArrow1 = document.querySelector("#mobileArrow1");
// const mobileArrow2 = document.querySelector("#mobileArrow2");
// const mobileArrow3 = document.querySelector("#mobileArrow3");
// const dropdown1 = document.querySelector(".dropdown1");
// const dropdown2 = document.querySelector(".dropdown2");
// const dropdown3 = document.querySelector(".dropdown3");
// const arrowConnect = document.querySelector(".arrowConnect");
// const arrowProduct = document.querySelector(".arrowProduct");
// const arrowCompany = document.querySelector(".arrowCompany");
const links = document.querySelectorAll("li");
const arrows = document.querySelectorAll("#mobileArrow");
const dropdown = document.querySelectorAll(".dropdown");
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
console.log(links);
console.log(arrows[1]);
console.log(dropdown);
// links.forEach((link) => {
// 	link.addEventListener("click", () => {
// 		link.classList.toggle("flip");
// 	});
// });
// links.forEach((link) => {
// 	link.addEventListener("click", () => {
// 		link.classList.toggle("activate");
// 	});
// });
for (i = 0; i < links.length; i++) {
	console.log(links[i]);

	links[i].addEventListener("click", function () {
		console.log(links[i]);
	});
	// 	// if (this.classList.contains("activate")) {
	// 	// 	this.classList.remove("activate");
	// 	// } else {
	// 	// 	this.classList.add("activate");
	// 	// }
	// 	// links.forEach((link) => {
	// 	// 	link.classList.remove("activate");
	// 	// });
	// 	// var panel = this.nextElementSibling;
	// 	// if (panel.style.display === "block") {
	// 	// 	panel.style.display = "none";
	// 	// } else {
	// 	// 	panel.style.display = "block";
	// 	// }
	// 	// arrows[i].classList.toggle("flip");
}
