function toPx(n) {
	return `${n}px`;
}

class Player {
	constructor() {
		this.boxContainer = document.querySelector(".boxContainer");
		this.positionX = 50;
		this.positionY = parseInt(BOX_HEIGHT) - parseInt(CAR_HEIGHT);
	}
	//creating of our player
	createPlayer() {
		this.player = document.createElement("img");
		this.player.src = "./image/car1.png";
		this.player.style.width = CAR_WIDTH;
		this.player.style.height = CAR_HEIGHT;
		this.player.style.position = "absolute";
		this.player.style.top = toPx(this.positionY);
		this.player.style.left = toPx(this.positionX);
		this.boxContainer.appendChild(this.player);
	}
	//moving our car from one lane to another
	movePlayer(direction) {
		if (direction === "left" && this.positionX > 50) {
			this.positionX -= 265;
		}
		if (direction === "right" && this.positionX < 580) {
			this.positionX += 265;
		}
		this.player.style.left = toPx(this.positionX);
	}
}

//creating the oponent car
class Opponent {
	constructor(positionY, gameplayer) {
		this.gamePlayer = gameplayer;
		this.boxContainer = document.querySelector(".boxContainer");
		this.opponentPosition = [50, 315, 580];
		this.positionX = randomPositionGenerator(this.opponentPosition);
		this.positionY = positionY;
		this.speed = speed;
	}

	createPlayer() {
		this.player = document.createElement("img");
		this.player.src = "./image/car2.png";
		this.player.style.width = CAR_WIDTH;
		this.player.style.height = CAR_HEIGHT;
		this.player.style.position = "absolute";
		this.player.style.top = toPx(this.positionY);
		this.player.style.left = toPx(this.positionX);
		this.boxContainer.appendChild(this.player);
	}

	//the opponent car moves only in y-direction and the speed increases as car increases
	movePlayer() {
		this.positionY += this.speed;

		if (this.positionY >= parseInt(BOX_HEIGHT)) {
			this.positionY = -parseInt(BOX_HEIGHT);
			this.positionX = randomPositionGenerator(this.opponentPosition);
			score++;
			//after each opponent car passes, its speed increases
			//that is position y increase by 0.4 for every opponent car passes
			// max distance covered is 20
			if (speed < 20) {
				speed += 0.4;
				this.speed = speed;
			}
		}
		this.player.style.top = toPx(this.positionY);
		this.player.style.left = toPx(this.positionX);
		this.onCollision();
	}

	//check whether our car and opponent car collide and if so end the game-gameover
	onCollision() {
		if (
			this.positionX === this.gamePlayer.positionX &&
			Math.abs(this.gamePlayer.positionY - this.positionY) <=
				parseInt(CAR_HEIGHT)
		) {
			endGame = true;
			return;
		}
	}
}
