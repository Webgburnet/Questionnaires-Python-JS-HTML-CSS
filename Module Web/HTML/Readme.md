# Readme

## Fichier JSON de questions 

Vous trouverez dans ce dossier des questions en JSON et donc un exemple de format possible, assez rudimentaire, que vous pouvez assez facilement générer en Python.

## Chargement du fichier JSON avec fetch

Le chargement du fichier de questions se fait à l'aide de la méthode `fetch`
Voir les slides de JS pour plus de détails sur cette méthode :

https://www.univ-orleans.fr/iut-orleans/informatique/intra/tuto/JS-ES-APIs/#47


Si vous cliquez juste sur le document html sans passer par un serveur Web, le fetch sur un fichier json local ne fonctionne pas avec tous les navigateurs et tous les OS. Il peut notamment déclencher des erreurs CORS (requêtes cross-origin). Il vaut mieux ouvrir le fichier 

## Solution universelle


Pour une solution plus universelle :

- lancer un serveur Web dans le répertoire contenant vos questions en JS, par exemple avec Python : `python -m http.server`
- un serveur sera lancé sur localhost, sur le port 8000 par défaut
- le fichier web sera disponible à l'adresse http://localhost:8000/questions.html
- il n'y aura plus d'erreur CORS



