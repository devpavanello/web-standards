window.onload = function() {

	document.getElementById("botao").onclick = function() 
    {
		
        // 1 Passo - Cria o objeto XMLHttpRequest
		var ajax = null;
		
		if( window.XMLHttpRequest ) 
        {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) 
        {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}
		
        // 2 Passo - Solicita a pagina de dados
		ajax.open("GET","pagina_dados.txt",true);
		ajax.send(null);
		
        // 3 Passo - Identifica mudanca de status do navegador
		ajax.onreadystatechange = function() 
        { 
			if ( ajax.readyState == 4 ) {
				
				if ( ajax.status == 200 ) 
                {
					document.getElementById("janela").innerHTML = ajax.responseText;						
				}
				
			}
		}
        
	}
}