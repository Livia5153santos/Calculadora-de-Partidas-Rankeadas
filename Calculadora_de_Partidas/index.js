//Declarando a função
function calculadoraDeNivel(vitorias, derrotas) {
    //Escopo da função
    const saldoDeVitorias = vitorias - derrotas;
    let nivel;

    //Switch case para determinar o nível
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 10 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias > 20 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias > 50 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias > 80 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias > 90 && vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "Nível não determinado";
    }

    return { saldoDeVitorias, nivel };
}

// Calculando o saldo de Rankeadas:
const vitorias = 150;
const derrotas = 20;

const resultado = calculadoraDeNivel(vitorias, derrotas);

//Saída

console.log(`O Herói tem um saldo de ${resultado.saldoDeVitorias}, está no nível de ${resultado.nivel}`);
