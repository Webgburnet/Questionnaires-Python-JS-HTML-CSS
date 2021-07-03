# Projet DIU EIL BLOC 1
Ce(tte) œuvre est mise à disposition selon les termes de la [Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - 
Partage dans les Mêmes Conditions 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/) .

## Description du projet
Le but de ce projet est de consolider les connaissances de la première séquence, comme la programmation Python, le versionnage
collaboratif avec Git, les tests, du Web avec HTML5/CSS et JavaScript mais aussi des notions de codage de l’information numérique.

Le projet comporte : 
 * 1 Module Python (GIFT, XML, JSON) : Création du questionnaire (réalisé par Yann Gousselot + Jerome Galet)
 * 1 Module Web (HTML, CSS, JS) : Lecture du questionnaire (réalisé par Gregoire Burnet)

## Commandes de fonctionnement

### Creation questionnaires en ligne de commande

__ ATTENTION : Le questionnaire aura la forme suivantes une fois sauvegarder dans le fichier json__

#### Pour les questions ouvertes
![/Images/questions_ouvertes.PNG](/Images/questions_ouvertes.PNG)
~~~json
{
    "questions": [
        {
            "enonce": "2+2",
            "reponses": [
                {
                    "text": "4"
                }
            ],
            "type": "ouverte"
        },
        {
            "enonce": "3*5",
            "reponses": [
                {
                    "text": "15"
                }
            ],
            "type": "ouverte"
        }
    ]
}
~~~

#### Pour les questions multiples
![/Images/questions_multiples.PNG](/Images/questions_multiples.PNG)
~~~json
{
    "questions": [
        {
            "enonce": "O\u00f9 se trouve la Tour Eiffel ?",
            "reponses": [
                {
                    "fraction": 0,
                    "text": "A Londres"
                },
                {
                    "fraction": 100,
                    "text": "A Paris"
                },
                {
                    "fraction": 0,
                    "text": "A Rome"
                }
            ],
            "type": "multiple"
        },
        {
            "enonce": "Comment s'appelle l'ordinateur dans 2001 l'odyss\u00e9e de l'espace ?",
            "reponses": [
                {
                    "fraction": 0,
                    "text": "IBM"
                },
                {
                    "fraction": 100,
                    "text": "HAL"
                },
                {
                    "fraction": 0,
                    "text": "GZK"
                },
                {
                    "fraction": 0,
                    "text": "JCN"
                }
            ],
            "type": "multiple"
        }
    ]
}
~~~

### Creation questionnaires par interface graphique
#### Sous Linux
##### Option 1 : Appeler l’interprète

    Pour Python 2: python <filename>.py
	
    Pour Python 3: python3 <filename>.py

##### Option 2 : Laisser le script appeler l'interpréteur

    Assurez-vous que la première ligne de votre fichier contient #!/usr/bin/env python .
	
    Rendez-le exécutable - chmod +x <filename>.py .
	
    Et l'exécuter comme ./<filename>.py

#### Sous Windows
Installez Python 3, et installez aussi IDLE qui fournis avec (Il s'agit d'un logiciel qui vous permettra d'écrire du code Python et de l'exécuter).

Faites Clique Droit avec le bouton de la souris sur le fichier que vous voulez lancer. Puis aller dans Python > IDLE.

Une fois l'IDLE lancer appuyer sur la touche F5 de votre Clavier. 

Ou vous pouvez aussi passer par exécuter > exécuter Module ou Run > Run Module.

#### Fonctionnement TK
L'interface graphique pour la création du questionnaire en python est la suivante :
![/Images/interface_TK.png](/Images/interface_TK.png)

Note importante : Il est toute à fait possible de melanger les questions à choix multiples et à choix ouvert au sein d'une meme questionnaire.

##### Option 1 : Questions à choix multiples
![/Images/interface_TK_multiple.png](/Images/interface_TK_multiple.png)

&#9312; A remplir par la question que vous souhaitez poser

&#9313;A remplir par les renponses que vous souhaitez mettre

&#9314;A cette endroit on indique où est la bonne reponse

&#9315;Bouton qui permet d'enregistrer la question

&#9316;Bouton qui permet d'enregistrer le questionnaire une fois que toute les questions on ete faite

Pour creer une nouvelle question repeter les operations &#9312; à &#9316;

&#9317;Bouton qui permet d'enregistrer le questionniare en entier

##### Option 2 : Questions à ouverte
![/Images/interface_TK_ouvert.png](/Images/interface_TK_ouvert.png)

