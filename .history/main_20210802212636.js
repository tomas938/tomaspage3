const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");

const links = document.querySelectorAll("li");
const arrows = document.querySelectorAll("#mobileArrow");
const dropdown = document.querySelectorAll(".dropdown");
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
links.forEach((link) => {
	link.addEventListener("click", () => {
		links.forEach((link) => {
			link.classList.remove("activate");
		});
		if (link.classList.contains("activate")) {
			link.classList.toggle("activate");
		} else {
			link.classList.add("activate");
		}
	});
});
