# jour-1
Ajout de la structure portfolio en local 

└── portfolio

    ├── notes

    ├── projects

    ├── README.md

    ├── week-1

    │   └── jour-1.md

    └── week-2

- Création du compte Github, en ligne sur github.com

- Création du repository automation-ai-portfolio dans le compte github (sans README.md)

- Puis ajout clé ssh et connexion depuis Macbook :

créer clé
```
ssh-keygen -t ed25519 -C "ton_email@example.com"
```

récup clé 
```
cat ~/.ssh/id_ed25519.pub
```

copier la clé et l'ajouter dans le settings>ssh keys  du compte github

puis retour au terminal
et config de l'utilisateur git
``` 
git config --global user.name "Ton Nom"
git config --global user.email "ton_email@example.com"
git config --global init.defaultBranch main
```
- puis dans mon repertoire /portfolio:

``` git init ```

puis ajout du fichier README.md 

et connexion au repository avec une première branche et un push de "origin main"
```
git remote add origin https://github.com/TON_USERNAME/automation-ai-portfolio.git
git branch -M main
git push -u origin main
```

ensuite j'ai modifié README.md en local 

Puis push de README.md et week-1/jour-1.md

lorsqu'on modifie ou créer un fichier 
on l'ajoute :

``` git add README.md (par exemple) ```

puis on écrit le message de doc 

```  git commit -m "mon message" ```

puis on push la version 

```  git push ```


# Commande Git indispensable :

```
git status

git add <fichier>

git commit -m "message"

git diff

git log --oneline --graph

git branch <nom>

git checkout <nom>

git merge <nom>

git restore <file>

```