&#9312;A remplir par la question que vous souhaitez poser

&#9313;A remplir par la vous souhaitez mettre

ATTENTION : l'ensemble des reponses doit etre avec la bonne orthographe et à ecrire tous en minuscule

&#9314; Bouton qui permet d'enregistrer la question

&#9315; Bouton qui permet d'enregistrer le questionnaire une fois que toute les questions on ete faite

Pour creer une nouvelle question repeter les operations &#9312; à &#9315;

&#9316; Bouton qui permet d'enregistrer le questionniare en entier

### Lancement d'un questionnaire sur la page web questionnaire

A fin de pouvoir repondre au questionnaire, nous allons nous servir des fichiers JSON créé par le Module Python.

Si vous cliquez juste sur le document html sans passer par un serveur Web, le fetch sur un fichier json local ne fonctionne pas avec tous les navigateurs et tous les OS.

Il peut notamment déclencher des erreurs CORS (requêtes cross-origin).

Il vaut mieux ouvrir le fichier 

Pour ce faire nous allons devoir émuler un server en local afin que tous fonctionne correctement et sans erreur.

#### Methode sous Linux et MacOS
- lancer un serveur Web dans le répertoire contenant vos questions en JS, par exemple avec Python : `python -m http.server`
- un serveur sera lancé sur localhost, sur le port 8000 par défaut
- le fichier web sera disponible à l'adresse http://localhost:8000/HTML/Accueil.html
- il n'y aura plus d'erreur CORS

#### Methode sous windows
- Lancer Anaconda Prompt
- Puis faire un cd vers le dossier xx\diu-eil-projet-bloc-1\Module Web
	cd xx\diu-eil-projet-bloc-1\Module Web  (avec xx etant le chemin avant)
- Puis taper la commande suivante : `python -m http.server`
- Aller sur le navigateur web de votre choix (Firefox, Chrome, Edge...)
- http://localhost:8000/HTML/Accueil.html

#### Choix du questionnaire
- Pour lancer le questionnaire simple aller sur la page : http://localhost:8000/JS/Questionnaire_simple.html
- Pour lancer le questionnaire à choix multiple aller sur la page : http://localhost:8000/JS/Questionnaire_multiple.html
- Pour lancer le questionnaire (avec les deux questionnaires) : http://localhost:8000/JS/Questionnaire.html
- Pour lancer le questionnaire (test / laboratoire / experimentation) : http://localhost:8000/JS/questions.html

## Changement des questionnaires dans le module web

Pour changer les questionniares dans les pages web, il y a deux méthodes possibles.

### 1ere Methode : Changement du nom dans le dossier JS

Il vous suffit de copier un des fichiers JSON dans le dossier JS du module Web.
De le renommer par ' questionnaire.json '

Note : S'il y a deja un fichier ' questionnaire.json ' existant, supprimez le.

### 2eme Methode : Changement du nom dans le fichier JS
Il vous suffit de changer le nom du fichier JSON que l'on souhaites charger sur la page HTML dans les fichiers suivants :
 * `Questionnaire.js`
 * `loadQuestions.js` 
 * `Questionnaire_simple.js` 
 * `Questionnaire_multiple.js`

Les lignes à editer sont à la toute fin des fichier .js :

~~~javascript
	// Pour la methode 2 du choix de selection des fichiers pour le questionnaire (cf README)
	fetch("Banque/questions.json") // A modifier par le nom du fichier JSON a charger pour le cas d'un questionnaire à choix ouvert
	.then(response => response.json())
	.then(json => affiche(json.questions));
	fetch("Banque/questions2.json") // A modifier par le nom du fichier JSON a charger pour le cas d'un questionnaire à choix multiples
	.then(response => response.json())
	.then(json => affiche(json.questions));
~~~

## Ressources

### Logiciels

Les logiciels utilisés pour le projets sont :
 * Python3 (voir ici pour les bibliotheque utilisé)
 * Anaconda
 * Notepad++
 * Firefox
 
### Sitographie
Site internet utilisé :
 * https://developer.mozilla.org/fr/
 * https://www.w3schools.com/
 * https://www.python.org/
 * ...

## Credits
 * Gregoire BURNET
 * Jerome GALET
 * Yann GOUSSELOT
 
 ![Licence CC BY NC SA 4.0](https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png)

## Remerciements
 * Ministere de l'Education Nationale
 * Rectorat de l'Academie d'Orleans-Tours
 * IUT d'Orleans
 * Lycée
