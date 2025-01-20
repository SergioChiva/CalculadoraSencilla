let miPantalla = document.querySelector("#pantalla");
let mostrar = miPantalla.querySelector("p");
mostrar.textContent = 0;
let boton = document.querySelectorAll(".boton");
let frase = "";
let bateria = true;
let botonBateria = document.querySelector("#encendedor");

function reset() {
    location.reload();
}

botonBateria.addEventListener("click", () =>{
    if(botonBateria.textContent == "ON"){
        botonBateria.textContent = "OFF";
        botonBateria.setAttribute("style", "background-color: red")
        bateria = false;
        mostrar.textContent = "";
    }else{
        reset();
    }
})

boton.forEach(element => {
    element.addEventListener("click", () => {
    
        if(botonBateria.textContent == "ON" && frase.length <= 11){

            switch (element.textContent) {
                case "AC":
                    reset();

                case "7":
                    frase = frase + "7";
                    mostrar.textContent = frase;
                    
                    break;

                case "8":
                    frase = frase + "8"    
                    mostrar.textContent = frase;
                    break;

                case "9":
                    frase = frase + "9"    
                    mostrar.textContent = frase;
                    break;

                case "4":
                    frase = frase + "4"    
                    mostrar.textContent = frase;
                    break;
                  
                case "5":
                    frase = frase + "5"    
                    mostrar.textContent = frase;
                    break;

                case "6":
                    frase = frase + "6"    
                    mostrar.textContent = frase;
                    break;

                case "1":
                    frase = frase + "1"    
                    mostrar.textContent = frase;
                    break;  

                case "2":
                    frase = frase + "2"    
                    mostrar.textContent = frase;
                    break;

                case "3":
                    frase = frase + "3"    
                    mostrar.textContent = frase;
                    break;

                case "0":
                    if( mostrar.textContent == "0"){                 
                    }else{
                        frase = frase + "0"    
                    mostrar.textContent = frase;
                    }
                    break;    
                case".":
                    frase = frase + "."    
                    mostrar.textContent = frase;
                
                    break;

                case ("X"):
                    frase = frase + "*"    
                    mostrar.textContent = frase;
                    
                    break;
                
                case ("+"):  
                    frase = frase + "+"    
                    mostrar.textContent = frase;
                    break;

                case ("-"):  
                    frase = frase + "-"    
                    mostrar.textContent = frase;
                   
                    break;

                case ("/"):  
                    frase = frase + "/"    
                    mostrar.textContent = frase;
                    break;

                case ("="):
                    mostrar.textContent = eval(frase);
                    frase = eval(frase) + "";
                    
            }
        }else{
            if(frase.length > 11) {
                mostrar.textContent = "----¡3Rr0R!----";
            }
        }
    })
});
