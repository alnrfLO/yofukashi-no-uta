
export interface Character {
  nom: string
  interetRomantique: string
  personnalite : string[] 
  objectif : string 
  image : string 
  descriptions : string 
  estVampire : boolean
  age : number | string   
}

export interface Vampire extends Character {
    pouvoir : string 
    objetSouvenir  : string 
    clan : string 
}

export interface Tome {
    numero : number | string ,
    image : string ,
    titre : string ,
    description : string 
}
