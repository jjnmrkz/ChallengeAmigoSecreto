/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = [];
const nombre = "";

function agregarAmigo() {
    
    let nombre = document.getElementById('amigo').value.trim();

    //Validar que se ingrese un nombre
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Validar que no se ingrese un nombre similar
    if (noAmigosIguales(nombre)) {
        alert("Ya existe este amigo");
        return;
    }

    //Agregar amigo al Array
    amigos.push(nombre);
    console.log(amigos);
    console.log(nombre);
    //Limpiar texto escrito
    limpiarCaja();
    //Mostrar amigo añadido
    mostrarAmigoLista();
    
}

function mostrarAmigoLista(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; //Limpiar lista antes de volver a pintarla

    for (let i=0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function noAmigosIguales(elemento) {
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === elemento.toLowerCase()) {
            return true; //ya existe
        }
    }
    return false //no existe
}

function sortearAmigo (){
    if(amigos.length<3){
        alert("Ingresa al menos 3 amigos para sortear tu amigo secreto");
        return;
    }else{
        let amigoSecreto = Math.floor(Math.random()*amigos.length);
        const nombreSecreto = amigos[amigoSecreto];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: <strong>${nombreSecreto}</strong>`;
    }

    amigos = [];
    mostrarAmigoLista(); //Limpiar la Lista
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
