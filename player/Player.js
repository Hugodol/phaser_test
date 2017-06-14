import game from '../main';

let player;
let keyMap;

export default {
  playerCreate: () => {
    player = game.add.sprite(80, 0, 'player');
    player.scale.setTo(0.1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
    return player;
  },
  keyMapCreate: () => {
    keyMap = game.input.keyboard.createCursorKeys();
  },
  playerUpdate: () => {
    player.body.velocity.x = 0;

    if (keyMap.left.isDown) {
      player.body.velocity.x = -250;
    } else if (keyMap.right.isDown) {
      player.body.velocity.x = 250;
    }
    if (keyMap.up.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
  },
};
