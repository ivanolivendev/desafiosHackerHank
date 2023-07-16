let notas = [100, 100, 100, 50];

let maior = notas[0];
let menor = notas[0];
let soma = 0;

for (let x = 0; x < notas.length; x++) {
    if (notas[x] > maior) {
        maior = notas[x]
    }

    if (notas[x] < menor) {
        menor = notas[x];
    }

    soma += notas[x];
}

let media = (soma - (maior + menor)) / (notas.length - 2)

console.log(media)

