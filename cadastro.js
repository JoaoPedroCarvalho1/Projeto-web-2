let Array_Ativ = [];
function btn() {
    const form = document.querySelector("form");

    const cadastro = {
        ativ: form.ativ.value,
        desc: form.desc.value,
        date: form.date.value
    }
    return validar(cadastro);
}

function validar(cadastro) {
    if (cadastro.ativ === "" || cadastro.desc === "" || cadastro.date === "") {
        alert("preencha todos os campos !")
    } else {
            console.log(Array_Ativ.length)
            const cadastro_atividade = new atividade(cadastro.ativ, cadastro.desc, cadastro.date)
            Array_Ativ.push(cadastro_atividade);
            const Array_Json = JSON.stringify(Array_Ativ);
            console.log(Array_Json);
            localStorage.setItem("Atividade", Array_Json);
    }
}

class atividade {
    constructor(ativ, desc, date) {
        this.ativ = ativ;
        this.desc = desc;
        this.date = date;
    }
    getAtiv() {
        return this.ativ;
    }
    getDesc() {
        return this.desc;
    }
    getDate() {
        return this.date;
    }
}
