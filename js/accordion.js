var acc = document.getElementsByClassName("accordion");
var i, q;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		var isActive = this.classList.contains("active");
		var accChildren = this.parentElement.parentElement.children;
		for (q = 0; q < accChildren.length; q++) {
			accChildren[q].getElementsByClassName("accordion")[0].classList.remove("active");
			accChildren[q].getElementsByClassName("panel")[0].style.display = "none";
		}
		if (!isActive) {
			this.classList.add("active");
			this.nextElementSibling.style.display = "block";
		}
	});
}
