const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const mobileNav = document.querySelector(".intro__navigation__mobile");
const hamburger = document.querySelector(".intro__navigation__mobile");
const spans = document.querySelectorAll("span");
const links = document.querySelectorAll("li");
window.addEventListener("resize", () => {
	let windowWidth = window.innerWidth;
	if (windowWidth > 900) {
		mobileLinks.classList.remove("active");
	}
});
mobileBtn.addEventListener("click", () => {
	mobileLinks.classList.toggle("active");
});
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", () => {
		links[i].classList.toggle("activate");
	});
}

mobileNav.addEventListener("click", () => {
	spans.forEach((span) => {
		span.classList.toggle("is-active");
	});
});
