import game from '../../main';

let platforms;

export default {
  platformsCreate: () => {
    platforms = game.add.physicsGroup();

    platforms.create(0, 180, 'platforms');
    platforms.create(150, 170, 'platforms');
    platforms.create(240, 125, 'platforms');
    platforms.create(120, 70, 'platforms');

    platforms.scale.setTo(2.5);
    platforms.setAll('body.immovable', true);
    return platforms;
  },
}
