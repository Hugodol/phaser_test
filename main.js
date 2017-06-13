const game = new Phaser.Game(1680, 1050, Phaser.CANVAS, 'content');

let background;
let player;
let music;
let cursors;
let jumpButton;

const mainState = {
  preload: () => {
    game.load.image('background', 'graphics/background.jpg');
    game.load.image('player', 'graphics/player.png');
    game.load.audio('mainSong', 'sounds/mainSong.mp3');
  },

  create: () => {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // BACKGROUND
    background = game.add.sprite(0, 0, 'background');

    // MUSIC & SOUND
    music = game.add.audio('mainSong');
    music.volume = 0.1;
    music.loop = true;
    music.play();

    // MAIN PLAYER
    player = game.add.sprite(50, 775, 'player');
    player.scale.setTo(0.3);

    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: () => {
    game.physics.arcade.collide(player);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }
  },
}

game.state.add('mainState', mainState);

game.state.start('mainState');
