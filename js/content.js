const abrirModais = document.querySelectorAll(".button_abrir_modal");
const fecharModais = document.querySelectorAll(".button_fechar_modal");
const modais = document.querySelectorAll(".modal");

abrirModais.forEach(function (botao, indice) {
    botao.addEventListener("click", function () {
        modais[indice].showModal();
    });
});

fecharModais.forEach(function (botao, indice) {
    botao.addEventListener("click", function () {
        modais[indice].close();
    });
});

