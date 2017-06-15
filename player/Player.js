import game from '../main';

let player;

export default {
  playerCreate: () => {
    player = game.add.sprite(80, 0, 'player');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    return player;
  },
};
