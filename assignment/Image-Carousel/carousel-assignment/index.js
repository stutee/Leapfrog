function toPx(n) {
	return `${n}px`;
}

class Carousel {
	constructor() {
		this.carousel = document.querySelector(".carousel-container");
		this.imageWrapper = document.querySelector(".carousel-image-wrapper");
		this.imageArray = this.imageWrapper.querySelectorAll("img");
		this.imageLength = this.imageArray.length;
		this.currentIndex = 0;
		this.position = 0;
		this.speed = 25;

		this.GenerateDot(this.imageLength);
		this.leftButton = document.querySelector(".left-arrow");
		this.leftButton.addEventListener("click", this.prevImage);
		this.rightButton = document.querySelector(".right-arrow");
		this.rightButton.addEventListener("click", this.nexImage);
	}
	prevImage = () => {
		//revert to the final image when intented to go left of firstimage or move towards normal flow right to left
		if (this.currentIndex === 0) {
			this.currentIndex = this.imageLength - 1;
		} else {
			this.currentIndex--;
		}
		this.sliding();
	};

	nexImage = () => {
		// revert back to the first image after the final image has reached

		if (this.currentIndex === this.imageLength - 1) {
			this.currentIndex = 0;
		}
		// else the normal flow of image that is left to right
		else {
			this.currentIndex++;
		}
		// sliding transition function
		this.sliding();
	};

	sliding = () => {
		let startSliding = window.requestAnimationFrame(this.sliding);
		// we cancel the animation when the image is fully shown

		if (this.position === -(this.currentIndex * 800)) {
			window.cancelAnimationFrame(startSliding);
		}
		// image move from left to right
		// this condition runs when prev button is clicked
		else if (this.position < -(this.currentIndex * 800)) {
			this.position += this.speed;
		}
		// image move from right to left
		// this condition runs when next button is clicked
		else {
			this.position -= this.speed;
		}

		this.imageWrapper.style.left = toPx(this.position);
	};

	GenerateDot(numberOfDots) {
		let dotContainer = document.querySelector(".radio-btn");
		for (let i = 0; i < numberOfDots; i++) {
			let dot = document.createElement("div");
			dot.className = "dot";
			dot.setAttribute("dot-no", i);
			dotContainer.appendChild(dot);

			dot.addEventListener("click", (event) => {
				//which dot is clicked
				let previousIndex = this.currentIndex;
				this.currentIndex = parseInt(event.target.getAttribute("dot-no"));
				//check which image is shown
				if (previousIndex === this.currentIndex) {
					return;
				} else {
					this.sliding();
				}
			});
		}
	}

	// autoplay(transTime) {
	// 	let dotArray = document.querySelectorAll(".dot");
	// 	// let count = 0;
	// 	setInterval(() => {
	// 		if (this.currentIndex === dotArray.length - 1) {
	// 			this.currentIndex = 0;
	// 		} else {
	// 			this.currentIndex++;
	// 		}
	// 		dotArray[this.currentIndex].click();
	// 		console.log("wwww", this.currentIndex);
	// 	}, transTime);
	// }
}

let newCarousel = new Carousel();
// newCarousel.autoplay(3000);
