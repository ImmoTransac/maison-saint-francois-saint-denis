# Maison à Vendre Saint-François - Saint-Denis

Site web immobilier modulaire pour une maison de 70 m² située dans le quartier de Saint-François à Saint-Denis, La Réunion.

## Informations du Bien

- **Prix** : 292 600 € (280 000 € net vendeur)
- **Surface** : 70 m² habitable + terrasse et balcon
- **Terrain** : 246 m²
- **Chambres** : 2 chambres à l'étage avec balcons privatifs
- **Localisation** : 3 bis rue des Tourtereaux, Saint-François, Saint-Denis
- **Spécificité** : Vendue entièrement meublée

## Structure du Projet

```
maison-a-vendre-saint-francois/
├── index.html              # Page HTML principale
├── css/
│   └── styles.css          # Tous les styles CSS
├── js/
│   └── script.js           # Logique JavaScript avec personnalisation prénom
├── config/
│   └── property-data.js    # Configuration spécifique à cette maison
├── assets/                 # Dossier pour les images/médias locaux
└── README.md              # Ce fichier
```

## Personnalisation avec Prénom

Le site supporte la personnalisation automatique via URL :

- **Avec prénom** : `index.html?prenom=marie` → affiche "Marie, " dans tous les textes
- **Sans prénom** : `index.html` → n'affiche rien (pas de prénom ni virgule)
- **Capitalisation** : `?prenom=marie` → devient automatiquement "Marie"

## Points Forts de Cette Maison

1. **Prix Exceptionnel Meublée** - Vendue entièrement meublée
2. **Emplacement Idéal** - Bas de Saint-François, proche commodités
3. **Extérieurs Privatifs** - Terrasse + balcon végétalisé + terrain 246m²
4. **Luminosité** - Très lumineuse, entièrement rénovée
5. **Agencement Optimisé** - Circulation fluide, cuisine ouverte
6. **Confort Moderne** - Climatisation, volets roulants
7. **Investissement** - Parfait pour couple, primo-accédant ou investisseur

## Proximités

- Écoles et commerces : 5 min à pied
- Centre-ville Saint-Denis : 7 min en voiture
- Hôpital Félix-Guyon : 10 min
- Arrêt de bus : 3 min
- Stationnement privatif inclus

## Caractéristiques Techniques

- **Type** : Maison sur 2 niveaux
- **Pièces** : 3 pièces (séjour, cuisine, 2 chambres)
- **Salle d'eau** : 1 avec douche italienne
- **WC** : 1 séparé au rez-de-chaussée
- **Équipements** : Climatisation 2 unités, volets roulants
- **État** : Excellent, aucun travaux à prévoir
- **Vue** : Dégagée sur quartier résidentiel

## Comment Modifier pour un Nouveau Bien

Pour adapter ce site à une autre propriété :

1. Éditez `config/property-data.js` avec les nouvelles données
2. Modifiez les images dans `assets/` si nécessaire
3. Le reste du code reste identique

## Contact Agence

**Agence Immo Transac**  
Votre Allié Immobilier Réunionnais  
Saint-Denis, La Réunion  
www.immotransac.re

---

*Site généré avec la structure modulaire Claude Code - Facilement adaptable pour de nouveaux biens*