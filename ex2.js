const string = "A Maria roubou pão na casa do João";

function contarLetraA(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "a") {
            count++;
        }
    }

    return count;
}

const quantidadeDeAs = contarLetraA(string);
console.log(`A quantidade de letras 'A' na frase é: ${quantidadeDeAs}.`);