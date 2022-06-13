//making the outer container
const boxContainer = document.createElement("div");
boxContainer.style.width = toPx(1000);
boxContainer.style.height = toPx(1000);
boxContainer.style.border = "2px solid black";
boxContainer.style.position = "relative";
boxContainer.style.margin = "0 auto";
document.body.appendChild(boxContainer);
const box = boxContainer.getBoundingClientRect(); // gives everything about box-cotainer height width

function toPx(n) {
	return `${n}px`;
}

class Ball {
	constructor(x, y, dx, dy, color, radius, mass) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.color = color;
		this.radius = radius;
		this.mass = mass;
		this.width = 2 * this.radius;
		this.height = 2 * this.radius;
	}

	create() {
		this.ball = document.createElement("div");
		this.ball.style.width = toPx(this.width);
		this.ball.style.height = toPx(this.height);
		this.ball.style.backgroundColor = this.color;
		this.ball.style.borderRadius = "50%";
		this.ball.style.position = "absolute";
		this.ball.style.top = toPx(this.y - this.radius);
		this.ball.style.left = toPx(this.x - this.radius);
		boxContainer.appendChild(this.ball);
	}
	move() {
		this.y += this.dy;
		this.x += this.dx;

		this.ball.style.top = toPx(this.y - this.radius);
		this.ball.style.left = toPx(this.x - this.radius);
	}

	boxCollision() {
		if (this.x + this.radius >= box.width) this.dx = -1; //checking-rightside
		if (this.x - this.radius <= 0) this.dx = 1; //checking-leftside
		if (this.y + this.radius >= box.height) this.dy = -1; //checking-bottom
		if (this.y - this.radius <= 0) this.dy = 1; //checking-top
	}

	//comparing the ball with other balls to see whether collision and perform action
	ballCollision() {
		for (let i = 0; i < balls.length; i++) {
			if (balls[i] !== this) {
				let distance = getDistance(this.x, this.y, balls[i].x, balls[i].y);
				let radiusSquared = (this.radius + balls[i].radius) ** 2;
				if (distance <= radiusSquared) {
					this.onCollision(balls[i]);
				}
			}
		}
	}
	onCollision = (otherBall) => {
		let collisionVector = {
			//distance between x and y of the collision circles
			x: otherBall.x - this.x,
			y: otherBall.y - this.y,
		};

		let distanceOfCollisionVector = Math.sqrt(
			//calculation of magnitude of the vector
			getDistance(this.x, this.y, otherBall.x, otherBall.y)
		);

		let normalizedCollisionVector = {
			//for direction and this vector acts as unit vector
			x: collisionVector.x / distanceOfCollisionVector,
			y: collisionVector.y / distanceOfCollisionVector,
		};

		let relativeVelocityVector = {
			//to calc dot product that gives speed of collision
			x: this.dx - otherBall.dx,
			y: this.dy - otherBall.dy,
		};

		let collisionSpeed =
			relativeVelocityVector.x * normalizedCollisionVector.x +
			relativeVelocityVector.y * normalizedCollisionVector.y;

		if (collisionSpeed < 0) return; //negative speed: objects moving away

		//taking mass into consideration to see the impulse and calc the momentum of the colloision
		let impulse = (2 * collisionSpeed) / (this.mass + otherBall.mass);
		this.dx -= impulse * otherBall.mass * normalizedCollisionVector.x;
		this.dy -= impulse * otherBall.mass * normalizedCollisionVector.y;
		otherBall.dx += impulse * this.mass * normalizedCollisionVector.x;
		otherBall.dy += impulse * this.mass * normalizedCollisionVector.y;
	};
}

const balls = [];

const ballGenerator = (numOfBalls) => {
	for (let i = 0; i < numOfBalls; i++) {
		let dx = getRandomInt(-4, 3);
		let dy = getRandomInt(-4, 3);
		let radius = getRandomInt(10, 70);
		let x = getRandomInt(radius, box.width - radius);
		let y = getRandomInt(radius, box.height - radius);
		let color = getRandomColor();
		let mass = getRandomInt(2, 10);

		// to prevent collision at first
		if (i !== 0) {
			for (let j = 0; j < i; j++) {
				let distance = getDistance(x, y, balls[j].x, balls[j].y);
				let radiusSquared = (radius + balls[j].radius) ** 2;
				if (distance <= radiusSquared) {
					x = getRandomInt(radius, box.width - radius);
					y = getRandomInt(radius, box.width - radius);
					j = -1;
				}
			}
		}
		let newBall = new Ball(x, y, dx, dy, color, radius, mass);
		balls.push(newBall);
	}
};

//for random generation
const getRandomInt = (min, max) => {
	let minValue = Math.ceil(min);
	let maxValue = Math.floor(max);
	return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue); //The maximum is exclusive and the minimum is inclusive
};

//to get random color
const getRandomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16); //8 bit code
};

//calculation of distance using distance formula
const getDistance = (x1, y1, x2, y2) => {
	return (x2 - x1) ** 2 + (y2 - y1) ** 2;
};

function play() {
	balls.forEach((ball) => {
		ball.boxCollision();
		ball.ballCollision();
		ball.move();
	});
	//every one sec run 60 times
	window.requestAnimationFrame(() => {
		play();
	});
}

ballGenerator(50);
balls.forEach((ball) => {
	ball.create();
});
play();
