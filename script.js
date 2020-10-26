const currentImage = document.getElementsByClassName("image-pointer");
let mainImage = document.getElementById("imagenGrande");

const numberOfImages = currentImage.length;

for (let i = 0; i <numberOfImages; i++){
	let imageSelected;
	currentImage[i].addEventListener( "click", function(){
		imageSelected = (currentImage[i].attributes.src.value);
		console.log(currentImage[i].attributes.src.value);
		mainImage.attributes.src.value = imageSelected;
	});
	
}

let buttons = document.querySelectorAll("button");
console.log (buttons);
numberOfbuttons = buttons.length;
for(let i=0; i<numberOfbuttons; i++){
	let selectedButton;
	buttons[i].addEventListener("click", function(){
		if (buttons[i].innerText === "Sepia") {
			mainImage.classList.toggle("sepia");
			buttons[i].classList.toggle("btn-active");
		}else{
			if (buttons[i].innerText === "Escala de grises") {
				mainImage.classList.toggle("grayscale");
				buttons[i].classList.toggle("btn-active");
			}else{
				if (buttons[i].innerText === "Brillo") {
					mainImage.classList.toggle("brillo");
					buttons[i].classList.toggle("btn-active");
				}else{
					mainImage.classList.toggle("blur");
					buttons[i].classList.toggle("btn-active");
				}
			}
		}
	})
}