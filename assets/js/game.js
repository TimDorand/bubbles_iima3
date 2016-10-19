/**
 * Created by Tim on 19/10/2016.
 */

var colonnes, lignes, largeur_ecran, hauteur_ecran,
    largeur_case, hauteur_case, diametre_bulle,
    bulles, apple, temps_explosition, distance_apparition, score,

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
        temps_explosition = {};
        distance_apparition = {};
        score = 0;
        bulle = {}; // objet bulle

        game.stage.backgroundColor = '#eee';


        console.log(largeur_ecran+" x "+hauteur_ecran);
        console.log(largeur_case+" x "+hauteur_case);
        console.log(diametre_bulle);
        for(var i = 0; i < 5; i++){

            // i = 1 = première ligne du tableau
            for(var y = 0; y < 8; y++){

                // y = 1 = premier chiffre du talbeau

                if(bulles[i][y] == 1){
                    // Afficher la bulle
                    // ex: case x=2 et y=3  || i = 2, y = 3; i * largeur case, y * hauteur case

                    this.generateBubble(i, y);
                }else{
                    // Rien afficher
                }
            }
        }

        // Add Text to top of game.
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // Score.
        game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
        // Speed.
        // game.add.text(500, 20, "SPEED", textStyle_Key);
        // speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

    },



    update: function() {
        // The update function is called constantly at a high rate (somewhere around 60fps),
        // updating the game field every time.
        // We are going to leave that one empty for now.
    },


    generateBubble: function(i, y) {

        var graphisme_bulle = game.add.graphics();
        graphisme_bulle.beginFill(0xabb99, 1);
        graphisme_bulle.drawCircle(-999, -999, diametre_bulle);

        var positionX = y*largeur_case;
        if(positionX == 0){
            positionX = positionX + 3;
        }
        var positionY = i*hauteur_case;

        if(positionY == 0){
            positionY = positionY + 3;
        }
        console.log('x = '+y+"*"+largeur_case+"="+positionX+'|| y = '+i+"*"+hauteur_case+"="+positionY);

        bulle = game.add.sprite(positionX, positionY, graphisme_bulle.generateTexture());


    }


};