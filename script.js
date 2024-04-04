function btn(){
    const form = document.querySelector("form");
    
    const cadastro = {
         ativ: form.ativ.value,
         desc: form.desc.value,
         date: form.date.value
    }
    return validar(cadastro);
}

function validar(cadastro){
    if(cadastro.ativ === "" || cadastro.desc === "" || cadastro.date === "")){
        const label = document.querySelector("label);
        label.style.color = "red";                                   
        alert("preencha todos os campos !")
    }
     
}
