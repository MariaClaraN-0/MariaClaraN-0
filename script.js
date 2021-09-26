const nome = document.getElementById("nome");
const situacao = document.querySelector("#situacao");
const imagem= document.querySelector("#imagem");
const btnTexto = document.querySelector("#btn-texto");

btnTexto.addEventListener("click", function(){
    

    if(btnTexto.value == "primeiro"){
        nome.innerText = "Situação:Rainha do deboche"
        situacao.innerText = "Humor:debochada"
        imagem.src ='deboche.jpg'
        btnTexto.value="segundo"
    } else if ( btnTexto.value =="segundo"){
        nome.innerText = "Situação:Mulher exaltada"
        situacao.innerText = "Humor:exaltada"
        imagem.src ='exaltado.jpg'
        btnTexto.value="terceiro"
    }  else  {
        nome.innerText = "Situação:Nazaré cofusa"
        situacao.innerText = "Humor:confusa"
        imagem.src ='nazareconfusa.gif'
        btnTexto.value ='primeiro'
    }
    
})


