import type { Lieu } from '../types/index'

export const lieux: Lieu[] = [
    {
        id: 'rues-nocturnes-de-tokyo',
        nom: 'Les rues nocturnes de Tôkyô',
        description: "Le véritable décor principal de la série : quartiers commerçants, konbini, ruelles et enseignes lumineuses que Kô arpente sans fin la nuit. C'est là que tout commence, lors de sa première rencontre avec Nazuna.",
        image: '/images/tomes/tome-01.webp',
        personnagesLies: ['Kou Yamori', 'Nazuna Nanakusa'],
    },
    {
        id: 'maid-cafe-de-midori',
        nom: 'Le maid café de Midori',
        description: "Établissement tenu par la vampire Midori Kohakobe, où elle travaille la nuit. Kô et sa bande y découvrent un pan inattendu de la vie nocturne vampirique.",
        image: '/images/tomes/tome-04.webp',
        personnagesLies: ['Midori Kohakobe', 'Kou Yamori'],
    },
    {
        id: 'hopital-de-nuit',
        nom: "L'hôpital de nuit",
        description: "Lieu lié au passé de Kabura Honda et de Haru Nanakusa, ancienne infirmière. C'est ici que se dissimule une partie du secret des origines de Nazuna.",
        image: '/images/tomes/tome-07.webp',
        personnagesLies: ['Kabura Honda', 'Haru Nanakusa', 'Nazuna Nanakusa'],
    },
    {
        id: 'cours-du-soir',
        nom: 'Le cours du soir clandestin',
        description: "Petite école nocturne tenue par la vampire Niko Hirata, destinée aux vampires et à leurs proches. Nazuna et Kô y sont enrôlés de force et Nazuna y redécouvre des pans de son passé.",
        image: '/images/tomes/tome-08.webp',
        personnagesLies: ['Niko Hirata', 'Nazuna Nanakusa', 'Kou Yamori'],
    },
    {
        id: 'college-de-kou',
        nom: 'Le collège de Kô, Akira et Mahiru',
        description: "Établissement scolaire que Kô déserte au profit de ses virées nocturnes, et où Akira tente sans relâche de le ramener. Mahiru Seki y est également scolarisé.",
        image: '/images/tomes/tome-13.webp',
        personnagesLies: ['Kou Yamori', 'Akira Asai', 'Mahiru Seki'],
    },
    {
        id: 'hokkaido',
        nom: 'Hokkaidô',
        description: "Destination du voyage scolaire pendant lequel Mahiru fugue avec Kiku Hoshimi. Kô, parti sur leurs traces, y fait la rencontre d'un vampire lié au passé de Nazuna, avant la confrontation finale avec Kiku.",
        image: '/images/tomes/tome-14.webp',
        personnagesLies: ['Mahiru Seki', 'Kiku Hoshimi', 'Kou Yamori'],
    },
    {
        id: 'village-arctique',
        nom: 'Le village au-delà du cercle arctique',
        description: "Lieu de l'épilogue de la série : Nazuna s'y est réfugiée après leur séparation. Kô finit par la retrouver, scellant leur promesse de continuer leur relation hors du temps.",
        image: '/images/tomes/tome-20.webp',
        personnagesLies: ['Nazuna Nanakusa', 'Kou Yamori'],
    },
]
