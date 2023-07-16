let primeiraLetra = "a";
let segundaLetra = "v";
let palavras = ["ab1", "ab2", "ab3"];
let existe = 0;


for (let x = 0; x < palavras.length; x++) {

    for (let y = 0; y < palavras[x].length; y++) {

        if (palavras[x][0] === primeiraLetra && palavras[x][1] === segundaLetra) {
            console.log(palavras[x])
            ++existe;
            break;
        }

    }

}
if (existe === 0) {
    console.log("NENHUMA")
}

