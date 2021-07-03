//Fonction qui sert à inserer une nouvelle question à choix ouvert, utilisation pour se faire d'un input de type text
function insere_nouvelle_question_ouverte(question,i){
	const formulaire = document.getElementById('quest');
	const div = document.createElement('div');
	const legend = document.createElement('legend');
	legend.setAttribute('for',"O" +i);
	const enonce = document.createTextNode(question['enonce']);
	const point = document.createTextNode(" (1 points)");
	legend.appendChild(enonce);
	legend.appendChild(point);
	div.appendChild(legend);
	formulaire.appendChild(div);
	input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', i);
	div.appendChild(input);
}

//Fonction qui sert à inserer une nouvelle question à choix multiple, utilisation pour se faire d'un input de type checkbox
//Pour le moment ne fonction que avec une seule reponse
function insere_nouvelle_question_multiple(question,i){
	
	const reponses = question['reponses'];
	//console.log("Affichage du JSON en brute : \n " + question); //Verification de la bonne transmission du dictionnaire de la question, de ses reponses et de ses fractions
	//console.log(reponses); //Controle de la liste de liste des réponse de la question (enonce)
	//console.log(reponses[0,0]); //Valeur de test pour 0, A Londres ou 0, IBM
	//console.log(reponses.length); // Longueur de la listes des réponse
	
	const formulaire = document.getElementById('quest');
	const div = document.createElement('div');
	const legend = document.createElement('legend');
	legend.setAttribute('for', "M"+i);
	const enonce = document.createTextNode(question['enonce']);
	//console.log(enonce); // Contrôle de l’écriture de la question
	legend.appendChild(enonce);
	div.appendChild(legend);
	formulaire.appendChild(div);
	
	//Affichage du nombre de point pour chaque question
	let score = 0;
	for (let j=0 ; j<reponses.length;j++)
	{
		//console.log(reponses[0,j]); //Verif à supprimer
		const choix = reponses['fraction',j];
		//console.log(choix); //Verification des données contenue dans la une des reponses possible de la question
		const fractions = choix['fraction']
		//console.log(fractions); //Verification du bon choix de la fraction
		if (fractions > 0)
		{
			score = fractions;
			const point = document.createTextNode(" (" + score + " points)");
			legend.appendChild(point)
			div.appendChild(legend);
			formulaire.appendChild(div);
		}		
	}
	
	//Affichage des reponses sous la forme de checkbox
	for (let j=0 ; j<reponses.length;j++)
	{
		//console.log(reponses[0,j]);
		const choix = reponses['fraction',j];
		//console.log(choix); //Verification des données contenue dans la une des reponses possible de la question
		const fractions = choix['fraction']
		//console.log(fractions); //Verification du bon choix de la fraction
		const texts = choix['text']
		//console.log(texts); //Verification du bon choix de la reponse
		const result = document.createTextNode(texts);
		//console.log(result);
		input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('id', "D"+i+j);
		input.setAttribute('value', fractions);
		div.appendChild(input);
		const span = document.createElement('span');
		//span.setAttribute('id',i+j);
		//span.setAttribute('value', texts);
		span.appendChild(result);
		div.appendChild(span);
	}
}

//Affichage du type de question dans le document HTML + du bouton envoyé les reponses pour obtenir le score
function affiche(questions){
	const formulaire = document.getElementById('quest');
	const div = document.createElement('div');
	const legend = document.createElement('legend');
	legend.setAttribute('for', "questionnaire");
	const h3 = document.createElement('h3');
	const text_correction = document.createTextNode("Questionnaire");
	h3.appendChild(text_correction);
	legend.appendChild(h3);
	div.appendChild(legend);
	formulaire.appendChild(div);
	
	//Affichage des questions par ordre de lecture dans le fichier JSON
	for (let i=0;i<questions.length;i++)
	{
		switch (questions[i]['type'])
		{
			case 'ouverte':
			{
				insere_nouvelle_question_ouverte(questions[i],i+"");
				break;
			}
			case 'multiple':
			{
				insere_nouvelle_question_multiple(questions[i],i+"");
				break;
			}
			default:
			{
				console.log('Désolé, type ' + questions['type']  + 'inconnu !');
			}
		}
	}
	
	//Creation de l'element bouton d'envoie des réponses
	const bouton = document.createElement('input');
	bouton.setAttribute('type', 'button');
	bouton.setAttribute('value', 'Envoyer réponses');
	bouton.onclick = function()
	{
		score(questions);
	}
	formulaire.appendChild(bouton);
}

