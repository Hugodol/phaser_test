import game from '../../main';
import Player from '../../player/Player';
import Platforms from './Platforms';
import Audio from './Audio';
import keyMap from '../../player/keyMap';
import movementWASD from '../../player/keyMap/movement.WASD';

let mainPlayer;
let allPlatforms;
let WASD;

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
    WASD = keyMap.WASD();

    // PLATFORMS
    allPlatforms = Platforms.platformsCreate();

    // MUSIC & SOUND
    Audio.mainSong();
  },

  update: () => {
    game.physics.arcade.collide(mainPlayer, allPlatforms);
    movementWASD(mainPlayer, WASD);
  },
}

export default Intro;
