from tkinter import *
import json
from time import time
from math import floor
#ce programme est un générateur de questionnaire
#On entre les questions dans des fenêtres
#Les questions sont enregistrées dans une liste de listes

#--définition des fonctions géstionnaires d'évenements :--

#--définition de la fonction qui sauvegarde une question multiple
def enregistreQmu():
    global N, questionnaire, questionnaire2
    question=entr1.get()
    choix1=entr2.get()
    choix2=entr3.get()
    choix3=entr4.get()
    bonchoix=listechoix.curselection()
    partie_questionnaire=[question,choix1,choix2,choix3,bonchoix]
    # liste contenant la question et les choix associés
    questionnaire.append(partie_questionnaire)
    print(questionnaire)

#--définition de la fonction qui sauvegarde une question ouverte
def enregistreQouv():
    global N, questionnaire, questionnaire2
    question=entr5.get()
    bonne_reponse=entr6.get()
    partie_questionnaire={'enonce':question,'reponses':[{'text':bonne_reponse}],'type':types[1]}
    # liste contenant la question et les choix associés
    questionnaire.append(partie_questionnaire)
    print(questionnaire)

#--définition de la fonction qui savegarde le questionnaire dans un fichier json  
def enreg_questionnaire():  # questionnaire est une liste de dictionnaires
                            # nom-fichier sera le nom du fichier de sauvegarde
    global N, questionnaire, questionnaire2
    stralea=str((floor(time())))
    stralea=stralea[-4:]            #chaine de caracteres aleatoire
    questionnaire2['questions']=questionnaire
    nom_fic='questionnaire'+stralea+'.json' # nom de fichier aleatoire
    with open(nom_fic,"w") as f:
        f.write(json.dumps(questionnaire2,indent=4))

questionnaire=[]        # initialisation de la liste contenant le QCM
questionnaire2={}
questionnaire2['questions']=[]
types=['multiple','ouverte']
fen1 = Tk()
fen1.geometry('1150x300')
titre1 = Label(fen1, text="     Construction", bg = '#87CEEB', fg = 'yellow',font = ("Bahnschrift", 20))
titre2 = Label(fen1, text="d'un questionnaire     ", bg = '#87CEEB', fg = 'yellow',font = ("Bahnschrift", 20))
titre3 = Label(fen1, text=" ", bg = '#87CEEB', fg = 'yellow',font = ("Bahnschrift", 20))

bou1 = Button(fen1,text='Enregistrer la question multiple',bg = '#16B84E', command=enregistreQmu)
bou2 = Button(fen1,text='Enregistrer le questionnaire',bg = '#FEA347', command=enreg_questionnaire)
bou3 = Button(fen1,text='        Fin du programme       ', bg = '#FEA347',command=fen1.destroy)
bou4 = Button(fen1,text='Enregistrer la question ouverte', bg = '#16B84E',command=enregistreQouv)

txt1 = Label(fen1, text='Question à choixmultiple : ')
txt2 = Label(fen1, text = 'choix 1 : ')
txt3 = Label(fen1, text = 'choix 2 : ')
txt4 = Label(fen1, text = 'choix 3 : ')
txt5 = Label(fen1, text = 'bonne réponse attendue : ')
txt6 = Label(fen1, text='Question ouverte : ')
txt7 = Label(fen1, text='Réponse attendue à la question ouverte : ')
txt8 = Label(fen1, text='------------------------------------------------------')
txt9 = Label(fen1, text='----------------------------')
txt10 = Label(fen1, text='--------------------------------------------------------')
txt11 = Label(fen1, text='------------------------------------------------------------------------')
txt12, txt13, txt14 = Label(fen1, text="|"), Label(fen1, text="|"), Label(fen1, text="|")
txt15, txt16, txt17 = Label(fen1, text="|"), Label(fen1, text="|"), Label(fen1, text="|")
txt18 = Label(fen1, text="|")
txt19 = Label(fen1, text='-')

entr1 = Entry(fen1,width=50)
entr2 = Entry(fen1,width=25)
entr3 = Entry(fen1,width=25)
entr4 = Entry(fen1,width=25)
listechoix = Listbox(fen1,width=7,heigh=3)
listechoix.insert(0,'choix 1')
listechoix.insert(1,'choix 2')
listechoix.insert(2,'choix 3')

entr5 = Entry(fen1,width=50)
entr6 = Entry(fen1,width=50)

titre1.grid(row =0,column =1,sticky=E)
titre2.grid(row =0,column =3,sticky=W)
titre3.grid(row =0,column =2,sticky=W)

txt1.grid(row =1,column =0,sticky =E)
txt2.grid(row =2,column =0,sticky =E)
txt3.grid(row =3,column =0,sticky =E)
txt4.grid(row =4,column =0,sticky =E)
txt5.grid(row =5,column =0,sticky =E)
txt6.grid(row =1,column =3,sticky =E)
txt7.grid(row =2,column =3,sticky =E)
txt8.grid(row =7,column =3,sticky =E)
txt9.grid(row =7,column =0,sticky =E)
txt10.grid(row =7,column =4,sticky =W)
txt11.grid(row =7,column =1,sticky =W)
txt12.grid(row =1,column =2,sticky =W)
txt13.grid(row =2,column =2,sticky =W)
txt14.grid(row =3,column =2,sticky =W)
txt15.grid(row =4,column =2,sticky =W)
txt16.grid(row =5,column =2,sticky =W)
txt17.grid(row =6,column =2,sticky =W)
txt18.grid(row =7,column =2,sticky =W)
txt19.grid(row =7,column =2,sticky =W)


bou1.grid(row =6, column =1,sticky =W)
bou2.grid(row =8, column =3,sticky =W)
bou3.grid(row =9, column =3,sticky =W)
bou4.grid(row =3, column =4)

entr1.grid(row =1, column =1,sticky =W)
entr2.grid(row =2, column =1,sticky =W)
entr3.grid(row =3, column =1,sticky =W)
entr4.grid(row =4, column =1,sticky =W)
listechoix.grid(row =5, column =1,sticky =W)
entr5.grid(row =1, column =4,sticky =W)
entr6.grid(row =2, column =4,sticky =W)





