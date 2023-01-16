## 13/01/2023

## Table Content

1. Informations Générales
2. Langage et Package
3. installation

## Informations Générales

Projet Excercice Typescript

### Screenshot ECG

![Image text](https://img2.freepng.fr/20171127/58b/calculator-transparent-png-clipart-5a1c37778cfce5.3884893715117986475775.jpg)

### Langage et Package

- TypeScript
- Nodejs

## Installation

```
$ git clone https://github.com/AlaAtrash/calculator.git
$ cd calculator
$ npm install
```

## Compilation

```
$ npx tsc
$ npx tsc --watch (recompilation automatique)


```

## Ajouter un fichier TS

```
$ Dans le répertoire src, ajouter votre fichier ts ex: sin_cos.ts
$ Dans le fichier tsconfig.json, ajouter dans la clé "files" ==> "src/sin_cos.ts"
$
$ Exemple tsconfig apres ajout :
$ "files": ["src/index.ts", "src/sin_cos.ts"]
```

## Tester son fichier JS

```
$ Dans un terminal taper la commande suivante:
$ node ./dist/<name_of_file>.js
```
