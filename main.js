let resultado = 0;
let miPantalla = document.querySelector("#pantalla");
let mostrar = miPantalla.querySelector("p");
mostrar.textContent = 0;
let boton = document.querySelectorAll(".boton");
let frase = "";
let num1;
let num2;
let operador = false;
let Soperador = ""; 
let bateria = true;
let botonBateria = document.querySelector("#encendedor");
let reinicio;
let cont = 0;

botonBateria.addEventListener("click", () =>{
    if(botonBateria.textContent == "ON"){
        botonBateria.textContent = "OFF";
        botonBateria.setAttribute("style", "background-color: red")
        bateria = false;
        mostrar.textContent = "";
    }else{
        location.reload();
    }
})

boton.forEach(element => {
    element.addEventListener("click", () => {
    
        if(bateria == true && frase.length <= 11){

            switch (element.textContent) {
                case "7":
                    
                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "7";
                    mostrar.textContent = frase;

                    

                    if (operador == true) {
                        num2 = Number(frase);
                                  
                    }    

                    
                    break;

                case "8":
                    
                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "8";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                       
                    }    
                    break;

                case "9":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "9";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                              
                    }    
                    break;

                case "4":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "4";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                          
                    }    
                    break;

                case "5":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "5";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                           
                    }    
                    break;

                case "6":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "6";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                          
                    }    
                    break;

                case "1":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "1";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                             
                    }    
                    break;    

                case "2":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "2";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                                
                    }    
                    break;

                case "3":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + "3";
                    mostrar.textContent = frase;

                    if (num1 != null ) {
                        num2 = Number(frase);
                               
                    }    
                    break;

                case "0":

                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    if( mostrar.textContent == "0"){
                        /* No hagas nada xd */                 
                        }else{
                        frase = frase + "0";
                        mostrar.textContent = frase;
                        }
                    if (num1 != null ) {
                        num2 = Number(frase);      
                    }         
                    break;    
                case".":
                    if(reinicio == true){
                        num1 = null;
                        num2 = null;
                        resultado = 0;
                        Soperador = null
                        operador = false;
                        frase = "";
                        reinicio = false;
                    }

                    frase = frase + ".";
                    mostrar.textContent = frase;

                if (num1 != null ) {
                    num2 = Number(frase);
                           
                }    
                break;
                case ("X"):
                    if (mostrar.textContent == resultado) {
                        num1 = resultado;
                    }    

                    if(num1!=resultado){
                        num1 = Number(frase)
                        frase = "";
                        Soperador = "X";
                        operador = true;
                    }else{
                        num2 = Number(frase);
                        frase = "";
                        Soperador = "X";
                        operador = true;
                    }
                    reinicio = false;
                    break;
                
                case ("+"):  
                    if (mostrar.textContent == resultado) {
                        num1 = resultado;
                    }
                
                    if(num1 != resultado){
                        num1 = Number(frase);
                        frase = "";
                        Soperador = "+";
                        operador = true;
                    }else{
                        num2 = Number(frase);
                        frase = "";
                        Soperador = "+";
                        operador = true;
                    }
                    
                    reinicio = false;
                    break;

                case ("-"):  
                    if (mostrar.textContent == resultado) {
                        num1 = resultado;
                    }    

                    if(num1!=resultado){
                        num1 = Number(frase)
                        frase = "";
                        Soperador = "-";
                        operador = true;
                    }else{
                        num2 = Number(frase)
                        frase = "";
                        Soperador = "-";
                        operador = true;
                    }
                    reinicio = false;
                   
                    break;

                case ("/"):  
                    if (mostrar.textContent == resultado) {
                        num1 = resultado;
                    }    

                    if(num1!=resultado){
                        num1 = Number(frase)
                        frase = "";
                        Soperador = "/";
                        operador = true;
                    }else{
                        num2 = Number(frase)
                        frase = "";
                        Soperador = "/";
                        operador = true;
                    }
                    reinicio = false;
                    
                    break;

                case ("="):
                    
                    if (Soperador == "X") {
                        resultado = num1 * num2;
                        num1 = resultado;
                        operador = false;
                        Soperador = null;
                        cont = 0;
                    }
                    if (Soperador == "+") {
                        resultado = num1 + num2;
                        num1 = resultado;
                        operador = false;
                        Soperador = null;
                        cont = 0;
                    }
                    if (Soperador == "-") {
                        resultado = num1 - num2;
                        num1 = resultado;
                        operador = false;
                        Soperador = null;
                        cont = 0;
                    }
                    if (Soperador == "/") {
                        resultado = num1 / num2;
                        resultado = resultado.toFixed(2);                            
                        num1 = parseFloat(resultado);
                        resultado = num1;
                        operador = false;
                        Soperador = null;
                        cont = 0;
                    }
                
                    if (num2 == null) {
                        
                    }else{
                        mostrar.textContent = resultado;
                    }
                    reinicio = true;
                    break;
            }
        }else{
            if(frase.length > 11) {
                mostrar.textContent = "----¡3Rr0R!----";
            }
        }
        
        if(resultado.toString().length > 12){
            mostrar.textContent = "----¡3Rr0R!----";
        }

        if (element.textContent == "AC" && botonBateria.textContent == "ON") {
            num1 = null;
            num2 = null;
            resultado = 0;
            Soperador = null
            operador = false;
            frase = "";
            mostrar.textContent = 0;
        }

    })
});