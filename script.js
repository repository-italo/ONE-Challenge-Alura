
var mensagemInput = document.querySelector("#textEntrada");

const isLowerCase = (string) => /^[A-Z]*$^/^/ [0-9]*$/.test(string)
var botao_descript = document.querySelector(".botao-descriptografia")
var botao_cript = document.querySelector(".botao-criptografia");
   botao_cript.addEventListener("click", ()=>{
      for(var i = 0; i < mensagemInput.value.length; i++){
         if(isLowerCase(mensagemInput.value[i]) == true ){
           criptografar();

         }else{
               document.getElementById("aviso").style.color = "red";
         }
      }
   });

   botao_descript.addEventListener("click", ()=>{
      for(var i = 0; i < mensagemInput.value.length; i++){
         if(isLowerCase(mensagemInput.value[i]) == true ){
               descriptografar();  

         }else{
               document.getElementById("aviso").style.color = "red";
         }
      }
   } )


      
   

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
     
