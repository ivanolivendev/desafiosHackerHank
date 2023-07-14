let stringCorrompida = "*Canis %lupus )familiari";
let dicionarioErros = "!@#$%&*().";
let stringLimpa = [];

for (let x = 0; x < stringCorrompida.length; x++) {
    let analisaCaractere = stringCorrompida[x];
    let encontrado = false;

    for (let j = 0; j < dicionarioErros.length; j++) {
        if (dicionarioErros[j] === analisaCaractere) {
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        stringLimpa.push(analisaCaractere);
    }
}

let resultadoFinal = stringLimpa.join("");
console.log(resultadoFinal); 
