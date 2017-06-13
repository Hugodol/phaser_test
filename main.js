const game = new Phaser.Game(1680, 1050, Phaser.CANVAS, 'content');

let background;
let music;

const mainState = {
  preload: () => {
    game.load.image('background', 'graphics/background.jpg');
    game.load.audio('mainSong', 'sounds/mainSong.mp3');
  },
  create: () => {
    background = game.add.sprite(0, 0, 'background');
    music = game.add.audio('mainSong');
    music.volume = 0.1;
    music.loop = true;
    music.play();
  },
  update: () => {
  },
}

game.state.add('mainState', mainState);

game.state.start('mainState');
