const valorDaCompra = 100
const numeroDeParcelas = 1

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100
    const valorAPagar = valorDaCompra - desconto
    console.log(`Voce deve pagar ${valorAPagar}, pois a vista tem 10% de desconto.`)
} else {
    const valorDaParcela = valorDaCompra / numeroDeParcelas
    console.log(`Voce deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela}.`)
}