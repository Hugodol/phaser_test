import game from '../../main';

let mainSong;

export default {
  mainSong: () => {
    mainSong = game.add.audio('mainSong');
    mainSong.volume = 0.1;
    mainSong.loop = true;
    mainSong.play();
  },
};
