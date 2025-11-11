function atualizarValor() {
    const moto = document.getElementById("moto").value;
    const valorInput= document.getElementById("valor");

    if ( moto === "fz250") valorInput.value = 23390
    else if ( moto === "r1") valorInput.value = 59382
    else valorInput.value = ""

}

function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const metodo = document.getElementById("metodo").value;
    const resultado = document.getElementById("resultado");

    if (!valor || !metodo) {
        resultado.textContent = "Por favor, preencha todos os dados!";
        resultado.style.color = "red";
        return;
    }

    let mensagem = ""
    let total = valor

    switch (metodo) {
        case "credito":
            mensagem = `Pagamento no Cartão de Crédito em até 12x sem juros de R$ ${(valor / 12).toFixed(2)} por mês.`;
            break;
        case "debito":
            total = valor * 0.9
            mensagem = `Pagamento no Cartão de Débito à vista , ganha um desconto de 9%. O valor então será R$ ${total.toFixed(2)} por mês.`;
            break;
        case "consorcio":
            mensagem = `Consórcio da Yamaha disponivel por pagamento ao Mês de no mínimo R$ 200,00.`;
            break;
        case "pix":
            total = valor * 0.9
            mensagem = `Pagamento via Pix à vista terá um desconto de 10%. Resultando em um valor de R$ ${total.toFixed(2)}.`;
            break;
        default:
            mensagem = "Selecione um método válido"

    }

    resultado.textContent = mensagem;
    resultado.style.color = "green";
}