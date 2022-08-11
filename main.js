function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++){
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // uma string dinamica com tamplat string   

    tecla.onclick = function () {
        tocarSom(idAudio);
    };
};