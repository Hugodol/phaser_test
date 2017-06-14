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
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
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

    // MOVEMENT W/ WASD KEYS
    if (A.isDown && W.isDown) {
      player.body.velocity.x = -250;
      player.body.velocity.y = -250;
    } else if (W.isDown && D.isDown) {
      player.body.velocity.y = -250;
      player.body.velocity.x = 250;
    } else if (D.isDown && S.isDown) {
      player.body.velocity.x = 250;
      player.body.velocity.y = 250;
    } else if (S.isDown && A.isDown) {
      player.body.velocity.y = 250;
      player.body.velocity.x = -250;
    } else if (A.isDown) {
      player.body.velocity.x = -250;
    } else if (D.isDown) {
      player.body.velocity.x = 250;
    } else if (W.isDown) {
      player.body.velocity.y = -250;
    } else if (S.isDown) {
      player.body.velocity.y = 250;
    }

    // MOVEMENT W/ CURSORS KEYS
    if (cursors.left.isDown && cursors.up.isDown) {
      player.body.velocity.x = -250;
      player.body.velocity.y = -250;
    } else if (cursors.up.isDown && cursors.right.isDown) {
      player.body.velocity.y = -250;
      player.body.velocity.x = 250;
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.body.velocity.x = 250;
      player.body.velocity.y = 250;
    } else if (cursors.down.isDown && cursors.left.isDown) {
      player.body.velocity.y = 250;
      player.body.velocity.x = -250;
    } else if (cursors.left.isDown) {
      player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 250;
    } else if (cursors.up.isDown) {
      player.body.velocity.y = -250;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = 250;
    }
  },
};
