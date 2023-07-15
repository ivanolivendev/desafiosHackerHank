let imagens = [1, 2, 3, 4, 5, 6, 7];
let indice = 0;
let sequencia = ['>', '>', '>', '<', '>'];

for (let x of sequencia) {
    if (x === '>') {
        indice++
    }
    else {
        --indice
    }
    if (indice < 0) {
        indice = 6
    }
    else if (indice > 6) {
        indice = 0

    }
}
console.log(indice)





// Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.
// Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.