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
let tl = gsap.timeline({
	// yes, we can add it to an entire timeline!
	scrollTrigger: {
		markers: true,
		trigger: ".about",
		start: "top top", // when the top of the trigger hits the top of the viewport
		end: "+=500", // end after scrolling 500px beyond the start
		scrub: 1,
		x: 500, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	},
});
