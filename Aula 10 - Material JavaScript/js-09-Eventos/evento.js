/*
document.onclick = function()
{
    alert("Você clicou!");
}
*/



window.onload = function()
{ 
    /*
    var minhaImagem = document.getElementById("blocoImagem");

    minhaImagem.onclick = function()
    {
        alert("Clicou no bloco!");
    }
    */
    
    
    
    var campoEmail = document.getElementById("email");
    
    campoEmail.onfocus = function()
    {
        if(campoEmail.value == "Seu Email")
        {
            campoEmail.value = "";
        }      
    }
    
    campoEmail.onblur = function()
    {
        if(campoEmail.value == "")
        {
            campoEmail.value = "Seu Email";
        }   
    }
    
    
}