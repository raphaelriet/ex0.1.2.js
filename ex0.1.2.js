function limiteDesc(desc) {
    if (desc > 100) {
        desc = 100;
    }
    return desc;
}

function cliente(valor, convenio, cartao) {
    if (cartao && convenio) {
        let desc = valor * 0.15;
        valor = valor - limiteDesc(desc);
        console.log('você possui desconto de 15% limitado em R$100,00')
        return valor;
    } else if (convenio || cartao) {
        let desc = valor * 0.10;
        valor = valor - limiteDesc(desc);
        console.log('você possui desconto de 10% limitado em R$100,00')
        return valor;
    }
}

const teste = cliente(1500, true, false);
console.log(teste);
