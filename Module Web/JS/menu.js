//fichier javascript gerant la barre de menu,
//Generation des lien hypertext vers les pages du menu

//menus permet de stocker l'ensembles des pages 
//en indicant au se situe la page grace au mot "dossier" 
//et le nom de la page avec le mot "lien"
const menus = [{"dossier":'HTML',"lien":'Objectifs'}, 
			   {"dossier":'HTML',"lien":'Fonctionnement'},
			   {"dossier":'JS',"lien":'Questionnaire'},
			   //{"dossier":'JS',"lien":'Questionnaire_simple'},
			   //{"dossier":'JS',"lien":'Questionnaire_multiple'},
			   {"dossier":'HTML',"lien":'Ressources'},
			   {"dossier":'HTML',"lien":'Credits'},
			   {"dossier":'HTML',"lien":'Remerciements'}
];
//console.log(menus);

let menu = document.createElement("menu");
let ul = document.createElement("ul");

//generation par une boucle de chaque lien contenu dans la matrice menus
for (let i=0 ; i<menus.length ; i++)
{
	let li = document.createElement("li");
	let titre = document.createElement("h2");
	let a = document.createElement("a");
	let decomposition_menus = menus[i];
	//console.log(decomposition_menus);
	let dossiers = decomposition_menus['dossier'];
	let liens = decomposition_menus['lien'];
	let texte = document.createTextNode(liens);
	a.setAttribute('href',"../"+dossiers+"/"+ liens +".html"+"");
	a.appendChild(texte);
	titre.appendChild(a);
	li.appendChild(titre);
	ul.appendChild(li);
	menu.appendChild(ul);
	document.body.appendChild(menu);
}