import type { Character , Vampire } from '../types/index'
export const characters: Character[] = [
    {
        nom: 'Kou Yamori',
        interetRomantique: 'Nazuna ',
        personnalite: ['Insomniaque','Solitaire','Curieux'],
        objectif: 'Devenirs un vampire ',
        image: 'https://static.wikia.nocookie.net/yofukashi-no-uta/images/b/bc/Volume_11_Clean.png/revision/latest?cb=20240417152639',
        descriptions: 'Un jeu etudiant qui souffre d insomnie et qui aime bien ce balader la nuit tout seul',
        estVampire: false,
        age: 14 
    },
]
export const vampires : Vampire [] = [
    {
        nom: 'nazuna',
        interetRomantique: 'kou Yamori ',
        personnalite: ['protetrice','Solitaire','drole'],
        objectif: 'proteger kou yamori et faire de lui un vampire',
        image: 'https://static.wikia.nocookie.net/yofukashi-no-uta/images/3/3e/Kotoyama_nazuna_chan.jpg/revision/latest?cb=20250707205020',
        descriptions: 'Une vampire amnesique qui aime bien faire la fete la nuit et boire de la biere ',
        estVampire: true,
        age: 'inconnu', 
        pouvoir : 'inconnu',
        objetSouvenir : 'aucun',
        clan : 'inconnu pour l instant ',
    },
]