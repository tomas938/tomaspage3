const mobileBtn = document.querySelector("#mobileBtn");
const mobileLinks = document.querySelector(".mobile__links");
const hamburger = document.querySelector(".intro__navigation__mobile");
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
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");
});

/// GSAP ///
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".about",
		start: "center bottom",
		end: "center top",
		scrub: true,
		markers: true,
	},
});
