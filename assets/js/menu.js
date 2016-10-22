var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        // game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        // this.add.button(150, 150, null, this.startGame, this);
        textscore = game.add.text(150, 150, "CLIQUEZ POUR COMMENCER !", textStyle_Key);
        game.stage.backgroundColor = '#eee';



    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};