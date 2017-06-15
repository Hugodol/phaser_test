import game from '../../main';
import Player from '../../player/Player';
import Platforms from './Platforms';
import Audio from './Audio';
import keyMap from '../../player/keyMap';
import movementCursors from '../../player/keyMap/movement.Cursors';
import movementWASD from '../../player/keyMap/movement.WASD';

let mainPlayer;
let allPlatforms;
let cursors;
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
    // Player.keyMapCreate();
    cursors = keyMap.cursors();
    WASD = keyMap.WASD();

    // PLATFORMS
    allPlatforms = Platforms.platformsCreate();

    // MUSIC & SOUND
    Audio.mainSong();
  },

  update: () => {
    game.physics.arcade.collide(mainPlayer, allPlatforms);
    // Player.playerUpdate();
    movementCursors(mainPlayer, cursors);
    movementWASD(mainPlayer, WASD);
  },
}

export default Intro;