//Afficahge du score des questions en fonction de leur type à savoir ouvert ou multi
function score(questions){
	const formulaire = document.getElementById('quest');
	const div = document.createElement('div');
	const legend = document.createElement('legend');
	legend.setAttribute('for', "reponse");
	const h3 = document.createElement('h3');
	const text_correction = document.createTextNode("Correction");
	h3.appendChild(text_correction);
	legend.appendChild(h3);
	div.appendChild(legend);
	formulaire.appendChild(div);
	
	let total = 0;
	let note_max = 0;
	for (let i=0;i<questions.length;i++)
	{
		switch (questions[i]['type'])
		{
			case 'ouverte':
			{
				const reponse_utilisateur = document.getElementById(i+"").value;
				const reponse_affi = document.createTextNode(" Vous avez répondu " + reponse_utilisateur + ". ");
				//console.log(reponse_utilisateur);
				//console.log(questions[i]['reponses'][0]['text']);
				const correction_q = document.createTextNode(questions[i]['enonce']+" ");
				const p1 = document.createElement('p');
				const correction_r = document.createTextNode("La bonne réponse était "+questions[i]['reponses'][0]['text']+ ". ");
				const span1 = document.createElement('span');
				const span2 = document.createElement('span');
				const faux1 = document.createTextNode(" C'est Faux.");
				const vrai1 = document.createTextNode(" C'est Juste. ");
				const point1 = document.createTextNode(" / 1 points. ");
				
				if (questions[i]['reponses'][0]['text'] == reponse_utilisateur)
				{
					console.log("La reponse de l'utilisateur est "+ reponse_utilisateur);
					total += 1;
					note_max += 1;
					span2.setAttribute('class', "Juste");
					span1.setAttribute('class', "Juste");
					span1.appendChild(document.createTextNode("1"));
					span1.appendChild(point1);
					span1.appendChild(vrai1);
				}
				else
				{
					note_max +=1;
					span2.setAttribute('class', "Barre");
					span1.setAttribute('class', "Faux");
					span1.appendChild(document.createTextNode("0"));
					span1.appendChild(point1);
					span1.appendChild(faux1);
				}
				
				//Affichage de la Correction				
				//Affichage de la question pour la correction
				p1.appendChild(correction_q);
				legend.appendChild(p1);
				div.appendChild(legend);
				// const correction_r = document.createTextNode(questions[i]['reponses'][0]['text']);
				// const span1 = document.createElement('span');
				// span1.setAttribute('class', "C");
				
				//Affichage de la bonne reponse (corrigé)
				span1.appendChild(correction_r);
				p1.appendChild(span1);
				legend.appendChild(p1);
				div.appendChild(legend);
				
				//Affichage de la mauvaise reponse barré
				span2.appendChild(reponse_affi);
				p1.appendChild(span2);
				legend.appendChild(p1);
				div.appendChild(legend);
				
				formulaire.appendChild(div);
				//console.log(total);   
				//console.log(note_max);
				break;
			}
			case 'multiple':
			{
			// todo
				let bonne_reponse="";
				let partiel_reponse="";
				let question_choix =""
				let fractions = 0;
				let compteurs = 0;
				let etat_couleur = 0; // 3  etat possible : 0 Rouge (faux) ; 1 Vert (Juste) ; 2 Orange (Partiellement juste)
				const span3 = document.createElement('span');
				const span4 = document.createElement('span');
				const span5 = document.createElement('span');
				const faux2 = document.createTextNode(" C'est Faux. ");
				const vrai2 = document.createTextNode(" C'est Juste. ");
				const partiel2 = document.createTextNode(" C'est partiellement Juste. ");
				
				for(let j=0 ; j<questions[i]['reponses'].length ; j++)
				{
					const reponses_utilisateur = document.getElementById("D"+i+j+"").value;
					//console.log(reponses_utilisateur); //Verification d'ID des valeurs des reponses des check box pour le choix multiple
					//console.log(questions[i]['reponses'][j]['fraction']); //Verification des valeurs des reponses pour le choix multiple
					//console.log(questions[i]['reponses'][j]['fraction','text']); //Verification d'ID des text des reponses des check box pour le choix multiple
					const validation = document.getElementById("D"+i+j+"").checked;
					//console.log(validation); //Verification du bon fonctionnement de la coche de la checkbox

					if(validation == true && reponses_utilisateur==100)
					{
						fractions = 1;
						partiel_reponse += questions[i]['reponses'][j]['fraction','text']+ " ; " ;
						if (etat_couleur==0)
						{
							etat_couleur = 1;
						}
					}
					else if(validation == true && reponses_utilisateur==0)
					{
						compteurs +=1
						console.log(questions[i]['reponses'][j]['fraction','text']);
						partiel_reponse += questions[i]['reponses'][j]['fraction','text']+ " ; " ;
						console.log(partiel_reponse);
						etat_couleur = 2;
					}
					//console.log("Etat couleur"+etat_couleur);
					note_max +=(questions[i]['reponses'][j]['fraction']);
					
					//Affichage de la bonne réponse pour une question à choix ouvert
					if(questions[i]['reponses'][j]['fraction']==100){
						if (etat_couleur==0)
						{
							span5.setAttribute('class', "Faux");
							span4.setAttribute('class', "Barre");
							span3.setAttribute('class', "Faux");
							span3.appendChild(faux2);
							console.log("Class Faux");
						}
						else if(etat_couleur==1)
						{
							span5.setAttribute('class', "Juste");
							span4.setAttribute('class', "Juste");
							span3.setAttribute('class', "Juste");
							span3.appendChild(vrai2);
							console.log("Class Juste");
						}
						else if (etat_couleur==2 && fractions==1)
						{
							span5.setAttribute('class', "Partiel");
							span4.setAttribute('class', "Partiel");
							span3.setAttribute('class', "Partiel");
							span3.appendChild(partiel2);
							console.log("Class Partiel");
						}
						else
						{
							span5.setAttribute('class', "Error");
							span4.setAttribute('class', "Barre");
							span3.setAttribute('class', "Error");
							span3.appendChild(faux2);
							console.log("Class Error");
						}
						bonne_reponse =questions[i]['reponses'][j]['text'];
						console.log("La bonne reponse est " + bonne_reponse);
						//console.log(questions[i]['reponses'][j]['fraction']);
						question_choix = questions[i]['enonce'] ;
					}
				}
				
				//Affichage de la question pour la correction
				const corrections_q = document.createTextNode(question_choix + " ");
				const p2 = document.createElement('p');
				p2.appendChild(corrections_q);
				legend.appendChild(p2);
				div.appendChild(legend);
				
				//Affichage de la bonne reponse (corrigé)
				const corrections_r = document.createTextNode("La bonne réponse était " +bonne_reponse+". ");
				span3.appendChild(corrections_r);
				p2.appendChild(span3);
				legend.appendChild(p2);
				div.appendChild(legend);
				
				//Affichage de la mauvaise reponse barré
				const reponses_affi = document.createTextNode(" Vous avez répondu " + partiel_reponse + ". ");
				span4.appendChild(reponses_affi);
				p2.appendChild(span4);
				legend.appendChild(p2);
				div.appendChild(legend);
				
				formulaire.appendChild(div);
					
				let nbre_point_question=0;
				if(fractions==0 && compteurs==0)
				{
					total+=0;
					nbre_point_question=0;
				}
				else if (fractions==1 && compteurs==0)
				{
					total +=(100/fractions);
					nbre_point_question=100/(fractions+compteurs)
				}
				else if (fractions==1 && compteurs>0)
				{
					total+=(100/(fractions+compteurs));
					nbre_point_question=100/(fractions+compteurs)
				}
				else
				{
					total+=0;
					nbre_point_question=0;
				}
				
				//console.log(total);
				//console.log(note_max);
	
				const point2 = document.createTextNode(" / 100 points. ");
				const note_question = document.createTextNode(" " + nbre_point_question);
				span5.appendChild(note_question);
				p2.appendChild(span5);
				legend.appendChild(p2);
				div.appendChild(legend);
				
				span5.appendChild(point2);
				p2.appendChild(span5);
				legend.appendChild(p2);
				div.appendChild(legend);
				
				break;
			}
			default:
			{
				console.log('Désolé, type ' + questions['type']  + 'inconnu !');
			}
		}
	}
	
	//Affichage en HTML du taux de resultat
	const h3_1 = document.createElement('h3');
	const annonce = document.createTextNode("Resultats");
	h3_1.appendChild(annonce);
	legend.appendChild(h3_1);
	div.appendChild(legend);
	formulaire.appendChild(div);
	const p = document.createElement('p');
	const note = document.createTextNode(" Votre score est de "+ total + " sur " + note_max + "  ");
	p.appendChild(note);
	legend.appendChild(p);
	div.appendChild(legend);
	formulaire.appendChild(div);
	const progress = document.createElement('progress');
	progress.setAttribute('for', "file");
	progress.setAttribute('max', note_max);
	progress.setAttribute('value', total);
	p.appendChild(progress);
	legend.appendChild(p);
	div.appendChild(legend);
	formulaire.appendChild(div);
	//alert("Votre score est de "+ total + " sur " + note_max);
}

// Au chargement de la page, on charge les questions en JSON
// Ce n'est qu'au niveau du 2ème then que le contenu du fichier
// sera disponible 
window.onload = function(){
	fetch("questions.json")
	.then(response => response.json())
	.then(json => affiche(json.questions));
	fetch("questions2.json")
	.then(response => response.json())
	.then(json => affiche(json.questions));
}
