export default class Player {
  visibility = 100;
  static playerCount = 0;

  constructor(name) {
    this.health = Math.round(Math.random() * 100);
    this.name = name;
    console.log("instance created");
    Player.playerCount += 1;
  }

  usePotion() {
    this.health += 50;
  }
}
