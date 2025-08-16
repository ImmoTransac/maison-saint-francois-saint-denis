// Configuration des données spécifiques au bien immobilier - Maison Saint-François
// Ce fichier contient toutes les données pour la maison de Saint-Denis, quartier Saint-François
// Modifiez les valeurs ci-dessous pour personnaliser le site pour un nouveau bien

const propertyData = {
    // ===== PERSONNALISATION =====
    personnalisation: {
        prenomParDefaut: "", // Laissez vide pour utiliser les paramètres URL ou rien
    },

    // ===== INFORMATIONS PRINCIPALES DU BIEN =====
    main: {
        title: "Maison à Vendre à Saint-François - Saint-Denis",
        subtitle: "Saint-François, Saint-Denis • 2 chambres • Vendue meublée • Terrain 246 m²",
        price: "292 600 €",
        prixNetVendeur: "280 000 €",
        type: "Maison",
        nbPieces: "3 pièces",
        ville: "Saint-Denis",
        quartier: "Saint-François",
        adresse: "3 bis rue des Tourtereaux",
        surface: {
            habitable: "70 m²",
            totale: "70 m² + terrasse et balcon",
            terrain: "246 m²"
        },
        chambres: 2,
        niveaux: "2 niveaux",
        specificite: "Vendue entièrement meublée • Vue dégagée • Aucun travaux",
        vendueMenublee: true
    },

    // ===== DESCRIPTION HERO =====
    hero: {
        mainTitle: "Découvrez Cette Maison de 70 m² à Saint-François",
        description: "Maison idéalement située dans les bas de Saint-François à Saint-Denis, offrant un cadre de vie fluide et lumineux",
        imageHero: "assets/images/IMG_9898.JPG" // Image principale du séjour
    },

    // ===== SPÉCIFICATIONS TECHNIQUES =====
    specifications: [
        {
            value: "70 m²",
            label: "Surface habitable"
        },
        {
            value: "2 chambres",
            label: "À l'étage avec balcons"
        },
        {
            value: "246 m²",
            label: "Terrain"
        },
        {
            value: "Meublée",
            label: "Vendue entièrement meublée"
        }
    ],

    // ===== DÉTAIL DES PIÈCES =====
    pieces: [
        {
            nom: "Séjour / Salon",
            surface: "Volume principal",
            description: "Pièce de vie traversante et lumineuse. Le séjour mêle harmonieusement salon et coin repas, dans un espace sobre et naturel, baigné de lumière grâce à ses ouvertures bien orientées. Circulation fluide avec ouverture directe vers l'extérieur.",
            caracteristiques: ["Lumineux", "Traversant", "Ouvert sur extérieur", "Matières naturelles"],
            images: [
                "assets/images/IMG_9898.JPG"
            ]
        },
        {
            nom: "Cuisine Équipée",
            surface: "Compacte",
            description: "Cuisine ouverte sur la pièce de vie, équipée de plaques de cuisson, hotte et réfrigérateur. Façades en bois et plan de travail contrasté pour un style chaleureux et moderne. Parfaitement intégrée à l'ensemble.",
            caracteristiques: ["Ouverte sur séjour", "Équipée", "Style moderne", "Bien intégrée"],
            images: [
                "assets/images/IMG_9899.JPG"
            ]
        },
        {
            nom: "Chambre Principale",
            surface: "À l'étage",
            description: "Chambre lumineuse avec accès direct au balcon privatif et vue dégagée. Ambiance reposante avec couleurs claires, textiles naturels et rangements intégrés. Ouverture large donnant sur balcon végétalisé.",
            caracteristiques: ["Lumineuse", "Balcon privatif", "Vue dégagée", "Rangements"],
            images: [
                "assets/images/IMG_9889.JPG",
                "assets/images/IMG_9891.JPG"
            ]
        },
        {
            nom: "Chambre Secondaire",
            surface: "À l'étage",
            description: "Chambre en enfilade, attenante à la principale, avec accès vers l'extérieur. Idéale comme chambre d'enfant ou bureau. Exposition intéressante et vue sans vis-à-vis. Polyvalente et discrète.",
            caracteristiques: ["En enfilade", "Polyvalente", "Vue sans vis-à-vis", "Accès extérieur"],
            images: [
                "assets/images/IMG_9892.JPG"
            ]
        },
        {
            nom: "Salle d'Eau",
            surface: "Optimisée",
            description: "Salle d'eau avec douche à l'italienne, revêtement effet pierre et meubles en bois. Ambiance minérale très appréciable avec lumière naturelle discrète. Espace pratique et inspiré de la matière.",
            caracteristiques: ["Douche italienne", "Style minéral", "Finitions soignées", "Éclairage naturel"],
            images: [
                "assets/images/IMG_9900.JPG"
            ]
        },
        {
            nom: "WC Séparé",
            surface: "Indépendant",
            description: "Toilettes indépendantes au rez-de-chaussée pour plus de confort quotidien. Emplacement discret, bien intégré dans la circulation. Un vrai plus pour un bien de cette surface.",
            caracteristiques: ["Séparé", "Rez-de-chaussée", "Discret", "Pratique"],
            images: []
        },
        {
            nom: "Terrasse Privative",
            surface: "Attenante chambre",
            description: "Terrasse intime accessible depuis la chambre, avec sol bois et banquette intégrée. Espace extérieur protégé, bien orienté sans vis-à-vis direct. Extension naturelle de la chambre.",
            caracteristiques: ["Privative", "Sol bois", "Banquette", "Sans vis-à-vis"],
            images: [
                "assets/images/IMG_9893.JPG"
            ]
        },
        {
            nom: "Balcon Végétalisé",
            surface: "À l'étage",
            description: "Balcon suspendu avec plantes et sol bois, véritable écrin de verdure apportant une atmosphère apaisante. Espace de respiration rare en centre-ville, accessible depuis les chambres.",
            caracteristiques: ["Végétalisé", "Apaisant", "Rare en ville", "Suspendu"],
            images: [
                "assets/images/IMG_9894.JPG"
            ]
        }
    ],

    // ===== FICHE TECHNIQUE =====
    ficheDetaille: {
        surface: "70 m²",
        terrain: "246 m²",
        pieces: "3 pièces",
        chambres: "2 chambres à l'étage",
        sallesDeau: "1 salle d'eau avec douche italienne",
        wc: "1 WC séparé",
        niveaux: "2 niveaux",
        anneeConstruction: "Non précisée",
        etatGeneral: "Excellent - Aucun travaux",
        vendueMenublee: "Oui - Entièrement meublée",
        climatisation: "Oui - 2 unités",
        voletsRoulants: "Oui",
        stationnement: "1 place privative extérieure",
        vue: "Dégagée sur quartier résidentiel"
    },

    // ===== ATOUTS PRINCIPAUX =====
    atouts: [
        {
            titre: "Prix Exceptionnel Meublée",
            description: "Maison vendue entièrement meublée à un prix exceptionnel, idéale pour investissement locatif ou primo-accédant",
            icone: "fas fa-euro-sign",
            galerie: [
                "assets/images/IMG_9898.JPG",
                "assets/images/IMG_9889.JPG"
            ],
            avantages: ["Vendue meublée", "Prix attractif", "Prêt à habiter", "Rentabilité"]
        },
        {
            titre: "Emplacement Idéal Saint-François",
            description: "Située dans les bas de Saint-François, proche de toutes commodités avec vue dégagée sur quartier résidentiel",
            icone: "fas fa-map-marker-alt",
            galerie: [
                "assets/images/3 Points à retenir.png"
            ],
            avantages: ["Centre-ville proche", "Commerces à pied", "Transports", "Calme"]
        },
        {
            titre: "Extérieurs Privatifs Exceptionnels",
            description: "Terrasse attenante, balcon végétalisé et terrain de 246 m² offrant des espaces extérieurs rares en ville",
            icone: "fas fa-tree",
            galerie: [
                "assets/images/IMG_9893.JPG",
                "assets/images/IMG_9894.JPG"
            ],
            avantages: ["Terrasse privée", "Balcon végétalisé", "Terrain 246m²", "Sans vis-à-vis"]
        },
        {
            titre: "Luminosité et Rénovation",
            description: "Maison très lumineuse, entièrement rénovée avec finitions soignées et aucun travaux à prévoir",
            icone: "fas fa-sun",
            galerie: [
                "assets/images/IMG_9900.JPG",
                "assets/images/IMG_9891.JPG"
            ],
            avantages: ["Très lumineux", "Rénové", "Aucun travaux", "Finitions soignées"]
        },
        {
            titre: "Agencement Optimisé",
            description: "Circulation fluide, pièce de vie traversante, cuisine ouverte et chambre avec accès extérieur",
            icone: "fas fa-home",
            galerie: [
                "assets/images/IMG_9899.JPG",
                "assets/images/IMG_9892.JPG"
            ],
            avantages: ["Bien agencé", "Circulation fluide", "Cuisine ouverte", "Fonctionnel"]
        },
        {
            titre: "Confort Moderne",
            description: "Climatisation 2 unités, volets roulants, douche italienne et équipements contemporains",
            icone: "fas fa-snowflake",
            galerie: [
                "assets/images/IMG_9900.JPG"
            ],
            avantages: ["Climatisation", "Volets roulants", "Douche italienne", "Équipé"]
        },
        {
            titre: "Parfait Pour Investissement",
            description: "Idéal couple, primo-accédant ou investisseur avec potentiel locatif élevé en centre-ville",
            icone: "fas fa-chart-line",
            galerie: [
                "assets/images/MAISON DE VILLE À VENDRE DE 70M² À ST DENIS.png"
            ],
            avantages: ["Investissement", "Locatif", "Centre-ville", "Rentable"]
        }
    ],

    // ===== LOCALISATION =====
    localisation: {
        adresse: "3 bis rue des Tourtereaux, Saint-François, Saint-Denis",
        ville: "Saint-Denis",
        quartier: "Saint-François (Bas de Saint-François)",
        typeQuartier: "Calme et dynamique",
        coordonnees: {
            lat: -20.8789,
            lng: 55.4481
        },
        pointsInteret: [
            {
                nom: "Écoles et Commerces",
                distance: "5 min à pied",
                icone: "fas fa-school",
                description: "Écoles, commerces et services de proximité accessibles à pied"
            },
            {
                nom: "Centre-ville Saint-Denis",
                distance: "7 min en voiture",
                icone: "fas fa-city",
                description: "Accès rapide au centre-ville et ses commodités"
            },
            {
                nom: "Hôpital Félix-Guyon",
                distance: "10 min",
                icone: "fas fa-hospital",
                description: "Proximité du principal hôpital de Saint-Denis"
            },
            {
                nom: "Arrêt de Bus",
                distance: "3 min",
                icone: "fas fa-bus",
                description: "Desserte complète de la ville via transport public"
            },
            {
                nom: "Commerces Proximité",
                distance: "Immédiat",
                icone: "fas fa-shopping-cart",
                description: "Commerces et services dans le quartier"
            },
            {
                nom: "Écoles/Collèges",
                distance: "Proximité",
                icone: "fas fa-graduation-cap",
                description: "Établissements scolaires à proximité"
            }
        ]
    },

    // ===== MÉDIAS =====
    medias: {
        videosPrincipales: [
            {
                id: "visite-virtuelle",
                titre: "Visite Virtuelle Complète",
                url: "assets/images/IMG_9895.MOV",
                thumbnail: "assets/images/IMG_9898.JPG"
            },
            {
                id: "exterieur-balcon",
                titre: "Balcon et Extérieurs",
                url: "assets/images/IMG_9896.MOV",
                thumbnail: "assets/images/IMG_9894.JPG"
            }
        ],
        galeriePrincipale: [
            "assets/images/IMG_9898.JPG", // Séjour principal
            "assets/images/IMG_9899.JPG", // Cuisine
            "assets/images/IMG_9889.JPG", // Chambre 1
            "assets/images/IMG_9891.JPG", // Chambre 2
            "assets/images/IMG_9892.JPG", // Chambre avec rangements
            "assets/images/IMG_9893.JPG", // Terrasse
            "assets/images/IMG_9894.JPG", // Balcon végétalisé
            "assets/images/IMG_9900.JPG"  // Salle d'eau
        ],
        plansMaison: [],
        presentationMarketing: "assets/images/3 Points à retenir.png"
    },

    // ===== ACTIONS =====
    actions: {
        demandeVisite: {
            url: "https://immotransac.re/demande-visite?bien=saint-francois-292600",
            texte: "Organiser une visite"
        },
        whatsapp: {
            numero: "+262692123456",
            message: "Bonjour, je suis intéressé(e) par la maison de Saint-François à 292 600€ (ref: VM2576)",
            url: "https://wa.me/262692123456?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20maison%20de%20Saint-Fran%C3%A7ois%20%C3%A0%20292%20600%E2%82%AC"
        },
        estimation: {
            url: "https://immotransac.re/estimation-gratuite",
            texte: "Estimation gratuite en 3 clics"
        }
    },

    // ===== AGENCE =====
    agence: {
        nom: "Agence Immo Transac",
        slogan: "Votre Allié Immobilier Réunionnais",
        telephone: "0262 XX XX XX",
        email: "contact@immotransac.re",
        adresse: "Saint-Denis, La Réunion",
        siteWeb: "www.immotransac.re",
        reseauxSociaux: {
            facebook: "https://facebook.com/immotransac",
            instagram: "https://instagram.com/immotransac"
        },
        testimonial: {
            auteur: "Madame Joce T.H.",
            texte: "Maison à estimer et à vendre. Je recommande sans hésitation cette agence immobilière. Très professionnel, Mr Pitou vous conseille et vous apporte des réponses efficaces. Merci à lui, son assistante et son équipe."
        }
    }
};

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = propertyData;
}