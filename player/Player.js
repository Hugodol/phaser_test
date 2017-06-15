import game from '../main';

let player;
let dash;
let WASD = {};
let speed = 250;

export default {
  playerCreate: () => {
    player = game.add.sprite(80, 0, 'player');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    return player;
  },

  keyMapCreate: () => {
    dash = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    WASD.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    WASD.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    WASD.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    WASD.D = game.input.keyboard.addKey(Phaser.Keyboard.D);
  },

  playerUpdate: () => {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    // DASH WITH SPACEBAR
    if (dash.isDown) {
      speed = 1000;
    } else {
      speed = 250;
    }

    // MOVEMENT KEYS WITH WASD
    if (WASD.A.isDown && WASD.W.isDown) {
      player.body.velocity.x = -speed;
      player.body.velocity.y = -speed;
    } else if (WASD.W.isDown && WASD.D.isDown) {
      player.body.velocity.y = -speed;
      player.body.velocity.x = speed;
    } else if (WASD.D.isDown && WASD.S.isDown) {
      player.body.velocity.x = speed;
      player.body.velocity.y = speed;
    } else if (WASD.S.isDown && WASD.A.isDown) {
      player.body.velocity.y = speed;
      player.body.velocity.x = -speed;
    } else if (WASD.A.isDown) {
      player.body.velocity.x = -speed;
    } else if (WASD.D.isDown) {
      player.body.velocity.x = speed;
    } else if (WASD.W.isDown) {
      player.body.velocity.y = -speed;
    } else if (WASD.S.isDown) {
      player.body.velocity.y = speed;
    }
  },
};
