var result = 0;
var newNumber = 0;

var number = parseFloat(prompt("Digite um número:"));
    document.write("NÚMERO SELECIONADO: " + number);

function somar() {
    var newNumber = parseFloat(prompt("Digite o próximo número:"));
        result = number + newNumber;
        document.write("O resultado é: " + result);
}

function subtrair() {
    var newNumber = parseFloat(prompt("Digite o próximo número:"));
    result = number - newNumber;
    document.write("O resultado é: " + result);
}

function dividir() {
    var newNumber = parseFloat(prompt("Digite o próximo número:"));
    result = number / newNumber;
    document.write("O resultado é: " + result);
}

function multiplicar() {
    var newNumber = parseFloat(prompt("Digite o próximo número:"));
    result = number * newNumber;
    document.write("O resultado é: " + result);
} 
