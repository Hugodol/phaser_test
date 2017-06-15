let WASD = {};

export default (player, WASD) => {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (WASD.A.isDown && WASD.W.isDown) {
    player.body.velocity.x = -250;
    player.body.velocity.y = -250;
  } else if (WASD.W.isDown && WASD.D.isDown) {
    player.body.velocity.y = -250;
    player.body.velocity.x = 250;
  } else if (WASD.D.isDown && WASD.S.isDown) {
    player.body.velocity.x = 250;
    player.body.velocity.y = 250;
  } else if (WASD.S.isDown && WASD.A.isDown) {
    player.body.velocity.y = 250;
    player.body.velocity.x = -250;
  } else if (WASD.A.isDown) {
    player.body.velocity.x = -250;
  } else if (WASD.D.isDown) {
    player.body.velocity.x = 250;
  } else if (WASD.W.isDown) {
    player.body.velocity.y = -250;
  } else if (WASD.S.isDown) {
    player.body.velocity.y = 250;
  }
};
