const preguntas = document.querySelectorAll(".question");
const respuetas= document.querySelectorAll(".answer");
console.log(preguntas);
preguntas.forEach((element,i )=> {
    element.addEventListener("click", ()=>{console.log("click"+i)
    respuetas.forEach((element)=>{
        element.classList.add("borra")

    })
    if(element.classList.contains("activo")){
        element.classList.remove("activo")
        respuetas[i].classList.add("borra")
    }else{
        preguntas.forEach(element=>{
            element.classList.remove("activo")
        })
        respuetas[i].classList.remove("borra");
        element.classList.add("activo")
    }
});
});
