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
		trigger: ".about",
		pin: true, // pin the trigger element while active
		start: "top top", // when the top of the trigger hits the top of the viewport
		end: "+=500", // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		snap: {
			snapTo: "labels", // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
		},
	},
});
