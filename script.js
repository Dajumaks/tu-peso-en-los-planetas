/**
 * sterling pongame 5.0 o me pongo a llorar
 */
const pesoUsuario = document.getElementById('pesoUsuario');
pesoUsuario.addEventListener("input", calcularPeso);

const planetas = document.getElementById('planetas');
planetas.addEventListener("change", cambiarImagen);


var imgContainer, pesoContainer, pesoCalculadoContainer;


var peso_final = 0;
var peso_usuario = 0;
var planetaSeleccionado = "Saturno";


const g_mercurio = 3.7;
const g_venus = 8.87;
const g_tierra = 9.807;
const g_marte = 3.721;
const g_jupiter = 24.8;
const g_saturno = 10.44;
const g_urano = 8.87;
const g_neptuno = 11.15;


function cambiarImagen() {
    planetaSeleccionado = planetas.value;
    imgContainer = document.getElementById('img-container').innerHTML = `<img id="imagen" src="img/` + planetaSeleccionado + `.png" alt="` + planetaSeleccionado + `" height="200px" width="200px">`;
    calcularPeso();
}

function calcularPeso() {

    peso_usuario = pesoUsuario.value;
    if (peso_usuario == "") {
        peso_usuario = 0.0;
    }

    switch (planetaSeleccionado) {
        case "Marte":
            peso_final = peso_usuario * g_marte / g_tierra;
            break;
        case "Mercurio":
            peso_final = peso_usuario * g_mercurio / g_tierra;
            break;
        case "Venus":
            peso_final = peso_usuario * g_venus / g_tierra;
            break;
        case "Júpiter":
            peso_final = peso_usuario * g_jupiter / g_tierra;
            break;
        case "Saturno":
            peso_final = peso_usuario * g_saturno / g_tierra;
            break;
        case "Urano":
            peso_final = peso_usuario * g_urano / g_tierra;
            break;
        case "Neptuno":
            peso_final = peso_usuario * g_neptuno / g_tierra;
            break;
    }

    pesoContainer = document.getElementById('peso-container').innerHTML = `<p id="peso">En la <strong>Tierra</strong> tu peso es de<br><strong>` + peso_usuario + `</strong> kg</p>`;
    pesoCalculadoContainer = document.getElementById('pesoCalculado-container').innerHTML = `<p id="pesoCalculado">En <strong>` + planetaSeleccionado + `</strong> tu peso sería de<br><strong>` + (peso_final).toFixed(1) + `</strong> kg</p>`;

}