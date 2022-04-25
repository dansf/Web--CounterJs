let increment = document.querySelector(".increment"),
	reset = document.querySelector(".reset"),
	decrement = document.querySelector(".decrement"),
	h2 = document.querySelector(".main__h2");

const contador = (increment, reset, decrement, h2) => {
	let aux = 0;

	const resetColor = () => h2.style.color = "#000"

	increment.addEventListener("click", () => {
		aux++;
		h2.innerText = aux;
		if (aux > 0) h2.style.color = "hsl(148, 80%, 45%)";
		else if (aux == 0) resetColor();
	});

	reset.addEventListener("click", () => {
		aux = 0;
		h2.innerText = aux;
		resetColor();
	});

	decrement.addEventListener("click", () => {
		aux--;
		h2.innerText = aux;
		if (aux < 0) h2.style.color = "hsl(10, 70%, 50%)";
		else if (aux == 0) resetColor();
	});
};

contador(increment, reset, decrement, h2);
