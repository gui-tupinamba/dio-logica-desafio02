// Objetivo:
//  Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//    Se vitórias for menor do que 10 = Ferro
//    Se vitórias for entre 11 e 20 = Bronze
//    Se vitórias for entre 21 e 50 = Prata
//    Se vitórias for entre 51 e 80 = Ouro
//    Se vitórias for entre 81 e 90 = Diamante
//    Se vitórias for entre 91 e 100= Lendário
//    Se vitórias for maior ou igual a 101 = Imortal


// Função que calcula o saldo de vitórias e indica o nível do Herói:
function calcularNivel(vitorias, derrotas) {
    // Variavéis:
    let saldoVitorias = vitorias - derrotas //Aqui o calculo descobre o saldo de vitórias do Herói.
    let nivel = "" //Variável em branco para o nível do herói.
    
    // Estrutura de Decisões:
    if (saldoVitorias <= 10){ //Verifica se o herói tem um saldo menor ou igual a 10.
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) { //Verifica se o herói tem um saldo entre 11 e 20.
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) { //Verifica se o herói tem um saldo entre 21 e 50.
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) { //Verifica se o herói tem um saldo entre 51 e 80.
        nivel = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) { //Verifica se o herói tem um saldo entre 81 e 90.
        nivel = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) { //Verifica se o herói tem um saldo entre 91 e 100.
        nivel = "Lendário"
    } else { //Pela lógica, ao não passar por nenhuma das condições acima, o herói tem mais de 100 de saldo e aqui é executado.
        nivel = "Imortal"
    }

    // Variável
    let frase = ("O Herói tem um saldo de vitórias de " + saldoVitorias + " e está no nível " + nivel + ".") //Frase usada para exibir o resultado do saldo e o nível do herói.
    return frase // Retorna o valor a função. Aqui está retornando a variável...
}

console.log(calcularNivel(100,20)) //E por fim, aqui o algoritmo exibe o resultado...