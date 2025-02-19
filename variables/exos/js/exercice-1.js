console.log("Script variable-1 chargé !")

//Lien ressource:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Utiliser console.log() pour afficher vos résultats

//Réécrire la chaine en majuscule
const string1 = 'le titre du film'
console.log(string1.toUpperCase())

//Réécrire la chaine en minuscule
const string2 = 'UNE PHRASE QUI DEVRAIT EN MINUSCULE'
console.log(string2.toLowerCase())

//Supprimer les espaces en début de chaine
const string3 = '    user@mail.dev'
console.log(string3.trimStart())

//Supprimer les espaces en fin de chaine
const string4 = 'user@mail.dev    '
console.log(string4.trimEnd())
//Supprimer les espaces en début et en fin de chaine
const string5 = '    user@mail.dev     '
console.log(string5.trimStart().trimEnd())
//Extraire les chiffres de la chaine
const string6 = 'CX345VCS'
console.log(string6.substring(2,5))
//Remplacer le '_' par un '@'
const string7 = 'user.test_mail.dev'
console.log(string7.replace("_","@"))

//Rempalcer toutes les ';' par des ',' suivi d'un espace
const string8 = 'user1;user2;user3;user4'

//Verifier si la chaine contient 'PHP' et contient 'TATA'
const string9 = 'Javascript, PHP, Html, Css, Python'

//Concaténer les chaines afin d'obtenir 'prénom nom'
const string10 = 'prénom'
const string11 = 'nom'