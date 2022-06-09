const scatterBox = document.createElement("div");
scatterBox.style.width = "800px";
scatterBox.style.height = "800px";
scatterBox.style.border = "2px solid grey";
scatterBox.style.position = "relative";
document.body.appendChild(scatterBox);

const createPoint = (x, y) => {
	const scatterBall = document.createElement("div");
	scatterBall.style.width = "50px";
	scatterBall.style.height = "50px";
	scatterBall.style.border = "2px solid #259cdb";
	scatterBall.style.borderRadius = "50%";
	scatterBall.style.background = "#259cdb";
	scatterBall.style.position = "absolute";
	scatterBall.style.top = `${x * 10}px`;
	scatterBall.style.left = `${y * 10}px`;
	scatterBox.appendChild(scatterBall);

	scatterBall.addEventListener("click", () => {
		scatterBox.removeChild(scatterBall);
	});
};

const points = [
	{ x: 10, y: 20 },
	{ x: 40, y: 40 },
	{ x: 60, y: 20 },
	{ x: 70, y: 50 },
	{ x: 50, y: 30 },
];

points.forEach((point) => {
	createPoint(point.x, point.y);
});
