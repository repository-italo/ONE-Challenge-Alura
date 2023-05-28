
var mensagemInput = document.querySelector("#textEntrada");
   mensagemInput.focus();
var botao_copia = document.getElementById("copiar-texto");
botao_copia.style.display = "none";
const mostraBotao = () => {botao_copia.style.display = "flex";}
var caracter = /^[a-z\s]+$/;
const isLowerCase = (string) => caracter.test(string);

var botao_descript = document.querySelector(".botao-descriptografia");

var botao_cript = document.querySelector(".botao-criptografia");
var flag = 0;
   botao_cript.addEventListener("click", ()=>{
      for(var i = 0; i < mensagemInput.value.length; i++){
         if(isLowerCase(mensagemInput.value[i]) === false ){
      flag = 1; 
      }}
      if(flag === 0){
         criptografar();
         mostraBotao();
   
      }else{
         document.getElementById("aviso").style.color = "red";   
         flag = 0;     
      }
   });

   botao_descript.addEventListener("click", ()=>{
      for(var i = 0; i < mensagemInput.value.length; i++){
         if(isLowerCase(mensagemInput.value[i]) === false ){
      flag = 1; 
      }}
      if(flag === 0){
         descriptografar();
         mostraBotao();
      }else{
         document.getElementById("aviso").style.color = "red";        
         flag = 0;  
      }
   } )

   botao_copia.addEventListener("click", ()=>{
      if(document.getElementById("textEncript") == ""){
         alert("Primeiro insira a mensagem no campo");
      }else{
      navigator.clipboard.writeText(document.getElementById("textEncript").innerText)
      .then(()=>{
         console.log("O texto foi copiado");
      })}
   })
      
   

function criptografar(){
   var textEntrada = document.querySelector("#textEntrada").value;
   var temp = "";
   for(var i = 0; i < textEntrada.length; i++){
       temp += cript(textEntrada[i]);
       
   } semImagem();
     document.getElementById("textEncript").innerHTML = "";
     document.getElementById("textEncript").innerHTML = temp;
     
}

function semImagem(){
   document.getElementById("img-semtexto").style.display = "none";
}

   function descriptografar(){
     var textEntrada = document.querySelector("#textEntrada").value;
     var temp = "";
     for(var i = 0; i < textEntrada.length; i++){
  
         temp = descript(textEntrada);
     }
       semImagem();
       document.getElementById("textEncript").innerHTML = "";
       document.getElementById("textEncript").innerHTML = temp;

   }

   
function descript(texto){
         return texto
         .replaceAll("enter", "e")
         .replaceAll("imes", "i")
         .replaceAll("ai", "a")
         .replaceAll("ober", "o")
         .replaceAll("ufat", "u");
   }

   function cript(texto){
         return texto
         .replaceAll("e", "enter")
         .replaceAll("i", "imes")
         .replaceAll("a", "ai")
         .replaceAll("o", "ober")
         .replaceAll("u", "ufat");
      }
     
