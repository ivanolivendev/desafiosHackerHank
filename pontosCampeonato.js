let resultados = ["V", "E", "V", "E", "V", "P"];
let qtdP = 0;

for (let x of resultados) {

    if (x === "V") {
        qtdP += 3
    }
    if (x === "E") {
        qtdP++
    }
}

console.log(qtdP)