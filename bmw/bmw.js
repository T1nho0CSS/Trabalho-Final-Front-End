function atualizarValor() {
    const moto = document.getElementById("moto").value;
    const valorInput = document.getElementById("valor");

    if(moto === "900r") valorInput.value = 63277;
    else if (moto === "310r") valorInput.value = 35072;
    else valorInput.value = ""

}

function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const metodo = document.getElementById("metodo").value;
    const resultado = document.getElementById("resultado")

    if (!valor ||  !metodo) {
        resultado.textContent = "Por favor, preencha todos os dados! "
        resultado.style.color = "red";
        return;
    }

    let mensagem = ""
    let total = valor;

    switch (metodo) {
       case "credito":
          mensagem = `Pagamento no cartão de crédito em até 12x sem juros de R$ R${(valor / 12).toFixed(2)} por mês.`;
          break;
        case "debito":
            mensagem = `Pagamento no Cartão de Débito à vista , ganha um desconto de 9%. O valor então será R$ ${total.toFixed(2)} por mês.`;
            break;
        case "consorcio":
            mensagem = `Consórcio da BMW disponivel por pagamento ao Mês de no mínimo R$ 450,00.`;
            break;
        case "pix":
          total = valor * 0.85
          mensagem = `Pagamento via Pix à vista com 15% de desconto: R$ ${total.toFixed(2)}.`;
          break;
          default:
            mensagem = "Selecione um método válido";

    }
    resultado.textContent = mensagem;
    resultado.style.color = "green";
}