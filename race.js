import Player from "./player.js";

export class NightElf extends Player {
  shadowMeld() {
    this.visibility = 10;
  }
  exitShadowMeld() {
    this.visibility = 100;
  }
}
