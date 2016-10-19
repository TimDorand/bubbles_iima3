# bubbles_iima3

Sujet 1: Bubbles est un jeu qui invite le joueur à cliquer sur des bulles le plus tard possible avant que la bulle n’explose, le jeu comporte 4 niveaux.
Le jeu est basé un système de points qui s’affiche à la fin: quand le joueur clique sur une bulle à temps il a des points bonus, mais si la bulle explose il perd des points.
Le joueur inscrit son pseudo, son email et son mdp avant de jouer afin d’enregistrer son meilleur score dans la base de données.
Fonctionnalités : 
Inscription/ Connexion
Génération aléatoire des bulles sur une grille avec le temps aléatoire d’explosion
Détection de la touche d’une bulle 
Système de score (bonus et malus)
Requête et gestion de la requête sur la base de donnée (ajout ou mise à jour du score)


Caractéristique techniques:

Développement front:

Pour le premier niveau: création d’un tableau de 5 par 8.
Sélection aléatoire des cases, création de bulles dans chaque case sélectionnée.
Temps d’apparition des bulles aléatoire.
Créer une bulle, ainsi qu’une autre à l’intérieur qui grossira jusqu’à atteindre la taille de la bulle initiale.
Récupérer le diamètre de la petite bulle lorsque l’utilisateur clique sur la bulle.
Ajouter le bonus de la bulle au score général.


Développement back:

Création d’une table regroupant le pseudo, l’adresse mail, le mot de passe et le top score de chaque utilisateur.
A l’inscription, envoie des informations du nouvel utilisateur en base de données.
Au login, récupération des informations des utilisateurs pour savoir si l’utilisateur existe.
A la fin de la partie, récupération du top score de l’utilisateur pour savoir si il a été battu. Si oui, remplacement de l’ancien top score par le nouveau.
Récupération des scores dans l’ordre décroissant avec les pseudos des utilisateurs qui les ont réalisé pour mettre en place un classement des top scores.

