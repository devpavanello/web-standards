var b = document.getElementById("btn")
var modo = 0
b.addEventListener("click", function(){

    if(modo == 0){
        modo = 1
        document.getElementsByTagName('div')[0].style.background = 'rgba(128, 128, 128, 0.562)'
        window.document.getElementsByTagName('p')[0].style.color = 'black'
        window.document.getElementsByTagName('h1')[0].style.color = 'palevioletred'
        window.document.getElementsByTagName('h2')[0].style.color = 'palevioletred'
        //Regra Clara
    }
    else{
        modo = 0
        window.document.getElementsByTagName('div')[0].style.background = 'black'
        window.document.getElementsByTagName('p')[0].style.color = 'white'
        window.document.getElementsByTagName('h1')[0].style.color = 'white'
        window.document.getElementsByTagName('h2')[0].style.color = 'white'
        //Regra Escura
    }
})