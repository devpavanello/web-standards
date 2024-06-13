var elemento = document.getElementById("opcoesPizza");

elemento.childNodes.item(1).innerHTML = "FIAP";
elemento.childNodes.item(3).innerHTML = "Palmito";
elemento.childNodes.item(5).innerHTML = "Chocolate com morango";

var novaPizza = document.createElement("li");
elemento.appendChild(novaPizza).innerHTML = "4 queijos";

var elementoTitulo = document.getElementById("titulo");
elementoTitulo.setAttribute("align", "right");
document.write(elementoTitulo.getAttribute("align"));

