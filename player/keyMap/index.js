import game from '../../main';

let cursors;
let WASD = {};

export default {
  cursors: () => {
    cursors = game.input.keyboard.createCursorKeys();
    return cursors;
  },
  WASD: () => {
    WASD.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    WASD.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    WASD.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    WASD.D = game.input.keyboard.addKey(Phaser.Keyboard.D);
    return WASD;
  },
};
