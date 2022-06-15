let speed = 5;
let score = 0;
let endGame = false;

class CarGame {
	constructor() {
		this.boxContainer = document.querySelector(".boxContainer");
		this.boxContainer.style.width = BOX_WIDTH;
		this.boxContainer.style.height = BOX_HEIGHT;

		this.body = document.querySelector("body");

		// initializing player
		this.newPlayer = new Player();
		this.newPlayer.createPlayer();

		// for key press event
		this.body.addEventListener("keydown", (event) => {
			if (event.keyCode === 65) {
				this.newPlayer.movePlayer("left");
			}
			if (event.keyCode === 68) {
				this.newPlayer.movePlayer("right");
			}
		});

		// initializing opponent
		this.opponentOne = new Opponent(0, this.newPlayer);
		this.opponentTwo = new Opponent(0, this.newPlayer);
		this.opponentOne.createPlayer();
		this.opponentTwo.createPlayer();
	}

	play = () => {
		window.requestAnimationFrame(this.play);
		if (endGame === false) {
			//show score board
			this.scoreBoard();

			//moving opponents
			this.opponentOne.movePlayer();
			this.opponentTwo.movePlayer();
		} else if (endGame === true) {
			//game is over
			this.gameOver();
		}
	};
	gameOver() {
		document.querySelector("#gameOver").style.display = "flex";
	}
	scoreBoard() {
		scoreBoard.querySelector("#scoreValue").textContent = score;
	}
}

const menu = document.querySelector(".menu");
const playButton = document.querySelector("#play");
const scoreBoard = document.querySelector(".score");
scoreBoard.style.display = "none";

//initialize carGame
const game = new CarGame();

//a menu is shown and when play button is clicked play the game
playButton.addEventListener("click", () => {
	menu.style.display = "none";
	scoreBoard.style.display = "block";

	//game start from here
	game.play();
});
