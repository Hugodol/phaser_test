const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content');

let background;
let platform;
let player;
let music;
let cursors;
let jumpButton;

const mainState = {
  preload: () => {
    game.stage.backgroundColor = '#85b5e1';
    game.load.image('platform', 'graphics/box.svg');
    game.load.image('player', 'graphics/player.png');
    game.load.audio('mainSong', 'sounds/mainSong.mp3');
  },

  create: () => {
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // MAIN PLAYER
    player = game.add.sprite(80, 0, 'player');
    player.scale.setTo(0.1);

    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // PLATFORM
    platform = game.add.physicsGroup();

    platform.create(0, 180, 'platform');
    platform.create(150, 170, 'platform');
    platform.create(240, 125, 'platform');
    platform.create(120, 70, 'platform');

    platform.scale.setTo(2.5);
    platform.setAll('body.immovable', true);

    // MUSIC & SOUND
    music = game.add.audio('mainSong');
    music.volume = 0.1;
    music.loop = true;
    music.play();
  },

  update: () => {
    game.physics.arcade.collide(player, platform);

    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
      player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 250;
    }
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
  },
}

game.state.add('mainState', mainState);

game.state.start('mainState');
