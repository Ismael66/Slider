const imagens = document.getElementsByTagName("img");
let posicaoFoto = 1;
let loop;
const botaoPauseStart = document.getElementById("pauseStart");
botaoPauseStart.onclick = function () {
    if (botaoPauseStart.value === "| |") {
        clearInterval(loop);
        botaoPauseStart.value = "▶"
    }
    else{
        loop = setInterval(trocarClasse, 3000);
        botaoPauseStart.value = "| |"
    }

}
const setas = function () {
    const setasAvancarRetornar = ["avancar", "retornar"];
    for (let i = 0; i < setasAvancarRetornar.length; i++) {
        const setaEspecifica = document.getElementById(setasAvancarRetornar[i]);
        setaEspecifica.onclick = function () {
            avancarRetornarUmaImagem(setaEspecifica.id);
        }
    }
}
const avancarRetornarUmaImagem = function (setaEspecifica) {
    if (setaEspecifica === "avancar") {
        clickBotao(posicaoFoto);
    }
    else if (setaEspecifica === "retornar") {
        clickBotao(posicaoFoto, setaEspecifica);
    }
}
const criarBotoes = function () {
    const todosBotoes = [];
    for (let i = 0; i < imagens.length; i++) {
        todosBotoes.push(`<input type="button" id="btn${i + 1}" class="botao">`);
    }
    document.getElementById("containerBotoes").innerHTML = todosBotoes.join('');
}
const adicionaClickBotoes = function () {
    for (let i = 0; i < imagens.length; i++) {
        const botao = document.getElementById(`btn${i + 1}`);
        botao.onclick = function () {
            clickBotao(i);
        }
    }
}
const clickBotao = function (i, setaEspecifica) {
    clearInterval(loop);
    if (setaEspecifica === "retornar") {
        i = (i === 1) ? imagens.length : i - 2;
        i = (i === imagens.length) ? resetar(setaEspecifica) : i;
        imagens[posicaoFoto - 1].style.display = 'none';
        document.getElementById(`btn${posicaoFoto}`).classList.remove("botaoSelecionado");
    }
    else {
        i = (i > imagens.length) ? 1 : (i < 1) ? imagens.length : i;
        imagens[posicaoFoto - 1].style.display = 'none';
        document.getElementById(`btn${posicaoFoto}`).classList.remove("botaoSelecionado");
        // imagens[i].style.display = 'block';
    }
    posicaoFoto = i;
    trocarClasse();
    loop = setInterval(trocarClasse, 3000);
}
const focarBotao = function (posicaoBotao = posicaoFoto) {
    if (posicaoBotao === 1) {
        if (document.getElementById(`btn${imagens.length}`).classList.contains("botaoSelecionado")) {
            document.getElementById(`btn${imagens.length}`).classList.remove("botaoSelecionado");
        }
    }
    else if (document.getElementById(`btn${posicaoBotao - 1}`).classList.contains("botaoSelecionado")) {
        document.getElementById(`btn${posicaoBotao - 1}`).classList.remove("botaoSelecionado");
    }
    document.getElementById(`btn${posicaoBotao}`).classList.add("botaoSelecionado");
}
const start = function () {
    setas();
    criarBotoes();
    focarBotao();
    adicionaClickBotoes();
    for (let i = 1; i < imagens.length; i++) { //Esconder imagens no inicio.
        imagens[i].style.display = 'none';
    }
    loop = setInterval(trocarClasse, 3000);
}
const trocarClasse = function () {
    if (posicaoFoto === imagens.length) {
        resetar()
        return;
    }
    imagens[((posicaoFoto === 0) ? 1 : (posicaoFoto - 1))].style.display = 'none';
    imagens[posicaoFoto].style.display = 'block';
    posicaoFoto += 1;
    focarBotao();
}
const resetar = function (setaEspecifica = "inutilizavel") {
    if (setaEspecifica === "retornar") {
        imagens[0].style.display = 'none';
        imagens[imagens.length - 1].style.display = 'block';
        focarBotao(imagens.length);
        return imagens.length - 1;
    }
    else if (setaEspecifica === "inutilizavel") {
        posicaoFoto = 1;
        imagens[0].style.display = 'block';
        imagens[imagens.length - 1].style.display = 'none';
        focarBotao();
    } 
}

start();
//     for (let i = 0; i < imagens.length; i++) {
//         bodyHtml.children[i] = "<input type ='button' id = 'imagens[i]'></input>";
//     }
// }
//     for (let i = 0; i < imagensClasses.length; i++) {
//         setInterval(function() {
//             bodyHtml.classList.remove(imagensClasses[i]);
//             bodyHtml.classList.add(imagensClasses[i + 1]);
//         }, 3000);
//     }   
// }
// setInterval(trocaClasse, 3000);
//     setTimeout(function() {
//         if (bodyHtml.classList.contains("imagemDois")) {
//             bodyHtml.classList.remove("imagemDois");
//             bodyHtml.classList.add("imagemZero");
//         }
//     }, 9000);
// }
// const trocaClasse = function () {
//     for (let i = 0; i < imagensClasses.length; i++) {
// bodyHtml.classList.remove(imagensClasses[i]);
// bodyHtml.classList.add(imagensClasses[i + 1]);
//         return;
//     }
// }
