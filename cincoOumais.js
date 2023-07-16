const precos = [100, 500, 100, 200, 50]
let menorPreco = precos[0];
let total = 0;

for (let x of precos) {
    if (x < menorPreco) {
        menorPreco = x
    }
}

for (let y of precos) {
    total += y;
}

if (precos.length >= 5) {
    let totalmaior = total - menorPreco;
    console.log(totalmaior)
}
else {
    console.log(total)
}