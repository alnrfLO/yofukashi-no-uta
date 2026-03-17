interface Character {
  nom: string
  interetRomantique: string
  personnalite : string[] 
  objectif : string 
  image : string 
  descriptions : string 
  estVampire : boolean
  age : number | string   
}

interface Vampire extends Character {
    pouvoir : string 
    objetSouvenir  : string 
    clan : string 
}

