const date = document.getElementById("date");
date.innerHTML = new Date().getFullYeaar();

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-Link");

window.addEventListener("scroll", function (){
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if(scrollHeight>navHeight){
		navbar.classList.add("fixed-nav");
	}
	else{
		navbar.classList.remove("fixed-nav");
	}
})