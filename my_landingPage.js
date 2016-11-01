
var mas = document.querySelectorAll(".slider .slide");
var currentSlide = 0;

mas[currentSlide].classList.add("active");
		var timer = setInterval (Show, 4000);

	function Show(){
		ShowSlider(currentSlide+1);
	
	}
	function ShowSlider(n){
		mas[currentSlide].classList.remove("active");
			if (n < mas.length){
				currentSlide = n;
		}else{
			currentSlide = 0;
		}
		mas[currentSlide].classList.add("active");
	}






function PushButton () {
	var form = document.getElementById("myForm");
	 form.setAttribute("style", "width: 1100px; height: 500px; right:0px;" );

}

function Cancel(){
	var form = document.getElementById("myForm");
	form.removeAttribute("style");
}

