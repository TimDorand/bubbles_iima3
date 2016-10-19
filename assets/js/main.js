

var game;

var widthgame = window.innerWidth;
var heightgame = window.innerHeight;

game = new Phaser.Game(widthgame, heightgame, Phaser.LANDSCAPE, '');

// game.state.add('Menu', Menu);

// Adding the Game state.
game.state.add('Game', Game);
game.state.start('Game',Game);

// game.state.start('Menu');

