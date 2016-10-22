

var game;

var widthgame = window.innerWidth;
var heightgame = window.innerHeight;

game = new Phaser.Game(widthgame, heightgame, Phaser.LANDSCAPE, '');

// game.state.add('Menu', Menu);

// Adding the Game state.
game.state.add('Menu', Menu);


game.state.add('Game',Game);
game.state.start('Game');

game.state.add('Game_Over', Game_Over);

// game.state.start('Menu');

