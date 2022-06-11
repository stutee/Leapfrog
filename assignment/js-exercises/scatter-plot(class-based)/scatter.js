const scatterBox = document.createElement("div");
scatterBox.style.width = "800px";
scatterBox.style.height = "800px";
scatterBox.style.border = "2px solid grey";
scatterBox.style.margin = "0 auto";
scatterBox.style.marginTop = "100px";
scatterBox.style.position = "relative";
document.body.appendChild(scatterBox);

class ScatterBall {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.scatterBall = document.createElement("div");

		this.scatterBall.style.top = `${this.x * 10}px`;
		this.scatterBall.style.left = `${this.y * 10}px`;
		this.scatterBall.style.width = "50px";
		this.scatterBall.style.height = "50px";
		this.scatterBall.style.border = "2px solid #259cdb";
		this.scatterBall.style.borderRadius = "50%";
		this.scatterBall.style.background = "#259cdb";
		this.scatterBall.style.position = "absolute";
		scatterBox.appendChild(this.scatterBall);

		this.scatterBall.addEventListener("click", () => {
			scatterBox.removeChild(this.scatterBall);
		});
	}
}

const points = [
	{ x: 10, y: 20 },
	{ x: 40, y: 40 },
	{ x: 60, y: 20 },
	{ x: 70, y: 50 },
	{ x: 50, y: 30 },
];

points.forEach((point) => {
	const newScatterBall = new ScatterBall(point.x, point.y);
});
