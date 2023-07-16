let disparos = [0, 50, 90, 80, 100, 80, 40];
let disparosValidos = 0;

for (let x of disparos) {
    if (x > 70) {
        disparosValidos++
    }
}

if (disparosValidos >= 4) {
    console.log(disparosValidos)
} else {
    console.log("ELIMINADO")
}