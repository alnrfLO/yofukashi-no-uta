export interface Character {
  id: string
  nom: string
  interetRomantique: string
  personnalite: string[]
  objectif: string
  image: string
  descriptions: string
  estVampire: boolean
  age: number | string
  premiereApparition: string
  aussiConnuSous?: string
  infoNonVerifiee?: boolean
}

export interface Vampire extends Character {
    pouvoir: string
    objetSouvenir: string
    clan: string
    creePar?: string
    kouhai?: string[]
}

export interface Tome {
    numero: number
    image: string
    titre: string
    description: string
    arc: string
}

export interface Arc {
    id: string
    titre: string
    tomes: string
    tomeNumeros: number[]
    resume: string
    evenementsClefs: string[]
}

export interface Musique {
    id: string
    titre: string
    type: 'Opening' | 'Ending'
    saison: string
    interprete: string
    episodes: string
    signification?: string
    description: string
    youtubeId?: string
}

export interface Lieu {
    id: string
    nom: string
    description: string
    image: string
    personnagesLies: string[]
}
