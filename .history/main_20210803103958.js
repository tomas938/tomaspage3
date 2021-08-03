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
gsap.to(".about", {
	scrollTrigger: {
		toggleActions: "play none none reverse",
		trigger: ".about",
		start: "-30%",
	},
	y: 0,
	opacity: 1,
	duration: 1,
});
gsap.to(".mobiles", {
	scrollTrigger: {
		toggleActions: "play none none reverse",

		trigger: ".mobiles",
		start: "-150%",
	},
	y: 0,
	opacity: 1,
	duration: 1,
});
gsap.to(".desktop", {
	scrollTrigger: {
		toggleActions: "play none none reverse",

		trigger: ".desktop",
		start: "-40%",
	},
	y: 0,
	opacity: 1,
	duration: 1,
});
gsap.to(".footer", {
	scrollTrigger: {
		toggleActions: "play none none reverse",

		trigger: ".footer",
		start: "-180%",
	},
	opacity: 1,
	duration: 1,
});
