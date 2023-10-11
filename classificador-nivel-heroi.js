// Capturar o nome e a quantidade de experiência do herói
const nome = prompt("Digite o nome do herói:"); // Usando o método `prompt` para entrada do nome
const xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:")); // Usando `parseInt` para converter a entrada em um número inteiro

// Utilizar uma estrutura de decisão para determinar o nível do herói
let nivel;

if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibir a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
