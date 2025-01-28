// Desafio DIO - Calculadora de partidas rankeadas

let playerResults = calc(123, 38)
let nivel

switch(true) {
    case playerResults <= 10:
        nivel = "Ferro ⚙️";
        break;
    case playerResults >= 11 && playerResults <= 20:
        nivel = "Bronze 🥉";
        break;
    case playerResults >= 21 && playerResults <= 50:
        nivel = "Prata 🥈";
        break;
    case playerResults >= 51 && playerResults <= 80:
        nivel = "Ouro 🥇";
        break;
    case playerResults >= 81 && playerResults <= 90:
        nivel = "Diamante 💎";
        break;
    case playerResults >= 91 && playerResults <= 100:
        nivel = "Lendário 🦄";
        break;
    case playerResults >= 101:
        nivel = "Imortal ⚰️";
        break;
    default:
        nivel = "Nível não encontrado! ❓";
}

console.log("O Herói tem de saldo de ", playerResults, "vitórias e está no nível de", nivel)

function calc(wins, loses){
    let media = wins - loses
    return media
}