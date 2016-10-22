/**
 * Created by Tim on 19/10/2016.
 */

var colonnes, lignes, largeur_ecran, hauteur_ecran,
    largeur_case, hauteur_case, diametre_bulle, diametre_bulle_interne,
    bulle_interne, nombredebulles,
    bulles, apple, vitesse_agrandissement, score, textscore, bulledestroyed,

    scoreTextValue, textStyle_Key, textStyle_Value;

var Game = {

    create : function() {

        // By setting up global variables in the create function, we initialise them on game start.
        // We need them to be globally available so that the update function can alter them.


        colonnes = 8;
        lignes = 5;

        largeur_ecran = innerWidth;
        hauteur_ecran = innerHeight;

        largeur_case = (largeur_ecran/colonnes);
        hauteur_case = (hauteur_ecran/lignes);

        if(hauteur_case > largeur_case){
            diametre_bulle = largeur_case-2;
        }else{
            diametre_bulle = hauteur_case-2;
        }
        bulles = [
            [1, 0, 0, 1, 1, 1, 0, 1],
            [0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1]
        ];
        bulle = {}; // objet bulle
        nombredebulles =0;
        bulledestroyed = 0;
        score  = 0;

        game.stage.backgroundColor = '#eee';


        console.log(largeur_ecran+" x "+hauteur_ecran);
        console.log(largeur_case+" x "+hauteur_case);
        console.log(diametre_bulle);
        for(var i = 0; i < 5; i++){

            // i = 1 = première ligne du tableau
            for(var y = 0; y < 8; y++){

                // y = 1 = premier chiffre du talbeau

                if(bulles[i][y] == 1){
                    nombredebulles = nombredebulles+1;
                    // Afficher la bulle
                    // ex: case x=2 et y=3  || i = 2, y = 3; i * largeur case, y * hauteur case
                    // score = nombredebulles;

                    this.generateBubble(i, y);
                }else{
                    // Rien afficher
                }
            }
        }

        // Add Text to top of game.
       // Speed.
        // game.add.text(500, 20, "SPEED", textStyle_Key);
        // speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

    },




    generateBubble: function(i, y) {


        // Première bulle


        var graphisme_bulle = game.add.graphics();
        graphisme_bulle.beginFill(0xabb99, 1);
        graphisme_bulle.drawCircle(-999, -999, diametre_bulle);

        var positionX = y*largeur_case;
            positionX = positionX + largeur_case/2;
        var positionY = i*hauteur_case;
            positionY = positionY + hauteur_case/2;
        console.log('x = '+y+"*"+largeur_case+"="+positionX+'|| y = '+i+"*"+hauteur_case+"="+positionY);



        var bulle = game.add.sprite(positionX, positionY, graphisme_bulle.generateTexture());
        bulle.anchor.setTo(0.5, 0.5);

        // CLIQUE
        bulle.inputEnabled = true;
        bulle.input.useHandCursor = true;
        bulle.events.onInputDown.add(cliqueBulle, this);


        // Seconde bulle

        diametre_bulle_interne = game.rnd.realInRange((diametre_bulle*0.2), (diametre_bulle*0.8));
        var graphisme_bulle_interne = game.add.graphics();
        graphisme_bulle_interne.beginFill(0xeeeeee, 1);
        graphisme_bulle_interne.drawCircle(-999, -999, diametre_bulle_interne);



        console.log('x = '+y+"*"+largeur_case+"="+positionX+'|| y = '+i+"*"+hauteur_case+"="+positionY);

        var bulle_interne = game.add.sprite(positionX, positionY, graphisme_bulle_interne.generateTexture());

        bulle_interne.anchor.setTo(0.5, 0.5);
        bulle.tint = Math.random() * 0xffffff ;

        vitesse_agrandissement = game.rnd.realInRange(5000,16000 );


        // Animation de la bulle interne
        var augmentation = (diametre_bulle/diametre_bulle_interne);
        var animate = game.add.tween(bulle_interne.scale).to({ x: augmentation, y: augmentation}, vitesse_agrandissement, Phaser.Easing.Linear.None, true)

        animate.onComplete.add(function(){

            if(bulle.exists){

                bulle.destroy();
                bulle_interne.destroy();
                bulledestroyed = bulledestroyed +1;

                if(score > 5){
                    score = score -5;
                    updateScore(score);
                    // noMoreBubbles();

                }
            }
            console.log(score);

        });


        // Score

        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#BBB", align: "center" };

        // Score.
        textscore = game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, null , textStyle_Value);



        // Action du clique sur la bulle

        function cliqueBulle(bulle){
            bulle.destroy();
            bulle_interne.destroy();
            bulledestroyed = bulledestroyed +1;
            score = score +1*(bulle_interne.width)/10;
            updateScore(score);

            console.log("Score:"+score);

        }

        function updateScore(score){
            score = Math.round(score);
            scoreTextValue.setText(score);
        }






    },



    update: function() {
        // The update function is called constantly at a high rate (somewhere around 60fps),
        // updating the game field every time.
        // We are going to leave that one empty for now.

        function noMoreBubbles(){

            console.log(bulledestroyed+' nombre de bulles= '+nombredebulles);
            // Check if the head of the snake overlaps with any part of the snake.
            if(bulledestroyed == nombredebulles){
                game.state.start('Game_Over');
                score = Math.round(score);

            }


        }
        noMoreBubbles();

    }
};