let numeroDelDisplay = "";
let numeroAnterior = "";
let numerodeOperacion = 0;
let bloquear = false;

function mostrar(numero) {
    if (numeroDelDisplay === "Error") {
        numeroDelDisplay = "";
    }
    desbloquear();
    numeroDelDisplay += numero;
    document.getElementById("display").innerHTML = numeroDelDisplay;
}

function operacion(signo) {
    numeroAnterior = numeroDelDisplay;
    document.getElementById("displayTop").innerHTML = numeroAnterior + signo;
    numeroDelDisplay = "";
    numerodeOperacion = signo;
}

function igual() {
    document.getElementById("displayTop").innerHTML = "";
    let result = 0;

    if (numeroDelDisplay === "" || numeroAnterior === "") {
        numeroDelDisplay = "Error";
        document.getElementById("display").innerHTML = numeroDelDisplay;
        bloqueador();
        return;
    }

    switch (numerodeOperacion) {
        case "+":
            result = Number(numeroAnterior) + Number(numeroDelDisplay);
            break;
        case "-":
            result = Number(numeroAnterior) - Number(numeroDelDisplay);
            break;
        case "/":
            if (Number(numeroDelDisplay) == 0) {
                result = "Error";
                bloqueador();
            } else {
                result = Number(numeroAnterior) / Number(numeroDelDisplay);
            }
            break;
        case "x":
            result = Number(numeroAnterior) * Number(numeroDelDisplay);
            break;
        case "%":
            result = (Number(numeroAnterior) * Number(numeroDelDisplay)) / 100;
            break;
        default:
            result = Number(numeroDelDisplay);
    }

    numeroDelDisplay = result.toString();
    document.getElementById("display").innerHTML = numeroDelDisplay;
}

function bloqueador() {
    let botones = document.querySelectorAll('.parent .disabledd');
    botones.forEach((element) => {
        element.style.opacity = 0.15;
        element.setAttribute('disabled', 'true');
    });
    bloquear = true;
}

function desbloquear() {
    let botones = document.querySelectorAll('.parent .disabledd');
    botones.forEach((element) => {
        element.style.opacity = 1;
        element.removeAttribute('disabled');
    });
    bloquear = false;
}

function borrar() {
    desbloquear();
    numeroAnterior = "";
    numeroDelDisplay = "";
    document.getElementById("display").innerHTML = 0;
}

function borrartodo() {
    desbloquear();
    numeroDelDisplay = "";
    numeroAnterior = "";
    numerodeOperacion = 0;
    document.getElementById("displayTop").innerHTML = "";
    document.getElementById("display").innerHTML = 0;
}

function deleteLast() {
    if (numeroDelDisplay === "Error") {
        numeroDelDisplay = "";
    }
    desbloquear();
    numeroDelDisplay = numeroDelDisplay.slice(0, -1);
    document.getElementById("display").innerHTML =
        numeroDelDisplay === "" ? 0 : numeroDelDisplay;
}

function inverso() {
    if (numeroDelDisplay === "" || Number(numeroDelDisplay) === 0 || bloquear) {
        numeroDelDisplay = "Error";
        document.getElementById("display").innerHTML = numeroDelDisplay;
        bloqueador();
    } else {
        numeroDelDisplay = (1 / Number(numeroDelDisplay)).toString();
        document.getElementById("display").innerHTML = numeroDelDisplay;
    }
}

function cuadrado() {
    numeroDelDisplay = (Number(numeroDelDisplay) ** 2).toString();
    document.getElementById("display").innerHTML = numeroDelDisplay;
}

function raizCuadrada() {
    if (Number(numeroDelDisplay) < 0 || numeroDelDisplay === "") {
        numeroDelDisplay = "Error";
        document.getElementById("display").innerHTML = numeroDelDisplay;
        bloqueador();
    } else {
        numeroDelDisplay = Math.sqrt(Number(numeroDelDisplay)).toString();
        document.getElementById("display").innerHTML = numeroDelDisplay;
    }
}

function cambioSigno() {
    if (numeroDelDisplay === "" || bloquear) {
        numeroDelDisplay = "Error";
        document.getElementById("display").innerHTML = numeroDelDisplay;
        bloqueador();
    } else {
        numeroDelDisplay = (-Number(numeroDelDisplay)).toString();
        document.getElementById("display").innerHTML = numeroDelDisplay;
    }
}

function puntoDecimal() {
    if (!numeroDelDisplay.includes(".")) {
        numeroDelDisplay += numeroDelDisplay === "" ? "0." : ".";
        document.getElementById("display").innerHTML = numeroDelDisplay;
    }
}