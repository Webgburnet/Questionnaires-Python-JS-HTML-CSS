# Module web

A fin de pouvoir repondre au questionnaire, nous allons nous servir des fichiers JSON créé par le Module Python.

## Changement des questionnaires

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
	
## TODO
 - [ ] Choix du fichier json à mettre dans la page web (base de donnée...)
 - [x] Affichage su score en propre et clair sur la page web
   - [x] par exemple sous le bouton envoyé
 - [x] Affichage de la solution à la question
   - [x] à faire sous le bouton envoyé
 - [x] Code couleur pour réponse juste (vert) ou fausse (rouge)
 - [x] Nombre de points par question + affichage associé
 - [x] Verifier le calcul du score (erreur actuellement)
