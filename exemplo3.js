const temIngresso = true
const censura = 16
const idade = 18
const estaComOsPais = true

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar")
    } else {
        console.log("Barrada")
    }
} else {
    console.log("Barrada")
}