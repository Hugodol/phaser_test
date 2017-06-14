var path = require('path');
var webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/main.js');
const BUILD_DIR = path.join(__dirname, '/');
 
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');
 
module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
    module: {
        loaders: [
            { test: /pixi.js/, loader: "script" },
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
        }
    }
}
