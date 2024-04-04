function btn(){
    const form = document.querySelector("form");
    const cadastro = {
         ativ: form.ativ.value,
         desc: form.desc.value,
         date: form.date.value
    }
    validar(cadastro);
}

function validar(cadastro){
    if(cadastro.ativ === ""){
        alert("error")
    }
}