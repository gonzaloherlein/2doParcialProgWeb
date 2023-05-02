const pais = document.getElementById("pais");

const opcionesColor = document.getElementById("opciones");

const textoACambiar = document.getElementById("textoACambiar");

const colorVerde = document.querySelector(".verde");

const colorGris= document.querySelector(".gris");

const colorAmarillo = document.querySelector(".amarillo");

const paisContainer = document.getElementById("paisesContainer");



pais.addEventListener("keyup", ()=>{
    textoACambiar.innerHTML = pais.value;
});

opcionesColor.addEventListener("change", ()=>{
    if(opcionesColor.value === "rojo"){
        paisContainer.style.backgroundColor = "#FF0000";
    }else if(opcionesColor.value === "verde"){
        paisContainer.style.backgroundColor = "#008000";
    }else if(opcionesColor.value === "azul"){
        paisContainer.style.backgroundColor = "#0000FF";
    }else{
        paisContainer.style.backgroundColor = "#FFFFFF";
    }
     
});


colorVerde.addEventListener("click", ()=>{
    if(colorVerde.value === "verde"){
         textoACambiar.classList.add("verde");
         textoACambiar.classList.remove("gris");
         textoACambiar.classList.remove("amarillo");
    }
});

colorGris.addEventListener("click", ()=>{
    if(colorGris.value === "gris"){
         textoACambiar.classList.add("gris");
         textoACambiar.classList.remove("verde");
         textoACambiar.classList.remove("amarillo");
    }
});

colorAmarillo.addEventListener("click", ()=>{
    if(colorAmarillo.value === "amarillo"){
         textoACambiar.classList.add("amarillo");
         textoACambiar.classList.remove("gris");
         textoACambiar.classList.remove("verde");
    }
});

// colorGris.addEventListener("click", ()=>{
//     if(colorGris.value === "gris"){
//         textoACambiar.classList.add("gris");
//     }
// });

// colorAmarillo.addEventListener("click", ()=>{
//     if(colorAmarillo.value === "amarillo"){
//         textoACambiar.classList.add("amarillo");
//     }
// });





