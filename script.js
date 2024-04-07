const busca_localoStorage = localStorage.getItem("Atividade");
const Array_criar = JSON.parse(busca_localoStorage);
const section = document.querySelector("section");

Array_criar.forEach(atividade => {
    const atividadeDiv = document.createElement("div");
    atividadeDiv.classList.add("container-task", "nes-container", "is-dark", "with-title");
    atividadeDiv.innerHTML = `
        <p class="title">${atividade.ativ}</p>
        <p class="Subtitle">${atividade.desc}</p>
        <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon star is-small"></i></span>
            <span class="is-primary">Icons</span>
        </a>
        <progress class="nes-progress is-success" value="80" max="100"></progress>
        <div class="container_icons">
            <button type="button" class="nes-btn is-warning">-</button>
            <button type="button" class="nes-btn is-primary">+</button>
            <button type="button" class="nes-btn is-error">Apagar</button>
        </div>`;
    section.appendChild(atividadeDiv);
});
