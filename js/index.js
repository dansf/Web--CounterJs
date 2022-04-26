/* 
Fazer um contador que a cada numero divisivel por 5 apareça uma frase que o usuario colocar. Essas frases serão substituidas por cada usuário para não encher o Banco de Dados.*/

let increment = document.querySelector(".increment"),
	reset = document.querySelector(".reset"),
	decrement = document.querySelector(".decrement"),
	h2 = document.querySelector(".main__h2"),
	aux = 0,
	color;

console.log(`Inicio : ${localStorage.getItem("aux")}`);

window.addEventListener("load", () => {
	aux = localStorage.getItem("aux");
	color = localStorage.getItem("color");
	h2.textContent = aux;
	h2.style.color = color;
});

const getColor = (h2) => {
	return (h2.style.color =
		aux > 0 ? "hsl(148, 80%, 45%)" : aux == 0 ? "#000" : "hsl(10, 70%, 50%)");
};

const populate = () => {
	localStorage.setItem("aux", h2.textContent);
	localStorage.setItem("color", getColor(h2));
};
/* ========== Tentativa de Clean Code???? ============= */

// const incrementValue = (h2) => {
// 	let aux = 0;

// 	aux++;
// 	console.log(aux);
// 	h2.innerText = aux;
// 	// populate();
// 	if (aux > 0) h2.style.color = "hsl(148, 80%, 45%)";
// 	else if (aux == 0) resetColor();
// }

// const resetValue = () => {

// }

// const decrementValue = () => {

// }

// increment.addEventListener("click", incrementValue(h2));

/* ========== Fim da tentativa de Clean Code!!!! ============= */

const Contador = (increment, reset, decrement, h2) => {
	const resetColor = () => {
		h2.style.color = "#000";
	};

	increment.addEventListener("click", () => {
		aux++;
		h2.innerText = aux;
		populate();
		if (aux > 0) h2.style.color = "hsl(148, 80%, 45%)";
		else if (aux == 0) resetColor();
	});

	reset.addEventListener("click", () => {
		aux = 0;
		h2.innerText = aux;
		populate();
		resetColor();
	});

	decrement.addEventListener("click", () => {
		aux--;
		h2.innerText = aux;
		populate();
		if (aux < 0) h2.style.color = "hsl(10, 70%, 50%)";
		else if (aux == 0) resetColor();
	});
};

Contador(increment, reset, decrement, h2);
