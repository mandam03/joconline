
const palabras = [
    { espanol: "gato", ingles: "cat", rumano: "pisica" },
    { espanol: "perro", ingles: "dog", rumano: "caine" },
    { espanol: "casa", ingles: "house", rumano: "casa" },
    { espanol: "sol", ingles: "sun", rumano: "soare" },
    { espanol: "flor", ingles: "flower", rumano: "floare" }
];

let palabraActual = palabras[Math.floor(Math.random() * palabras.length)];


let intentos = 0;


function actualizarPantalla() {
    const wordDisplay = document.getElementById("word-display");
    const idiomaActual = document.getElementById("language-selector").value;

    if (idiomaActual === "espanol") {
        wordDisplay.textContent = palabraActual.espanol.split("").join(" ");
    } else if (idiomaActual === "ingles") {
        wordDisplay.textContent = palabraActual.ingles.split("").join(" ");
    } else if (idiomaActual === "rumano") {
        wordDisplay.textContent = palabraActual.rumano.split("").join(" ");
    }
}


function comprobarTraduccion(entrada) {
    const idiomaActual = document.getElementById("language-selector").value;

    if (idiomaActual === "espanol" && entrada.toLowerCase() === palabraActual.ingles.toLowerCase()) {
        return true;
    } else if (idiomaActual === "ingles" && entrada.toLowerCase() === palabraActual.rumano.toLowerCase()) {
        return true;
    } else if (idiomaActual === "rumano" && entrada.toLowerCase() === palabraActual.espanol.toLowerCase()) {
        return true;
    }

    return false;
}


function jugar() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value;

    if (comprobarTraduccion(guess)) {
        document.getElementById("message").textContent = "¡Correcto!";
    } else {
        intentos++;
        document.getElementById("message").textContent = "Incorrecto. Intentos restantes: " + (palabras.length - intentos);
    }

  
    palabraActual = palabras[Math.floor(Math.random() * palabras.length)];

    actualizarPantalla();


    if (intentos === palabras.length) {
        document.getElementById("message").textContent = "¡Felicidades! Has completado todas las palabras.";
        guessInput.disabled = true;
    }

    guessInput.value = "";
}


document.getElementById("guess-button").addEventListener("click", jugar);


document.getElementById("language-selector").addEventListener("change", actualizarPantalla);


actualizarPantalla();
