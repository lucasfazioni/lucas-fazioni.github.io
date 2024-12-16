document.addEventListener('DOMContentLoaded', function () {
	const canvas = document.getElementById('particles-js');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let particlesArray = [];
	const numberOfParticles = 120; // Reduzido em 20%

	const mouse = {
		x: null,
		y: null,
		radius: 150 // Raio de interação do mouse
	};

	class Particle {
		constructor(x, y, directionX, directionY, size, color) {
			this.x = x;
			this.y = y;
			this.directionX = directionX;
			this.directionY = directionY;
			this.size = size;
			this.color = color;
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
		}

		update() {
			if (this.x > canvas.width || this.x < 0) {
				this.directionX = -this.directionX;
			}
			if (this.y > canvas.height || this.y < 0) {
				this.directionY = -this.directionY;
			}
			this.x += this.directionX;
			this.y += this.directionY;

			this.draw();
		}
	}

	function init() {
		particlesArray = [];
		for (let i = 0; i < numberOfParticles; i++) {
			const size = Math.random() * 3 + 1; // Ajustar o tamanho das esferas
			const x = Math.random() * (canvas.width - size * 2);
			const y = Math.random() * (canvas.height - size * 2);
			const directionX = Math.random() * 2 - 1;
			const directionY = Math.random() * 2 - 1;
			const color = 'rgba(255, 255, 255, 0.8)';

			particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
		}
	}

	function connect() {
		for (let a = 0; a < particlesArray.length; a++) {
			for (let b = a; b < particlesArray.length; b++) {
				const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
					((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
				if (distance < (canvas.width / 7) * (canvas.height / 7)) {
					ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
					ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
					ctx.stroke();
				}
			}
		}
	}

	function connectMouse() {
		for (let i = 0; i < particlesArray.length; i++) {
			const distance = ((mouse.x - particlesArray[i].x) * (mouse.x - particlesArray[i].x)) +
				((mouse.y - particlesArray[i].y) * (mouse.y - particlesArray[i].y));
			if (distance < mouse.radius * mouse.radius) {
				ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(mouse.x, mouse.y);
				ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
				ctx.stroke();
			}
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < particlesArray.length; i++) {
			particlesArray[i].update();
		}
		connect();
		connectMouse();
	}

	window.addEventListener('mousemove', function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
	});

	window.addEventListener('resize', function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		mouse.radius = (canvas.height / 80) * (canvas.width / 80);
		init();
	});

	init();
	animate();
});
