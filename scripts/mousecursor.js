const button = document.querySelector(".scrolltop");
window.onscroll = () => {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		button.style.opacity = "1";
		button.style.pointerEvents = "all";

	} else {
		button.style.opacity = "0";
		button.style.pointerEvents = "none";
	}
}
function scrolltotop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', (e) => {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
})