let letra = 'm';
let palavras = ["mamao", "maca", "melao", "melancia", "laranja"]
let criancasPerdedoras = 0;

for (let palavra of palavras) {
    const primeiraLetra = palavra[0];

    if (primeiraLetra !== letra) {
        criancasPerdedoras++
    }
}

console.log(criancasPerdedoras)
