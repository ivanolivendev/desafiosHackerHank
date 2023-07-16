let palavra = "kkkk"
let palpite = "a"
let qtd = 0;

for (let x = 0; x < palavra.length; x++) {
    if (palavra[x] === palpite) {
        qtd++
    }
}

console.log(qtd)