let preco = [20, 15, 8, 2, 12];
let menorPrejuizo = 99999999;
let arrayPrejuizo = [];


for (let x = 0; x < preco.length; x++) {

    for (let j = x + 1; j < preco.length; j++) {
        const compra = preco[x];
        const venda = preco[j];
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }

        }
    }
}
console.log(menorPrejuizo)