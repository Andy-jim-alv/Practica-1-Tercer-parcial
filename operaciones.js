function obtenerValores() {
	const n1 = parseFloat(document.getElementById("num1").value);
	const n2 = parseFloat(document.getElementById("num2").value);
	return [n1, n2];
}

function sumar() {
	const [n1, n2] = obtenerValores();
	document.getElementById("r").innerText = n1 + n2;
}

function restar() {
	const [n1, n2] = obtenerValores();
	document.getElementById("r").innerText = n1 - n2;
}

function multiplicar() {
	const [n1, n2] = obtenerValores();
	document.getElementById("r").innerText = n1 * n2;
}

function dividir() {
	const [n1, n2] = obtenerValores();
	if (n2 === 0) {
		document.getElementById("r").innerText = "No se puede dividir por cero";
	} else {
		document.getElementById("r").innerText = n1 / n2;
	}
}
