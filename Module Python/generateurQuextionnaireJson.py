from tkinter import *
import json
from time import time
from math import floor
#ce programme est un générateur de QCM
#On entre les questions dans des fenêtres
#Les questions sont enregistrées dans une liste de listes

#--définition des fonctions géstionnaires d'évenements :--

#--définition de la fonction qui savegarde une question
def enregistreQmu():
    global N, questionnaire
    question=entr1.get()
    choix1=entr2.get()
    choix2=entr3.get()
    choix3=entr4.get()
    bonchoix=listechoix.curselection()
    N=N+1
    txt1.configure(text='Question n° '+str(N))
    partie_questionnaire=[question,choix1,choix2,choix3,bonchoix]
    # liste contenant la question et les choix associés
    questionnaire.append(partie_questionnaire)
    print(questionnaire)

#--définition de la fonction qui savegarde le questionnaire dans un fichier json  
def enreg_questionnaire():  # questionnaire est une liste de dictionnaires
                            # nom-fichier sera le nom du fichier de sauvegarde
    global N, questionnaire
    print(questionnaire)
    stralea=str((floor(time())))
    stralea=stralea[-3:]            #chaine de caracteres aleatoire
    nom_fic='questionnaire'+stralea+'.json' # nom de fichier aleatoire
    with open(nom_fic,"w") as f:
        f.write(json.dumps(questionnaire,indent=4))

   
N=1           # initialisation du nombre de questions enregistrées
questionnaire=[]        # initialisation de la liste contenant le QCM
fen1 = Tk()
fen1.geometry('1100x300')
titre = Label(fen1, text="Construction d'un questionnaire", bg = '#87CEEB', fg = 'yellow',font = ("Bahnschrift", 20), relief = SUNKEN)
bou1 = Button(fen1,text='Enregistrer la question multiple', command=enregistreQmu)
bou2 = Button(fen1,text='Enregistrer le questionnaire', command=enreg_questionnaire)
bou3 = Button(fen1,text='Fin du programme', command=fen1.destroy)

txt1 = Label(fen1, text='Question multiple')
txt2 = Label(fen1, text = 'choix 1 : ')
txt3 = Label(fen1, text = 'choix 2 : ')
txt4 = Label(fen1, text = 'choix 3 : ')
txt5 = Label(fen1, text = 'bonne réponse attendue : ')


entr1 = Entry(fen1,width=50)
entr2 = Entry(fen1,width=25)
entr3 = Entry(fen1,width=25)
entr4 = Entry(fen1,width=25)
listechoix = Listbox(fen1,width=3,heigh=3)
listechoix.insert(0,'1')
listechoix.insert(1,'2')
listechoix.insert(2,'3')


titre.grid(row =0,column =1)
txt1.grid(row =1,sticky =E)
txt2.grid(row =2,sticky =E)
txt3.grid(row =3,sticky =E)
txt4.grid(row =4,sticky =E)
txt5.grid(row =5,sticky =E)

bou1.grid(row =6, column =1,sticky =W)
bou2.grid(row =7, column =2)
bou3.grid(row =8, column =2)


entr1.grid(row =1, column =1,sticky =W)
entr2.grid(row =2, column =1,sticky =W)
entr3.grid(row =3, column =1,sticky =W)
entr4.grid(row =4, column =1,sticky =W)
listechoix.grid(row =5, column =1,sticky =W)



