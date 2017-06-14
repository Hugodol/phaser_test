import Phaser from 'phaser';
import 'p2';
import Intro from './scenes/Intro/Intro.State';

const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content');

game.state.add('Intro', Intro);

game.state.start('Intro');

export default game;
