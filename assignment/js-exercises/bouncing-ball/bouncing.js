// Creating the outer box
const ballBox = document.createElement("div");
ballBox.style.width = "800px";
ballBox.style.height = "800px";
ballBox.style.border = "2px solid grey";
ballBox.style.position = "relative";
ballBox.style.margin = "0 auto";
ballBox.style.marginTop = "100px";
document.body.appendChild(ballBox);

//Creating the ball

class Ball {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.ball = document.createElement("div");
		this.ball.style.width = `${this.width}px`;
		this.ball.style.height = `${this.height}px`;
		this.ball.style.borderRadius = "50%";
		this.ball.style.position = "absolute";
		this.ball.style.top = "0px";
		this.ball.style.left = "350px";
		this.ball.style.backgroundColor = "#259cdb";
		ballBox.appendChild(this.ball);
	}
}

const newBall = new Ball(80, 80);

let ballDirection = "down";

function bouncing() {
	if (ballDirection === "down") {
		newBall.ball.style.top = `${parseInt(newBall.ball.style.top) + 5}px`;
		if (
			parseInt(newBall.ball.style.top) + parseInt(newBall.ball.style.height) ===
			parseInt(ballBox.style.height)
		) {
			ballDirection = "up";
		}
	} else {
		newBall.ball.style.top = `${parseInt(newBall.ball.style.top) - 5}px`;
		if (parseInt(newBall.ball.style.top) === 0) {
			ballDirection = "down";
		}
	}
}

setInterval(bouncing, 5);
