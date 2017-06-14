import game from '../main';

let player;
let cursors;
let W;
let A;
let S;
let D;

export default {
  playerCreate: () => {
    player = game.add.sprite(80, 0, 'player');
    // player.scale.setTo(1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    // player.body.gravity.y = 500;
    return player;
  },
  keyMapCreate: () => {
    cursors = game.input.keyboard.createCursorKeys();
    W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    D = game.input.keyboard.addKey(Phaser.Keyboard.D);
  },
  playerUpdate: () => {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown) {
      player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 250;
    } else if (cursors.up.isDown) {
      player.body.velocity.y = -250;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = 250;
    }

    if (A.isDown) {
      player.body.velocity.x = -250;
    } else if (D.isDown) {
      player.body.velocity.x = 250;
    } else if (W.isDown) {
      player.body.velocity.y = -250;
    } else if (S.isDown) {
      player.body.velocity.y = 250;
    }
  },
};
