let cursors;

export default (player, cursors) => {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.left.isDown && cursors.up.isDown) {
    player.body.velocity.x = -250;
    player.body.velocity.y = -250;
  } else if (cursors.up.isDown && cursors.right.isDown) {
    player.body.velocity.y = -250;
    player.body.velocity.x = 250;
  } else if (cursors.right.isDown && cursors.down.isDown) {
    player.body.velocity.x = 250;
    player.body.velocity.y = 250;
  } else if (cursors.down.isDown && cursors.left.isDown) {
    player.body.velocity.y = 250;
    player.body.velocity.x = -250;
  } else if (cursors.left.isDown) {
    player.body.velocity.x = -250;
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 250;
  } else if (cursors.up.isDown) {
    player.body.velocity.y = -250;
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 250;
  }
};
