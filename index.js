import Player from "./player.js";
import { NightElf } from "./race.js";

const player1 = new Player("Eufrozina");
const player2 = new NightElf("Leokádia");
console.log(player1);
console.log(player2);

player2.usePotion();
console.log(player2);
player2.shadowMeld();
console.log(player2);

console.log("player count:" + Player.playerCount);

const players = [];
for (let i = 1; i < 11; i++) {
  players.push(new Player("name" + i));
}

console.log(players);

const lowHealthPlayers = players.filter((player) => player.health <= 20);

console.log(lowHealthPlayers);
