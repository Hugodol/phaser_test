import game from '../../main';``
import Player from '../../player/Player';
import Platforms from './Platforms';
import Audio from './Audio';

let mainPlayer;
let allPlatforms;

const Intro = {
  preload: () => {
    game.stage.backgroundColor = '#85b5e1';
    game.load.image('platform', '../../graphics/box.svg');
    game.load.image('player', '../../graphics/player.png');
    game.load.audio('mainSong', '../../sounds/mainSong.mp3');
  },

  create: () => {
    // MAIN PLAYER
    mainPlayer = Player.playerCreate();
    Player.keyMapCreate();

    // PLATFORMS
    allPlatforms = Platforms.platformsCreate();

    // MUSIC & SOUND
    Audio.mainSong();

  },

  update: () => {
    game.physics.arcade.collide(mainPlayer, allPlatforms);
    Player.playerUpdate();
  },
}

export default Intro;
