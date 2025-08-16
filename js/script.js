        // ===== SYSTÈME DE PERSONNALISATION PRÉNOM ===== //
        // Récupération du prénom depuis l'URL
        function getURLParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        let visitorName = getURLParam('prenom') || '';
        
        // Fonction pour capitaliser la première lettre
        function capitalizeFirstLetter(string) {
            if (!string) return string;
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        // Capitaliser le prénom s'il existe
        if (visitorName) {
            visitorName = capitalizeFirstLetter(visitorName);
        }

        // Fonction pour mettre à jour tous les éléments avec le prénom
        function updatePrenomElements() {
            const elements = document.querySelectorAll('.prenom-visiteur');
            elements.forEach(element => {
                const parentElement = element.parentElement;
                
                if (visitorName) {
                    element.textContent = visitorName + ', ';
                    element.style.display = 'inline';
                } else {
                    element.textContent = '';
                    element.style.display = 'none';
                }
            });
        }

        // Initialiser le prénom dès le chargement de la page
        window.addEventListener('DOMContentLoaded', () => {
            // Mettre à jour immédiatement tous les éléments avec le prénom
            updatePrenomElements();
        });

        // ===== SECTION 1 - HERO SCRIPTS ===== //
        // ===== HAMBURGER MENU ===== //
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const navbar = document.querySelector('.navbar');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }

        hamburgerBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);

        // Close menu when clicking mobile menu links
        document.querySelectorAll('.mobile-nav-btn').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // ===== HIDE/SHOW NAVBAR ON SCROLL ===== //
        let lastScrollTop = 0;
        let scrollThreshold = 10;
        let navbarHeight = navbar.offsetHeight;

        function handleNavbarScroll() {
            const isMobile = window.innerWidth <= 768;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Wait for initial animation to complete
            if (navbar.style.animation) {
                navbar.style.animation = '';
            }

            if (isMobile) {
                // Mobile behavior - transparent and compact on scroll
                if (scrollTop > 50) {
                    navbar.classList.add('transparent');
                    navbar.classList.add('compact');
                } else {
                    navbar.classList.remove('transparent');
                    navbar.classList.remove('compact');
                }
                // Always visible on mobile
                navbar.classList.add('visible');
                navbar.classList.remove('hidden');
                // Reset inline styles on mobile
                navbar.style.background = '';
                navbar.style.backdropFilter = '';
            } else {
                // Desktop behavior - hide/show
                navbar.classList.remove('transparent');
                navbar.classList.remove('compact');
                
                if (scrollTop > lastScrollTop && scrollTop > navbarHeight + scrollThreshold) {
                    // Scrolling down - hide navbar
                    navbar.classList.add('hidden');
                    navbar.classList.remove('visible');
                } else if (scrollTop < lastScrollTop - scrollThreshold) {
                    // Scrolling up - show navbar
                    navbar.classList.remove('hidden');
                    navbar.classList.add('visible');
                }

                // Update navbar background on scroll (desktop only)
                if (scrollTop > 100) {
                    navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                    navbar.style.backdropFilter = 'blur(25px)';
                } else {
                    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                    navbar.style.backdropFilter = 'blur(20px)';
                }
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }

        window.addEventListener('scroll', handleNavbarScroll);

        // Handle window resize
        window.addEventListener('resize', () => {
            handleNavbarScroll();
        });

        // ===== VISITORS COUNTER ===== //
        const visitorsCount = document.getElementById('visitorsCount');
        let currentVisitors = 12;

        // Simulate visitors count changes
        setInterval(() => {
            const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            currentVisitors = Math.max(8, Math.min(25, currentVisitors + change));
            visitorsCount.textContent = currentVisitors;
        }, 5000);

        // ===== SMOOTH SCROLL ===== //
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ===== SECTION 2 - VISITE VIRTUELLE SCRIPTS ===== //
        // ===== DATA ===== //
        const piecesData = [
            {
                title: "Vue Mer Panoramique",
                surface: "Vue à 180°",
                orientation: "Sud-Ouest",
                luminosite: "Couchers de soleil toute l'année",
                description: "Vue dégagée exceptionnelle sur l'océan avec panorama à 180°. Profitez des couchers de soleil spectaculaires toute l'année depuis votre terrasse.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744439021-VM2163_32_original.jpg", // Vue mer principale
                    "https://img.netty.immo/product/transac/VM2163/1744438974-VM2163_1_original.jpg",  // Vue extérieure maison
                    "https://img.netty.immo/product/transac/VM2163/1744438976-VM2163_3_original.jpg"   // Vue d'ensemble propriété
                ],
                videoUrl: null // Pas de vidéo pour cette pièce
            },
            {
                title: "Séjour / Salon",
                surface: "23 m²",
                orientation: "Sud-Ouest",
                luminosite: "Baigné de lumière naturelle",
                description: "Séjour spacieux et lumineux de 23m² avec grandes ouvertures donnant sur la terrasse. Espace convivial idéal pour recevoir famille et amis.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744438989-VM2163_9_original.jpg",  // Salon vue d'ensemble
                    "https://img.netty.immo/product/transac/VM2163/1744438990-VM2163_10_original.jpg", // Salon angle différent
                    "https://img.netty.immo/product/transac/VM2163/1744438991-VM2163_11_original.jpg"  // Salon avec ouvertures
                ],
                videoUrl: "https://www.youtube.com/embed/TNq6E-GmxYE" // Vidéo disponible
            },
            {
                title: "Cuisine Équipée",
                surface: "9.1 m²",
                orientation: "Est",
                luminosite: "Lumineuse le matin",
                description: "Cuisine moderne fermée de 9.1m², entièrement équipée avec électroménager de qualité. Plan de travail fonctionnel et nombreux rangements.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744438996-VM2163_14_original.jpg", // Cuisine vue générale
                    "https://img.netty.immo/product/transac/VM2163/1744438997-VM2163_15_original.jpg"  // Cuisine autre angle
                ],
                videoUrl: null
            },
            {
                title: "Chambres",
                surface: "9 à 12 m²",
                orientation: "Multi-exposition",
                luminosite: "Lumière naturelle agréable",
                description: "Trois chambres confortables de plain-pied (12m², 9.8m² et 9m²) avec rangements intégrés. Espaces de repos calmes et fonctionnels.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744438999-VM2163_16_original.jpg", // Chambre 1
                    "https://img.netty.immo/product/transac/VM2163/1744439000-VM2163_17_original.jpg", // Chambre 2
                    "https://img.netty.immo/product/transac/VM2163/1744439003-VM2163_18_original.jpg", // Chambre 3
                    "https://img.netty.immo/product/transac/VM2163/1744439004-VM2163_19_original.jpg"  // Vue chambre supplémentaire
                ],
                videoUrl: null
            },
            {
                title: "Salle d'Eau",
                surface: "Moderne",
                orientation: "Nord",
                luminosite: "Éclairage naturel et LED",
                description: "Salle d'eau contemporaine avec douche à l'italienne, double vasque et finitions modernes. Espace fonctionnel et élégant.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744439005-VM2163_20_original.jpg", // Salle d'eau vue générale
                    "https://img.netty.immo/product/transac/VM2163/1744439007-VM2163_21_original.jpg"  // Détails douche/vasque
                ],
                videoUrl: null
            },
            {
                title: "Terrasse Couverte",
                surface: "30 m²",
                orientation: "Face à l'océan",
                luminosite: "Ensoleillée et abritée",
                description: "Grande terrasse couverte de 30m² en bois, prolongement naturel du séjour. Espace privilégié pour profiter de la vue mer et des repas en extérieur.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744438987-VM2163_8_original.jpg",  // Terrasse vue principale
                    "https://img.netty.immo/product/transac/VM2163/1744438993-VM2163_12_original.jpg", // Terrasse angle différent
                    "https://img.netty.immo/product/transac/VM2163/1744438994-VM2163_13_original.jpg"  // Terrasse avec vue
                ],
                videoUrl: "https://www.youtube.com/embed/UndyCqZ5gvo" // Vidéo disponible
            },
            {
                title: "Studio Indépendant",
                surface: "20 m²",
                orientation: "Vue mer",
                luminosite: "Très lumineux",
                description: "Studio de 20m² totalement indépendant et équipé avec sa propre cuisine extérieure vue mer. Idéal pour location saisonnière, famille ou bureau.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744439016-VM2163_28_original.jpg", // Studio intérieur
                    "https://img.netty.immo/product/transac/VM2163/1744439015-VM2163_27_original.jpg", // Studio équipements
                    "https://img.netty.immo/product/transac/VM2163/1744439019-VM2163_30_original.jpg"  // Cuisine extérieure studio
                ],
                videoUrl: null
            },
            {
                title: "Jardin & Extérieurs",
                surface: "430 m²",
                orientation: "Multi-exposition",
                luminosite: "Ensoleillé toute la journée",
                description: "Terrain de 430m² entièrement clôturé et gazonné, plat et piscinable. Jardin tropical arboré avec parking bétonné pour plusieurs véhicules.",
                images: [
                    "https://img.netty.immo/product/transac/VM2163/1744438979-VM2163_4_original.jpg",  // Vue extérieure maison
                    "https://img.netty.immo/product/transac/VM2163/1744438981-VM2163_5_original.jpg",  // Façade et jardin
                    "https://img.netty.immo/product/transac/VM2163/1744438983-VM2163_6_original.jpg",  // Autre angle extérieur
                    "https://img.netty.immo/product/transac/VM2163/1744438986-VM2163_7_original.jpg",  // Vue latérale
                    "https://img.netty.immo/product/transac/VM2163/1744439010-VM2163_23_original.jpg", // Jardin végétation
                    "https://img.netty.immo/product/transac/VM2163/1744439012-VM2163_24_original.jpg", // Espace extérieur
                    "https://img.netty.immo/product/transac/VM2163/1744439013-VM2163_25_original.jpg"  // Parking/accès
                ],
                videoUrl: null
            }
        ];

        // ===== GLOBAL VARIABLES ===== //
        let currentPieceIndex = 0;
        let currentImageIndex = 0;
        let currentPhotoIndex = 0;
        let currentNiveau = 'rdc';
        let currentImmersiveMediaType = 'photo';

        // ===== NIVEAU SELECTOR ===== //
        function showNiveau(niveau) {
            // Hide all plans
            document.querySelectorAll('.plan-niveau').forEach(plan => {
                plan.classList.remove('active');
            });
            
            // Remove active from all buttons
            document.querySelectorAll('.niveau-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected plan
            document.getElementById(`plan-${niveau}`).classList.add('active');
            
            // Add active to clicked button
            event.currentTarget.classList.add('active');
            
            currentNiveau = niveau;
        }

        // ===== TAB NAVIGATION ===== //
        function showContent(contentId) {
            // Hide all contents
            document.querySelectorAll('.visite-content').forEach(content => {
                content.classList.remove('active');
                content.setAttribute('aria-hidden', 'true');
            });
            
            // Remove active from all tabs
            document.querySelectorAll('.visite-tab').forEach(tab => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });
            
            // Show selected content
            const selectedContent = document.getElementById(`content-${contentId}`);
            selectedContent.classList.add('active');
            selectedContent.setAttribute('aria-hidden', 'false');
            
            // Add active to clicked tab
            event.currentTarget.classList.add('active');
            event.currentTarget.setAttribute('aria-selected', 'true');
        }

        // ===== CAROUSEL NAVIGATION ===== //
        function scrollToCard(index) {
            const carousel = document.getElementById('piecesCarousel');
            const cards = carousel.querySelectorAll('.piece-card');
            if (cards[index]) {
                cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                updateCarouselIndicators(index);
            }
        }

        function updateCarouselIndicators(activeIndex) {
            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === activeIndex);
            });
        }

        // Monitor carousel scroll
        const carouselElement = document.getElementById('piecesCarousel');
        if (carouselElement) {
            carouselElement.addEventListener('scroll', () => {
                const cards = carouselElement.querySelectorAll('.piece-card');
                const carouselRect = carouselElement.getBoundingClientRect();
                let activeIndex = 0;
                
                cards.forEach((card, index) => {
                    const cardRect = card.getBoundingClientRect();
                    if (cardRect.left >= carouselRect.left && cardRect.left < carouselRect.left + 100) {
                        activeIndex = index;
                    }
                });
                
                updateCarouselIndicators(activeIndex);
            });
        }

        // ===== VIDEO PLAYER ===== //
        function changeVideo(videoId, element) {
            // Cache control for YouTube videos
            const iframe = document.getElementById('mainVideo');
            iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
            
            // Update active state
            document.querySelectorAll('.video-item').forEach(item => {
                item.classList.remove('active');
            });
            element.classList.add('active');
        }

        // ===== MODAL IMMERSIF FUNCTIONS ===== //
        function openPieceModal(index) {
            currentPieceIndex = index;
            currentPhotoIndex = 0;
            currentImmersiveMediaType = 'photo';
            
            updateImmersiveModal();
            showImmersiveMedia('photo'); // Ensure photo view is active
            
            const modal = document.getElementById('immersiveGalleryModal');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Animation d'entrée
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        }

        function closeImmersiveModal() {
            const modal = document.getElementById('immersiveGalleryModal');
            modal.classList.remove('active');
            
            // Stop video if playing
            const immersiveVideo = document.getElementById('immersiveVideo');
            immersiveVideo.src = '';
            
            // Attendre la fin de l'animation avant de cacher
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        function showImmersiveMedia(type) {
            currentImmersiveMediaType = type;
            const imageContainer = document.getElementById('immersiveImageContainer');
            const videoContainer = document.getElementById('immersiveVideoContainer');
            const mediaTabs = document.querySelectorAll('#immersiveMediaTabs .media-tab');
            const photoNav = document.querySelector('.premium-photo-navigation');
            
            if (type === 'photo') {
                imageContainer.classList.add('active');
                videoContainer.classList.remove('active');
                photoNav.style.display = 'flex';
                mediaTabs[0].classList.add('active');
                mediaTabs[1].classList.remove('active');
                
                // Stop video
                const immersiveVideo = document.getElementById('immersiveVideo');
                immersiveVideo.src = '';
            } else {
                imageContainer.classList.remove('active');
                videoContainer.classList.add('active');
                photoNav.style.display = 'none';
                mediaTabs[0].classList.remove('active');
                mediaTabs[1].classList.add('active');
                
                // Load video
                const piece = piecesData[currentPieceIndex];
                if (piece.videoUrl) {
                    const immersiveVideo = document.getElementById('immersiveVideo');
                    immersiveVideo.src = piece.videoUrl + '?rel=0&modestbranding=1';
                }
            }
        }

        function navigateImmersivePiece(direction) {
            currentPieceIndex = (currentPieceIndex + direction + piecesData.length) % piecesData.length;
            currentPhotoIndex = 0;
            currentImmersiveMediaType = 'photo';
            
            showImmersiveMedia('photo');
            updateImmersiveModal();
        }

        function navigateImmersivePhoto(direction) {
            const currentPiece = piecesData[currentPieceIndex];
            currentPhotoIndex = (currentPhotoIndex + direction + currentPiece.images.length) % currentPiece.images.length;
            updateImmersiveModal();
        }

        function updateImmersiveModal() {
            const currentPiece = piecesData[currentPieceIndex];
            
            // Show/hide media tabs based on video availability
            const mediaTabs = document.getElementById('immersiveMediaTabs');
            if (currentPiece.videoUrl) {
                mediaTabs.style.display = 'flex';
            } else {
                mediaTabs.style.display = 'none';
            }
            
            // Mettre à jour l'image principale
            document.getElementById('immersiveMainImage').src = currentPiece.images[currentPhotoIndex];
            document.getElementById('immersiveMainImage').alt = currentPiece.title;
            
            // Mettre à jour les compteurs
            document.getElementById('immersiveCurrentPiece').textContent = currentPieceIndex + 1;
            document.getElementById('immersiveTotalPieces').textContent = piecesData.length;
            document.getElementById('immersiveCurrentPhoto').textContent = currentPhotoIndex + 1;
            document.getElementById('immersiveTotalPhotos').textContent = currentPiece.images.length;
            
            // Mettre à jour les informations
            document.getElementById('immersivePieceTitle').textContent = currentPiece.title;
            document.getElementById('immersivePieceDescription').textContent = currentPiece.description;
            
            // Mettre à jour la fiche technique
            const featuresContainer = document.getElementById('immersivePieceFeatures');
            featuresContainer.innerHTML = '';
            
            // Ajouter les informations de base
            const basicInfo = [
                { label: 'Surface', value: currentPiece.surface, icon: 'fa-ruler-combined' },
                { label: 'Orientation', value: currentPiece.orientation, icon: 'fa-compass' },
                { label: 'Luminosité', value: currentPiece.luminosite, icon: 'fa-sun' }
            ];
            
            basicInfo.forEach(info => {
                const featureDiv = document.createElement('div');
                featureDiv.className = 'premium-piece-feature';
                featureDiv.innerHTML = `
                    <div class="feature-label">
                        <i class="fas ${info.icon}"></i>
                        ${info.label}
                    </div>
                    <div class="feature-value">${info.value}</div>
                `;
                featuresContainer.appendChild(featureDiv);
            });
        }

        // ===== KEYBOARD NAVIGATION ===== //
        function setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                const modal = document.getElementById('immersiveGalleryModal');
                if (modal.classList.contains('active')) {
                    switch(e.key) {
                        case 'ArrowLeft':
                            if (currentImmersiveMediaType === 'photo') {
                                navigateImmersivePhoto(-1);
                            }
                            break;
                        case 'ArrowRight':
                            if (currentImmersiveMediaType === 'photo') {
                                navigateImmersivePhoto(1);
                            }
                            break;
                        case 'ArrowUp':
                            navigateImmersivePiece(-1);
                            break;
                        case 'ArrowDown':
                            navigateImmersivePiece(1);
                            break;
                        case 'Escape':
                            closeImmersiveModal();
                            break;
                    }
                }
            });
        }

        // ===== SECTION 3 - ATOUTS SCRIPTS ===== //
        // ===== CONFIGURATION ===== //
        const config = {
            autoplayDelay: 5000,
            particleCount: 20,
            swipeThreshold: 50
        };

        // ===== DONNÉES ===== //
        const atoutsData = [
            {
                icon: 'fas fa-water',
                title: 'Vue Mer Panoramique 180°',
                shortDesc: `${visitorName}, profitez d'un panorama exceptionnel sur l'océan Indien avec couchers de soleil spectaculaires`,
                fullDesc: `${visitorName}, vous profiterez d'une vue à couper le souffle sur l'océan Indien depuis votre terrasse.`,
                badge: 'Exceptionnel',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744439021-VM2163_32_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744438976-VM2163_3_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439000-VM2163_17_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439003-VM2163_18_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-sun', text: 'Couchers de soleil garantis' },
                    { icon: 'fas fa-mountain', text: 'Vue dégagée permanente' },
                    { icon: 'fas fa-camera', text: 'Cadre photogénique' },
                    { icon: 'fas fa-heart', text: 'Bien-être quotidien' }
                ]
            },
            {
                icon: 'fas fa-umbrella-beach',
                title: 'Terrasse Couverte 30m²',
                shortDesc: 'Grande terrasse en bois face à l\'océan, idéale pour vos moments de détente',
                fullDesc: 'Cette magnifique terrasse couverte de 30m² prolonge harmonieusement l\'espace de vie.',
                badge: 'Convivialité',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438979-VM2163_4_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744438983-VM2163_6_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744438991-VM2163_11_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439005-VM2163_20_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-utensils', text: 'Espace repas extérieur' },
                    { icon: 'fas fa-couch', text: 'Salon de jardin' },
                    { icon: 'fas fa-shield-alt', text: 'Protection solaire' },
                    { icon: 'fas fa-wind', text: 'Ventilation naturelle' }
                ]
            },
            {
                icon: 'fas fa-building',
                title: 'Studio Indépendant 20m²',
                shortDesc: `${visitorName}, ce studio tout équipé avec entrée privée est parfait pour la location`,
                fullDesc: 'Ce studio de 20m² entièrement indépendant est un véritable atout pour cette propriété.',
                badge: 'Rentabilité',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438997-VM2163_15_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744438999-VM2163_16_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439015-VM2163_27_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439016-VM2163_28_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-door-open', text: 'Entrée indépendante' },
                    { icon: 'fas fa-kitchen-set', text: 'Kitchenette équipée' },
                    { icon: 'fas fa-shower', text: 'Salle d\'eau privée' },
                    { icon: 'fas fa-euro-sign', text: 'Potentiel locatif' }
                ]
            },
            {
                icon: 'fas fa-swimming-pool',
                title: 'Terrain Piscinable 430m²',
                shortDesc: 'Terrain plat entièrement clôturé avec possibilité d\'installer une piscine',
                fullDesc: 'Le terrain de 430m² offre un potentiel d\'aménagement exceptionnel.',
                badge: 'Potentiel',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438981-VM2163_5_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744438986-VM2163_7_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439019-VM2163_30_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744438987-VM2163_8_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-ruler-combined', text: '430m² de terrain' },
                    { icon: 'fas fa-level-up-alt', text: 'Terrain plat' },
                    { icon: 'fas fa-lock', text: 'Entièrement clôturé' },
                    { icon: 'fas fa-tree', text: 'Jardin tropical' }
                ]
            },
            {
                icon: 'fas fa-key',
                title: 'Maison Clé en Main',
                shortDesc: `${visitorName}, cette maison entièrement rénovée ne nécessite aucun travaux`,
                fullDesc: 'Cette maison a été entièrement rénovée avec des matériaux de qualité.',
                badge: 'Sans travaux',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438974-VM2163_1_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744438993-VM2163_12_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744438994-VM2163_13_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744438996-VM2163_14_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-solar-panel', text: 'Chauffe-eau solaire' },
                    { icon: 'fas fa-wifi', text: 'Fibre optique' },
                    { icon: 'fas fa-shield-alt', text: 'Portail motorisé' },
                    { icon: 'fas fa-check-circle', text: 'Finitions premium' }
                ]
            },
            {
                icon: 'fas fa-bed',
                title: '3 Chambres de Plain-Pied',
                shortDesc: 'Configuration idéale pour une famille',
                fullDesc: 'Les trois chambres confortables sont toutes situées de plain-pied.',
                badge: 'Familial',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438990-VM2163_10_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744439004-VM2163_19_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439010-VM2163_23_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439007-VM2163_21_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-home', text: 'Plain-pied intégral' },
                    { icon: 'fas fa-users', text: 'Idéal famille' },
                    { icon: 'fas fa-sun', text: 'Chambres lumineuses' },
                    { icon: 'fas fa-wheelchair', text: 'Accessibilité PMR' }
                ]
            },
            {
                icon: 'fas fa-map-marker-alt',
                title: 'Emplacement Privilégié',
                shortDesc: `${visitorName}, vivez dans le quartier calme et prisé de Petite France`,
                fullDesc: 'Située dans le quartier prisé et calme de Petite France à Saint-Paul.',
                badge: 'Stratégique',
                mainImage: 'https://img.netty.immo/product/transac/VM2163/1744438975-VM2163_2_original.jpg',
                gallery: [
                    'https://img.netty.immo/product/transac/VM2163/1744439012-VM2163_24_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744439013-VM2163_25_original.jpg',
                    'https://img.netty.immo/product/transac/VM2163/1744438989-VM2163_9_original.jpg'
                ],
                features: [
                    { icon: 'fas fa-school', text: 'Écoles à 5 min' },
                    { icon: 'fas fa-umbrella-beach', text: 'Plages à 10 min' },
                    { icon: 'fas fa-shopping-cart', text: 'Commerces proches' },
                    { icon: 'fas fa-bus', text: 'Transports publics' }
                ]
            }
        ];

        // ===== CLASSE CAROUSEL ===== //
        class Carousel {
            constructor(data) {
                this.data = data;
                this.currentIndex = 0;
                this.autoplayInterval = null;
                this.touchStartX = 0;
                this.touchEndX = 0;
                
                this.init();
            }

            init() {
                this.createCards();
                this.createIndicators();
                this.updateView();
                this.initEvents();
                this.startAutoplay();
                
                if (window.innerWidth > 768) {
                    this.createParticles();
                }
            }

            createCards() {
                const track = document.getElementById('carouselTrack');
                
                this.data.forEach((item, index) => {
                    const card = document.createElement('article');
                    card.className = 'card glass-effect';
                    card.dataset.index = index;
                    
                    // Mise à jour des descriptions avec le prénom
                    const updatedShortDesc = item.shortDesc.replace('${visitorName}', visitorName);
                    
                    card.innerHTML = `
                        <span class="card__badge badge badge-success">${item.badge}</span>
                        <i class="${item.icon} card__icon"></i>
                        <h3 class="card__title">${item.title}</h3>
                        <p class="card__description">${updatedShortDesc}</p>
                        <div class="card__image">
                            <img src="${item.mainImage}" alt="${item.title}" loading="lazy">
                        </div>
                    `;
                    
                    card.addEventListener('click', () => modal.open(item));
                    track.appendChild(card);
                });
            }

            createIndicators() {
                const container = document.getElementById('indicators');
                
                this.data.forEach((_, index) => {
                    const indicator = document.createElement('button');
                    indicator.className = 'indicator';
                    indicator.setAttribute('aria-label', `Aller à l'atout ${index + 1}`);
                    indicator.addEventListener('click', () => this.goTo(index));
                    container.appendChild(indicator);
                });
            }

            updateView() {
                const cards = document.querySelectorAll('.card');
                const indicators = document.querySelectorAll('.indicator');
                
                cards.forEach((card, index) => {
                    card.classList.remove('card--center', 'card--left', 'card--right', 'card--hidden');
                    
                    const diff = (index - this.currentIndex + this.data.length) % this.data.length;
                    
                    if (diff === 0) {
                        card.classList.add('card--center');
                    } else if (diff === 1 || diff === this.data.length - 1) {
                        card.classList.add(diff === 1 ? 'card--right' : 'card--left');
                    } else {
                        card.classList.add('card--hidden');
                    }
                });
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('indicator--active', index === this.currentIndex);
                });
            }

            next() {
                this.currentIndex = (this.currentIndex + 1) % this.data.length;
                this.updateView();
                this.resetAutoplay();
            }

            prev() {
                this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
                this.updateView();
                this.resetAutoplay();
            }

            goTo(index) {
                this.currentIndex = index;
                this.updateView();
                this.resetAutoplay();
            }

            startAutoplay() {
                this.autoplayInterval = setInterval(() => this.next(), config.autoplayDelay);
            }

            resetAutoplay() {
                clearInterval(this.autoplayInterval);
                this.startAutoplay();
            }

            initEvents() {
                // Pause on hover
                const track = document.querySelector('.carousel-track');
                track.addEventListener('mouseenter', () => clearInterval(this.autoplayInterval));
                track.addEventListener('mouseleave', () => this.startAutoplay());

                // Touch events
                track.addEventListener('touchstart', e => {
                    this.touchStartX = e.changedTouches[0].screenX;
                });

                track.addEventListener('touchend', e => {
                    this.touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe();
                });

                // Keyboard
                document.addEventListener('keydown', e => {
                    if (e.key === 'ArrowRight') this.next();
                    if (e.key === 'ArrowLeft') this.prev();
                });

                // Resize
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768 && !document.querySelector('.particle')) {
                        this.createParticles();
                    }
                });
            }

            handleSwipe() {
                const diff = this.touchStartX - this.touchEndX;
                if (Math.abs(diff) > config.swipeThreshold) {
                    diff > 0 ? this.next() : this.prev();
                }
            }

            createParticles() {
                const container = document.getElementById('particles');
                if (!container) return;
                
                for (let i = 0; i < config.particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 20 + 's';
                    particle.style.animationDuration = (20 + Math.random() * 10) + 's';
                    container.appendChild(particle);
                }
            }
        }

        // ===== CLASSE MODAL ===== //
        class Modal {
            constructor() {
                this.element = document.getElementById('modal');
                this.content = document.getElementById('modalContent');
                this.initEvents();
            }

            open(data) {
                // Mise à jour de la description complète avec le prénom
                const updatedFullDesc = data.fullDesc.replace('${visitorName}', visitorName);
                
                this.content.innerHTML = `
                    <div class="modal__image">
                        <img src="${data.mainImage}" alt="${data.title}">
                    </div>
                    <div class="modal__body">
                        <h3 class="modal__title">${data.title}</h3>
                        <p class="modal__description">${updatedFullDesc}</p>
                        
                        <div class="modal__features">
                            ${data.features.map(f => `
                                <div class="feature-item glass-effect">
                                    <i class="${f.icon}"></i>
                                    <span>${f.text}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <h4 class="text-center mb-4" style="color: var(--text-primary);">Galerie photos</h4>
                        <div class="modal__gallery">
                            ${data.gallery.map(img => `
                                <img src="${img}" alt="${data.title}" 
                                     onclick="document.querySelector('.modal__image img').src='${img}'">
                            `).join('')}
                        </div>
                        
                        <div class="text-center mt-4">
                            <a href="#contact" class="btn btn-primary">
                                <i class="fas fa-calendar-check"></i>
                                ${visitorName}, Organisez une visite
                            </a>
                        </div>
                    </div>
                `;
                
                this.element.classList.add('modal--active');
                document.body.style.overflow = 'hidden';
            }

            close() {
                this.element.classList.remove('modal--active');
                document.body.style.overflow = '';
            }

            initEvents() {
                this.element.addEventListener('click', e => {
                    if (e.target === this.element) this.close();
                });

                document.addEventListener('keydown', e => {
                    if (e.key === 'Escape') this.close();
                });
            }
        }

        // ===== INITIALISATION ATOUTS ===== //
        let carousel;
        let modal;

        // Initialiser immédiatement le carousel
        const initializeCarousel = () => {
            carousel = new Carousel(atoutsData);
            modal = new Modal();
        };

        // ===== SECTION 4 - LOCALISATION SCRIPTS ===== //
        // Animation des points d'intérêt au survol
        document.addEventListener('DOMContentLoaded', function() {
            const points = document.querySelectorAll('.localisation-premium-point');
            
            points.forEach(point => {
                point.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-4px)';
                });
                
                point.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });

        // ===== CHATBOT ARIA CONFIGURATION ===== //
        
        // Configuration du bien Saint-François
        const CHATBOT_PROPERTY_DATA = {
            reference: 'VM2576',
            type: 'Maison de ville 70m²',
            ville: 'Saint-Denis',
            quartier: 'Saint-François',
            typeQuartier: 'Calme et résidentiel',
            
            surfaceHabitable: 70,
            surfaceTotale: 70,
            terrasse: 15,
            terrain: {
                surface: 246,
                caracteristiques: 'Clôturé, arboré, piscinable'
            },
            
            vue: 'Vue dégagée sur quartier résidentiel',
            
            chambres: {
                nombre: 2,
                surfaces: [12, 10]
            },
            sallesDEau: 1,
            wc: 1,
            sejour: {
                surface: 25,
                caracteristiques: 'Lumineux, traversant avec ouverture sur extérieur'
            },
            cuisine: {
                surface: 8,
                type: 'Ouverte sur séjour, équipée'
            },
            salleAManger: 'Intégrée au séjour',
            
            travaux: 'Aucun',
            
            atouts: {
                principal: 'Prix exceptionnel meublée',
                secondaire: 'Terrasse et balcon végétalisé',
                troisieme: 'Emplacement idéal Saint-François'
            },
            
            bonus: [
                'Vendue entièrement meublée',
                'Terrasse privative avec banquette',
                'Balcon végétalisé suspendu',
                'Climatisation 2 unités',
                'Volets roulants',
                'Place de parking privée'
            ],
            
            prix: {
                fai: 292600
            },
            
            anneeConstruction: 'Non précisée',
            destination: 'Idéal primo-accédant ou investissement locatif'
        };

        // Configuration agence
        const CHATBOT_AGENCY_CONFIG = {
            avatarUrl: 'https://d3vd8gcglemad3.cloudfront.net/AGENCE+-+FICHIER/le%CC%81a+-+assistante+virtuelle+immo+transac.png',
            agentName: 'Ritchel PITOU',
            agentPhone: '06 93 77 10 12',
            agencyName: 'Immo Transac',
            webhookContact: 'https://hooks.zapier.com/hooks/catch/15341720/uyi5td2/'
        };

        // Réponses personnalisées
        const CHATBOT_CUSTOM_RESPONSES = {
            welcome: `Cette maison de <strong>${CHATBOT_PROPERTY_DATA.surfaceHabitable}m²</strong> à Saint-François est proposée <strong>entièrement meublée</strong> à <strong>${formatChatbotPrice(CHATBOT_PROPERTY_DATA.prix.fai)}</strong>.`,
            
            proximite: [
                "École et commerces à 5 minutes à pied",
                "Centre-ville Saint-Denis à 7 minutes",
                "Transports en commun à 3 minutes"
            ]
        };

        // État du chatbot
        const CHATBOT_STATE = {
            isOpen: false,
            currentMode: 'property',
            conversation: [],
            qualificationData: {
                budget: null,
                timing: null,
                familySize: null,
                motivation: null,
                financing: null,
                currentStep: 0
            },
            isQualifying: false
        };

        // Questions de pré-qualification
        const QUALIFICATION_QUESTIONS = [
            {
                id: 'budget',
                question: '💰 Quel est votre budget pour l\'acquisition ?',
                type: 'budget',
                options: [
                    { value: '250000', label: 'Jusqu\'à 250 000€', range: [0, 250000] },
                    { value: '300000', label: '250 000€ - 300 000€', range: [250000, 300000] },
                    { value: '350000', label: '300 000€ - 350 000€', range: [300000, 350000] },
                    { value: '400000', label: 'Plus de 350 000€', range: [350000, 500000] }
                ]
            },
            {
                id: 'timing',
                question: '📅 Dans quel délai souhaitez-vous acquérir ?',
                type: 'timing',
                options: [
                    { value: 'urgent', label: 'Dès que possible (< 3 mois)' },
                    { value: 'moyen', label: 'Dans les 6 mois' },
                    { value: 'long', label: 'Dans l\'année' },
                    { value: 'flexible', label: 'Pas pressé, je cherche la perle rare' }
                ]
            },
            {
                id: 'family',
                question: '👨‍👩‍👧‍👦 Composition de votre foyer ?',
                type: 'family',
                options: [
                    { value: 'couple', label: 'Couple sans enfant' },
                    { value: 'family1', label: 'Couple avec 1 enfant' },
                    { value: 'family2', label: 'Couple avec 2+ enfants' },
                    { value: 'single', label: 'Personne seule' }
                ]
            },
            {
                id: 'motivation',
                question: '🎯 Votre motivation principale ?',
                type: 'motivation',
                options: [
                    { value: 'residence', label: 'Résidence principale' },
                    { value: 'investment', label: 'Investissement locatif' },
                    { value: 'secondary', label: 'Résidence secondaire' },
                    { value: 'both', label: 'Habiter puis louer' }
                ]
            }
        ];

        // Fonctions principales du chatbot
        function toggleAssistant() {
            CHATBOT_STATE.isOpen = !CHATBOT_STATE.isOpen;
            const assistantInterface = document.getElementById('assistantInterface');
            
            if (CHATBOT_STATE.isOpen) {
                assistantInterface.classList.add('active');
                if (CHATBOT_STATE.conversation.length === 0) {
                    initializeChatbotConversation();
                }
                document.getElementById('chatInput').focus();
            } else {
                assistantInterface.classList.remove('active');
            }
        }

        function switchMode(mode) {
            CHATBOT_STATE.currentMode = mode;
            const slider = document.getElementById('modeSlider');
            const modeOptions = document.querySelectorAll('.mode-option');
            
            if (mode === 'property') {
                slider.className = 'mode-slider property-mode';
                modeOptions[0].classList.add('active');
                modeOptions[1].classList.remove('active');
                document.getElementById('propertyRef').style.display = 'block';
                document.getElementById('chatInput').placeholder = 'Posez votre question sur ce bien...';
            } else {
                slider.className = 'mode-slider services-mode';
                modeOptions[0].classList.remove('active');
                modeOptions[1].classList.add('active');
                document.getElementById('propertyRef').style.display = 'none';
                document.getElementById('chatInput').placeholder = 'Comment puis-je vous aider ?';
            }
            
            clearChatbotConversation();
            initializeChatbotConversation();
        }

        function clearChatbotConversation() {
            const container = document.getElementById('messagesContainer');
            container.innerHTML = '';
            hideChatbotResponseArea();
        }

        function initializeChatbotConversation() {
            if (CHATBOT_STATE.currentMode === 'property') {
                initializePropertyConversation();
            } else {
                initializeServicesConversation();
            }
        }

        function initializePropertyConversation() {
            const welcomeMessage = `
                <p>👋 Bonjour ! Je suis ARIA, votre assistante personnelle pour ce magnifique bien.</p>
                <p>${CHATBOT_CUSTOM_RESPONSES.welcome}</p>
                <p>Que souhaitez-vous savoir sur cette maison ?</p>
                
                <div class="quick-actions">
                    <div class="quick-action" onclick="askChatbotAbout('détails complets')">
                        <span class="quick-action-icon">🏡</span>
                        <div class="quick-action-title">Caractéristiques</div>
                        <div class="quick-action-desc">Surfaces, pièces</div>
                    </div>
                    <div class="quick-action" onclick="startQualificationFlow()">
                        <span class="quick-action-icon">🎯</span>
                        <div class="quick-action-title">Projet Personnalisé</div>
                        <div class="quick-action-desc">3 questions, conseils sur mesure</div>
                    </div>
                    <div class="quick-action" onclick="showFinancingCalculator()">
                        <span class="quick-action-icon">🧮</span>
                        <div class="quick-action-title">Simulateur</div>
                        <div class="quick-action-desc">Mensualités, frais</div>
                    </div>
                    <div class="quick-action" onclick="startChatbotVisitFlow()">
                        <span class="quick-action-icon">📅</span>
                        <div class="quick-action-title">Visiter</div>
                        <div class="quick-action-desc">Calendrier intégré</div>
                    </div>
                </div>
            `;
            
            addChatbotBotMessage(welcomeMessage);
        }

        function initializeServicesConversation() {
            const welcomeMessage = `
                <p>👋 Bonjour ! Je suis ARIA, votre assistante virtuelle en immobilier.</p>
                <p>Découvrez tous nos services immobiliers :</p>
                
                <div class="quick-actions">
                    <div class="quick-action" onclick="redirectToService('estimation')">
                        <span class="quick-action-icon">💎</span>
                        <div class="quick-action-title">Estimation Gratuite</div>
                        <div class="quick-action-desc">En 3 clics</div>
                    </div>
                    <div class="quick-action" onclick="redirectToService('vendre')">
                        <span class="quick-action-icon">🚀</span>
                        <div class="quick-action-title">Vendre Rapidement</div>
                        <div class="quick-action-desc">Accompagnement</div>
                    </div>
                    <div class="quick-action" onclick="redirectToService('recherche')">
                        <span class="quick-action-icon">🔍</span>
                        <div class="quick-action-title">Rechercher un bien</div>
                        <div class="quick-action-desc">Sur mesure</div>
                    </div>
                    <div class="quick-action" onclick="redirectToService('conseil')">
                        <span class="quick-action-icon">📊</span>
                        <div class="quick-action-title">Conseils Experts</div>
                        <div class="quick-action-desc">Gratuits</div>
                    </div>
                </div>
            `;
            
            addChatbotBotMessage(welcomeMessage);
        }

        function redirectToService(service) {
            const serviceNames = {
                'estimation': 'Estimation gratuite',
                'recherche': 'Recherche personnalisée',
                'vendre': 'Vendre rapidement',
                'conseil': 'Conseils experts'
            };
            
            addChatbotUserMessage(`${serviceNames[service]}`);
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>Excellent choix ! Notre service "${serviceNames[service]}" est à votre disposition.</p>
                    <p>📞 Contactez directement ${CHATBOT_AGENCY_CONFIG.agentName} au ${CHATBOT_AGENCY_CONFIG.agentPhone}</p>
                    <p>Ou visitez notre site : <strong>www.immotransac.re</strong></p>
                `);
            });
        }

        function addChatbotBotMessage(content) {
            const container = document.getElementById('messagesContainer');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message bot';
            messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
            container.appendChild(messageDiv);
            scrollChatbotToBottom();
        }

        function addChatbotUserMessage(content) {
            const container = document.getElementById('messagesContainer');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user';
            messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
            container.appendChild(messageDiv);
            scrollChatbotToBottom();
        }

        function showChatbotTypingIndicator(callback) {
            const container = document.getElementById('messagesContainer');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot typing-indicator';
            typingDiv.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            container.appendChild(typingDiv);
            scrollChatbotToBottom();

            setTimeout(() => {
                typingDiv.remove();
                if (callback) callback();
            }, 1500);
        }

        function scrollChatbotToBottom() {
            const container = document.getElementById('messagesContainer');
            setTimeout(() => {
                container.scrollTop = container.scrollHeight;
            }, 100);
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendChatMessage();
            }
        }

        function sendChatMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            addChatbotUserMessage(message);
            input.value = '';
            
            processChatbotUserMessage(message);
        }

        function processChatbotUserMessage(message) {
            if (CHATBOT_STATE.currentMode === 'property') {
                processChatbotPropertyMessage(message);
            } else {
                processChatbotServicesMessage(message);
            }
        }

        function processChatbotPropertyMessage(message) {
            showChatbotTypingIndicator(() => {
                const lowerMessage = message.toLowerCase();
                
                if (lowerMessage.includes('prix') || lowerMessage.includes('combien') || lowerMessage.includes('coût')) {
                    askChatbotAbout('prix');
                } else if (lowerMessage.includes('surface') || lowerMessage.includes('m²') || lowerMessage.includes('taille')) {
                    askChatbotAbout('surfaces');
                } else if (lowerMessage.includes('chambre') || lowerMessage.includes('pièce')) {
                    askChatbotAbout('pièces');
                } else if (lowerMessage.includes('localisation') || lowerMessage.includes('où') || lowerMessage.includes('quartier')) {
                    askChatbotAbout('localisation');
                } else if (lowerMessage.includes('visite')) {
                    startChatbotVisitFlow();
                } else if (lowerMessage.includes('meublee') || lowerMessage.includes('meublé')) {
                    askChatbotAbout('meublée');
                } else {
                    addChatbotBotMessage(`
                        <p>Je comprends votre question. Voici ce que je peux vous dire sur ce bien :</p>
                        <p>C'est une magnifique maison de ${CHATBOT_PROPERTY_DATA.surfaceHabitable}m² à Saint-François, vendue entièrement meublée à ${formatChatbotPrice(CHATBOT_PROPERTY_DATA.prix.fai)}.</p>
                        <p>Sur quoi souhaitez-vous plus de détails ?</p>
                    `);
                    
                    showChatbotQuickResponses([
                        { text: "🏡 Caractéristiques", action: () => askChatbotAbout('détails complets') },
                        { text: "📍 Localisation", action: () => askChatbotAbout('localisation') },
                        { text: "📅 Organiser visite", action: () => startChatbotVisitFlow() }
                    ]);
                }
            });
        }

        function processChatbotServicesMessage(message) {
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>Je comprends votre intérêt. Nos services incluent l'estimation, la recherche personnalisée, et bien plus.</p>
                    <p>Quel service vous intéresse ?</p>
                `);
                
                showChatbotQuickResponses([
                    { text: "💎 Estimation", action: () => redirectToService('estimation') },
                    { text: "🔍 Recherche", action: () => redirectToService('recherche') },
                    { text: "🏡 Retour au bien", action: () => switchMode('property') }
                ]);
            });
        }

        function askChatbotAbout(topic) {
            addChatbotUserMessage(`Je voudrais en savoir plus sur ${topic}`);
            
            showChatbotTypingIndicator(() => {
                switch(topic) {
                    case 'détails complets':
                        addChatbotBotMessage(`
                            <div class="property-feature-card">
                                <div class="feature-header">🏡 Caractéristiques complètes</div>
                                <ul class="feature-list">
                                    <li>Type : ${CHATBOT_PROPERTY_DATA.type}</li>
                                    <li>Surface habitable : ${CHATBOT_PROPERTY_DATA.surfaceHabitable}m²</li>
                                    <li>Terrain : ${CHATBOT_PROPERTY_DATA.terrain.surface}m² ${CHATBOT_PROPERTY_DATA.terrain.caracteristiques}</li>
                                    <li>Terrasse privative avec banquette</li>
                                    <li>Balcon végétalisé suspendu</li>
                                    <li>Vendue entièrement meublée</li>
                                </ul>
                            </div>
                            <p>Cette maison offre un cadre de vie exceptionnel avec tous les avantages du meublé.</p>
                        `);
                        break;
                        
                    case 'prix':
                        addChatbotBotMessage(`
                            <p>💰 Cette magnifique propriété est proposée à <strong>${formatChatbotPrice(CHATBOT_PROPERTY_DATA.prix.fai)}</strong> FAI.</p>
                            <p>Un prix exceptionnel pour une maison <strong>vendue entièrement meublée</strong> à Saint-François !</p>
                            <p>Idéal pour primo-accédant ou investissement locatif.</p>
                        `);
                        break;
                        
                    case 'surfaces':
                        addChatbotBotMessage(`
                            <div class="property-feature-card">
                                <div class="feature-header">📏 Répartition des surfaces</div>
                                <ul class="feature-list">
                                    <li>Surface habitable : ${CHATBOT_PROPERTY_DATA.surfaceHabitable}m²</li>
                                    <li>Séjour lumineux : ${CHATBOT_PROPERTY_DATA.sejour.surface}m²</li>
                                    <li>2 chambres à l'étage avec balcons</li>
                                    <li>Terrasse privative attenante</li>
                                    <li>Terrain : ${CHATBOT_PROPERTY_DATA.terrain.surface}m²</li>
                                </ul>
                            </div>
                            <p>Des espaces optimisés pour une vie confortable !</p>
                        `);
                        break;
                        
                    case 'pièces':
                        addChatbotBotMessage(`
                            <div class="property-feature-card">
                                <div class="feature-header">🛏️ Distribution des pièces</div>
                                <ul class="feature-list">
                                    <li>Séjour/salon traversant et lumineux</li>
                                    <li>Cuisine ouverte équipée (plaques, hotte, réfrigérateur)</li>
                                    <li>2 chambres à l'étage (12m² et 10m²)</li>
                                    <li>Salle d'eau avec douche italienne</li>
                                    <li>WC séparé au rez-de-chaussée</li>
                                    <li>Terrasse privative avec banquette intégrée</li>
                                    <li>Balcon végétalisé accessible depuis les chambres</li>
                                </ul>
                            </div>
                        `);
                        break;
                        
                    case 'localisation':
                        addChatbotBotMessage(`
                            <div class="property-feature-card">
                                <div class="feature-header">📍 Localisation privilégiée</div>
                                <ul class="feature-list">
                                    <li>Ville : ${CHATBOT_PROPERTY_DATA.ville}</li>
                                    <li>Quartier : ${CHATBOT_PROPERTY_DATA.quartier} (Bas de Saint-François)</li>
                                    <li>Environnement : ${CHATBOT_PROPERTY_DATA.typeQuartier}</li>
                                    ${CHATBOT_CUSTOM_RESPONSES.proximite.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <p>Un emplacement idéal alliant tranquillité et proximité des commodités !</p>
                        `);
                        break;
                        
                    case 'atouts':
                        addChatbotBotMessage(`
                            <div class="property-feature-card">
                                <div class="feature-header">✨ Les atouts majeurs</div>
                                <ul class="feature-list">
                                    <li>${CHATBOT_PROPERTY_DATA.atouts.principal}</li>
                                    <li>${CHATBOT_PROPERTY_DATA.atouts.secondaire}</li>
                                    <li>${CHATBOT_PROPERTY_DATA.atouts.troisieme}</li>
                                    <li>Climatisation 2 unités</li>
                                    <li>Volets roulants</li>
                                    <li>Finitions soignées</li>
                                    <li>Aucun travaux à prévoir</li>
                                </ul>
                            </div>
                            <p>Un bien d'exception prêt à habiter !</p>
                        `);
                        break;
                        
                    case 'meublée':
                        addChatbotBotMessage(`
                            <p>🏠 Cette maison est vendue <strong>entièrement meublée</strong> !</p>
                            <p>Tous les meubles et équipements sont inclus dans le prix :</p>
                            <ul class="feature-list">
                                <li>Mobilier de toutes les pièces</li>
                                <li>Électroménager complet</li>
                                <li>Éléments de décoration</li>
                                <li>Prêt à habiter immédiatement</li>
                            </ul>
                            <p>Un vrai plus pour un investissement ou un emménagement rapide !</p>
                        `);
                        break;
                }
                
                setTimeout(() => {
                    showChatbotQuickResponses([
                        { text: "📅 Organiser une visite", action: () => startChatbotVisitFlow() },
                        { text: "💬 Autre question", action: () => hideChatbotResponseArea() },
                        { text: "✨ Voir nos services", action: () => switchMode('services') }
                    ]);
                }, 500);
            });
        }

        function startChatbotVisitFlow() {
            addChatbotUserMessage("Je souhaite organiser une visite");
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>📅 Parfait ! Je serais ravie d'organiser votre visite de cette magnifique propriété.</p>
                    <p>Pour cela, j'ai besoin de quelques informations :</p>
                `);
                
                showChatbotContactForm();
            });
        }

        function showChatbotContactForm() {
            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = `
                <div class="contact-form">
                    <div class="form-input">
                        <label>👤 Nom complet</label>
                        <input type="text" id="contactName" placeholder="Jean Dupont">
                    </div>
                    
                    <div class="form-input">
                        <label>📧 Email</label>
                        <input type="email" id="contactEmail" placeholder="jean.dupont@email.com">
                    </div>
                    
                    <div class="form-input">
                        <label>📱 Téléphone</label>
                        <input type="tel" id="contactPhone" placeholder="0692 12 34 56">
                    </div>
                    
                    <div class="form-input">
                        <label>💬 Message (optionnel)</label>
                        <textarea id="contactMessage" rows="3" placeholder="Vos disponibilités ou questions..."></textarea>
                    </div>
                    
                    <button class="submit-btn" onclick="submitChatbotContact()">Envoyer ma demande</button>
                </div>
            `;
        }

        function submitChatbotContact() {
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const message = document.getElementById('contactMessage').value;
            
            if (!name || !email || !phone) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }
            
            const contactData = {
                type: 'visite',
                property: CHATBOT_PROPERTY_DATA.reference,
                propertyPrice: CHATBOT_PROPERTY_DATA.prix.fai,
                propertyLocation: `${CHATBOT_PROPERTY_DATA.ville} - ${CHATBOT_PROPERTY_DATA.quartier}`,
                contact: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                },
                timestamp: new Date().toISOString()
            };
            
            // Send to webhook
            fetch(CHATBOT_AGENCY_CONFIG.webhookContact, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            })
            .then(() => {
                hideChatbotResponseArea();
                addChatbotBotMessage(`
                    <p>✅ Parfait ! Votre demande de visite a été transmise.</p>
                    <p>Notre agent ${CHATBOT_AGENCY_CONFIG.agentName} vous contactera dans les plus brefs délais pour convenir d'un rendez-vous.</p>
                    <p>📞 Pour un contact immédiat : ${CHATBOT_AGENCY_CONFIG.agentPhone}</p>
                    <p>À très bientôt pour la visite !</p>
                `);
            })
            .catch(error => {
                console.error('Error:', error);
                addChatbotBotMessage('✅ Votre demande a été envoyée !');
            });
        }

        function showChatbotResponseArea() {
            const responseArea = document.getElementById('responseArea');
            responseArea.classList.remove('hidden');
        }

        function hideChatbotResponseArea() {
            const responseArea = document.getElementById('responseArea');
            responseArea.classList.add('hidden');
            responseArea.innerHTML = '';
        }

        function showChatbotQuickResponses(responses) {
            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = '<div class="quick-responses"></div>';
            const quickResponses = responseArea.querySelector('.quick-responses');

            responses.forEach(response => {
                const button = document.createElement('button');
                button.className = 'response-button';
                button.innerHTML = response.text;
                button.onclick = () => {
                    hideChatbotResponseArea();
                    response.action();
                };
                quickResponses.appendChild(button);
            });
        }

        function formatChatbotPrice(price) {
            return new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(price);
        }

        // Auto-ouverture du chatbot après 5 secondes
        setTimeout(() => {
            if (!CHATBOT_STATE.isOpen) {
                toggleAssistant();
            }
        }, 5000);

        // ===== SCROLL FLUIDE & ANIMATIONS ===== //
        
        // Variables pour les performances
        let scrollTimeout;
        let isScrolling = false;

        // Configuration de l'intersection observer pour les animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        // Observer pour les animations de révélation
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Animation staggered pour les éléments enfants
                    const staggerElements = entry.target.querySelectorAll('.stagger-element');
                    staggerElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('revealed');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observer pour les compteurs animés
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target);
                }
            });
        }, observerOptions);

        // Fonction pour animer les compteurs
        function animateCounter(element) {
            const target = parseInt(element.dataset.target) || 0;
            const duration = 2000;
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easedProgress * target);
                
                element.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }
            
            requestAnimationFrame(updateCounter);
        }

        // Fonction pour gérer l'effet parallaxe
        function updateParallax() {
            if (isScrolling) return;
            
            isScrolling = true;
            requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.parallax-element');
                
                parallaxElements.forEach(element => {
                    const speed = parseFloat(element.dataset.speed) || 0.5;
                    const yPos = -(scrollTop * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
                
                isScrolling = false;
            });
        }

        // Navigation sticky intelligente
        function updateNavbar() {
            const navbar = document.querySelector('.navbar');
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > 100) {
                navbar.classList.add('navbar-scrolled');
                navbar.classList.add('navbar-transform');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }

        // Gestion optimisée du scroll
        function handleScroll() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Actions immédiates (navbar)
            updateNavbar();
            
            // Actions différées (parallaxe)
            scrollTimeout = setTimeout(() => {
                updateParallax();
            }, 10);
        }

        // Fonction pour initialiser les animations au scroll
        function initializeScrollAnimations() {
            // Ajouter les classes d'animation aux éléments appropriés
            
            // Sections principales
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.add('section-transition');
                revealObserver.observe(section);
            });

            // Éléments à révéler
            const revealElements = document.querySelectorAll('.hero-specs .spec-item');
            revealElements.forEach((element, index) => {
                element.classList.add('reveal-element');
                if (index % 2 === 0) {
                    element.classList.add('slide-in-left');
                } else {
                    element.classList.add('slide-in-right');
                }
                revealObserver.observe(element);
            });

            // Cards de pièces
            const pieceCards = document.querySelectorAll('.piece-card');
            pieceCards.forEach((card, index) => {
                card.classList.add('reveal-element');
                card.classList.add('stagger-element');
                revealObserver.observe(card);
            });

            // Images avec effet parallaxe
            const heroImages = document.querySelectorAll('.hero img, .piece-image img');
            heroImages.forEach(img => {
                const container = img.parentElement;
                container.classList.add('parallax-container');
                img.classList.add('parallax-element');
                img.dataset.speed = '0.3';
            });

            // Éléments avec fade-in
            const images = document.querySelectorAll('.modal-gallery img, .carousel img');
            images.forEach(img => {
                img.classList.add('fade-in-image');
                revealObserver.observe(img);
            });

            // Compteurs (si présents)
            const counters = document.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                counter.classList.add('counter-element');
                counterObserver.observe(counter);
            });

            // Boutons avec micro-animations
            const ctaButtons = document.querySelectorAll('.btn-hero, .nav-btn-primary');
            ctaButtons.forEach(btn => {
                btn.classList.add('pulse-glow');
            });

            // Badges avec bounce
            const badges = document.querySelectorAll('.badge-nouveau, .live-badge');
            badges.forEach(badge => {
                badge.classList.add('micro-bounce');
            });
        }

        // Smooth scroll pour les liens internes
        function initializeSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Transitions page-like entre sections
        function initializePageTransitions() {
            const sections = document.querySelectorAll('section');
            
            const pageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        
                        // Effet de transition fluide
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px'
            });

            sections.forEach(section => {
                pageObserver.observe(section);
            });
        }

        // Optimisation des performances
        function optimizePerformance() {
            // Ajouter will-change aux éléments animés
            const animatedElements = document.querySelectorAll('.parallax-element, .reveal-element, .navbar');
            animatedElements.forEach(element => {
                element.classList.add('gpu-accelerated');
            });

            // Throttle pour le scroll
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        }

        // ===== FONCTIONNALITÉS AVANCÉES CHATBOT ===== //

        // 1. SYSTÈME DE PRÉ-QUALIFICATION
        function startQualificationFlow() {
            CHATBOT_STATE.isQualifying = true;
            CHATBOT_STATE.qualificationData.currentStep = 0;
            
            addChatbotUserMessage("Je veux des conseils personnalisés");
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>🎯 Parfait ! Je vais vous poser quelques questions pour vous proposer des conseils sur mesure.</p>
                    <p>Cela ne prendra que 2 minutes et vous aurez :</p>
                    <ul class="feature-list">
                        <li>Analyse de compatibilité avec ce bien</li>
                        <li>Simulation financière personnalisée</li>
                        <li>Conseils d'experts gratuits</li>
                        <li>Fiche PDF détaillée</li>
                    </ul>
                    <p>Commençons ! 🚀</p>
                `);
                
                setTimeout(() => {
                    showQualificationQuestion();
                }, 1000);
            });
        }

        function showQualificationQuestion() {
            const currentStep = CHATBOT_STATE.qualificationData.currentStep;
            const question = QUALIFICATION_QUESTIONS[currentStep];
            
            if (!question) {
                finishQualification();
                return;
            }

            addChatbotBotMessage(`
                <p><strong>${question.question}</strong></p>
                <p><small>Question ${currentStep + 1}/${QUALIFICATION_QUESTIONS.length}</small></p>
            `);

            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = '<div class="qualification-options"></div>';
            const optionsContainer = responseArea.querySelector('.qualification-options');

            question.options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'response-button qualification-btn';
                button.innerHTML = option.label;
                button.onclick = () => {
                    selectQualificationAnswer(question.id, option);
                };
                optionsContainer.appendChild(button);
            });
        }

        function selectQualificationAnswer(questionId, answer) {
            CHATBOT_STATE.qualificationData[questionId] = answer;
            addChatbotUserMessage(answer.label);
            
            hideChatbotResponseArea();
            CHATBOT_STATE.qualificationData.currentStep++;
            
            showChatbotTypingIndicator(() => {
                showQualificationQuestion();
            });
        }

        function finishQualification() {
            const data = CHATBOT_STATE.qualificationData;
            
            addChatbotBotMessage(`
                <p>✅ <strong>Analyse terminée !</strong> Voici votre profil :</p>
                <div class="property-feature-card">
                    <div class="feature-header">📊 Votre Profil Acquéreur</div>
                    <ul class="feature-list">
                        <li>Budget : ${data.budget?.label || 'Non renseigné'}</li>
                        <li>Délai : ${data.timing?.label || 'Non renseigné'}</li>
                        <li>Foyer : ${data.family?.label || 'Non renseigné'}</li>
                        <li>Objectif : ${data.motivation?.label || 'Non renseigné'}</li>
                    </ul>
                </div>
            `);

            setTimeout(() => {
                analyzeCompatibility();
            }, 1500);
        }

        function analyzeCompatibility() {
            const data = CHATBOT_STATE.qualificationData;
            const propertyPrice = CHATBOT_PROPERTY_DATA.prix.fai;
            
            let compatibility = "✅ Très compatible";
            let advice = "Ce bien correspond parfaitement à votre profil !";
            
            // Analyse du budget
            if (data.budget) {
                if (propertyPrice > data.budget.range[1]) {
                    compatibility = "⚠️ Budget à ajuster";
                    advice = "Le bien dépasse légèrement votre budget, mais des solutions de financement existent.";
                } else if (propertyPrice < data.budget.range[0]) {
                    compatibility = "💎 Excellent rapport qualité-prix";
                    advice = "Ce bien est sous votre budget, vous pourriez investir dans des améliorations !";
                }
            }

            addChatbotBotMessage(`
                <div class="property-feature-card">
                    <div class="feature-header">${compatibility}</div>
                    <p>${advice}</p>
                </div>
            `);

            setTimeout(() => {
                showPersonalizedActions();
            }, 1000);
        }

        function showPersonalizedActions() {
            showChatbotQuickResponses([
                { text: "🧮 Simuler mon financement", action: () => showFinancingCalculator() },
                { text: "📅 Réserver ma visite", action: () => showCalendarBooking() },
                { text: "📄 Recevoir la fiche PDF", action: () => sendPersonalizedPDF() },
                { text: "📞 Parler à un expert", action: () => startChatbotVisitFlow() }
            ]);
        }

        // 2. CALCULATEUR FINANCIER
        function showFinancingCalculator() {
            addChatbotUserMessage("Je veux simuler mon financement");
            
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>🧮 <strong>Simulateur de financement</strong></p>
                    <p>Prix du bien : <strong>${formatChatbotPrice(CHATBOT_PROPERTY_DATA.prix.fai)}</strong></p>
                `);
                
                showFinancingForm();
            });
        }

        function showFinancingForm() {
            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = `
                <div class="financing-calculator">
                    <div class="form-input">
                        <label>💰 Votre apport personnel</label>
                        <input type="number" id="apportInput" placeholder="50000" min="0" max="500000">
                        <small>Minimum 10% recommandé</small>
                    </div>
                    
                    <div class="form-input">
                        <label>📅 Durée du prêt (années)</label>
                        <select id="dureeInput">
                            <option value="15">15 ans</option>
                            <option value="20" selected>20 ans</option>
                            <option value="25">25 ans</option>
                            <option value="30">30 ans</option>
                        </select>
                    </div>
                    
                    <div class="form-input">
                        <label>📈 Taux d'intérêt (%)</label>
                        <input type="number" id="tauxInput" placeholder="3.5" step="0.1" min="0" max="10" value="3.5">
                        <small>Taux moyen actuel : 3.5%</small>
                    </div>
                    
                    <button class="submit-btn" onclick="calculateFinancing()">Calculer mes mensualités</button>
                </div>
            `;
        }

        function calculateFinancing() {
            const propertyPrice = CHATBOT_PROPERTY_DATA.prix.fai;
            const apport = parseFloat(document.getElementById('apportInput').value) || 0;
            const duree = parseInt(document.getElementById('dureeInput').value);
            const taux = parseFloat(document.getElementById('tauxInput').value) / 100 / 12;
            
            const capitalEmprunte = propertyPrice - apport;
            const nbMensualites = duree * 12;
            
            // Calcul mensualité
            const mensualite = capitalEmprunte * (taux * Math.pow(1 + taux, nbMensualites)) / (Math.pow(1 + taux, nbMensualites) - 1);
            
            // Frais de notaire (environ 7-8% du prix)
            const fraisNotaire = propertyPrice * 0.075;
            
            // Coût total
            const coutTotal = (mensualite * nbMensualites) + apport + fraisNotaire;
            
            hideChatbotResponseArea();
            
            addChatbotBotMessage(`
                <div class="property-feature-card">
                    <div class="feature-header">💼 Votre Simulation Financière</div>
                    <ul class="feature-list">
                        <li><strong>Mensualité : ${formatChatbotPrice(mensualite)}</strong></li>
                        <li>Capital emprunté : ${formatChatbotPrice(capitalEmprunte)}</li>
                        <li>Frais de notaire : ${formatChatbotPrice(fraisNotaire)}</li>
                        <li>Coût total : ${formatChatbotPrice(coutTotal)}</li>
                    </ul>
                    <p><small>⚠️ Simulation indicative, votre banque vous confirmera les conditions exactes.</small></p>
                </div>
            `);

            setTimeout(() => {
                showChatbotQuickResponses([
                    { text: "📅 Réserver une visite", action: () => showCalendarBooking() },
                    { text: "📊 Autres simulations", action: () => showFinancingCalculator() },
                    { text: "📞 Parler à un courtier", action: () => startChatbotVisitFlow() }
                ]);
            }, 1000);
        }

        // 3. CALENDRIER DE PRISE DE RDV
        function showCalendarBooking() {
            addChatbotUserMessage("Je veux réserver un créneau");
            
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>📅 <strong>Réservation de visite</strong></p>
                    <p>Choisissez votre créneau préféré :</p>
                `);
                
                showCalendarOptions();
            });
        }

        function showCalendarOptions() {
            const today = new Date();
            const slots = [];
            
            // Générer les créneaux des 7 prochains jours
            for (let i = 1; i <= 7; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() + i);
                
                if (date.getDay() !== 0) { // Pas le dimanche
                    slots.push({
                        date: date,
                        morning: "09h30 - 11h00",
                        afternoon: "14h30 - 16h00"
                    });
                }
            }

            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = '<div class="calendar-slots"></div>';
            const slotsContainer = responseArea.querySelector('.calendar-slots');

            slots.forEach(slot => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'calendar-day';
                dayDiv.innerHTML = `
                    <h4>${slot.date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</h4>
                    <button class="response-button slot-btn" onclick="selectTimeSlot('${slot.date.toISOString()}', '${slot.morning}')">
                        🌅 ${slot.morning}
                    </button>
                    <button class="response-button slot-btn" onclick="selectTimeSlot('${slot.date.toISOString()}', '${slot.afternoon}')">
                        🌞 ${slot.afternoon}
                    </button>
                `;
                slotsContainer.appendChild(dayDiv);
            });
        }

        function selectTimeSlot(dateString, timeSlot) {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
            });
            
            addChatbotUserMessage(`${formattedDate} à ${timeSlot}`);
            hideChatbotResponseArea();
            
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>✅ <strong>Créneau réservé !</strong></p>
                    <p>📅 ${formattedDate} de ${timeSlot}</p>
                    <p>Je vais maintenant prendre vos coordonnées pour confirmer.</p>
                `);
                
                setTimeout(() => {
                    showChatbotContactForm();
                }, 1000);
            });
        }

        // 4. ENVOI DE FICHE PDF PERSONNALISÉE
        function sendPersonalizedPDF() {
            addChatbotUserMessage("Je veux recevoir la fiche détaillée");
            
            showChatbotTypingIndicator(() => {
                addChatbotBotMessage(`
                    <p>📄 <strong>Fiche PDF Personnalisée</strong></p>
                    <p>Je vais vous envoyer par email une fiche complète contenant :</p>
                    <ul class="feature-list">
                        <li>Photos haute définition du bien</li>
                        <li>Plan détaillé et surfaces</li>
                        <li>Votre simulation financière</li>
                        <li>Analyse de quartier</li>
                        <li>Conseils personnalisés</li>
                    </ul>
                `);
                
                setTimeout(() => {
                    showEmailForm();
                }, 1000);
            });
        }

        function showEmailForm() {
            showChatbotResponseArea();
            const responseArea = document.getElementById('responseArea');
            responseArea.innerHTML = `
                <div class="email-form">
                    <div class="form-input">
                        <label>📧 Votre email</label>
                        <input type="email" id="pdfEmail" placeholder="votre.email@exemple.com">
                    </div>
                    
                    <div class="form-input">
                        <label>👤 Votre prénom</label>
                        <input type="text" id="pdfName" placeholder="Jean">
                    </div>
                    
                    <button class="submit-btn" onclick="sendPDFEmail()">📨 Envoyer la fiche PDF</button>
                </div>
            `;
        }

        function sendPDFEmail() {
            const email = document.getElementById('pdfEmail').value;
            const name = document.getElementById('pdfName').value;
            
            if (!email || !name) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Simuler l'envoi
            hideChatbotResponseArea();
            
            addChatbotBotMessage(`
                <p>✅ <strong>Fiche PDF envoyée !</strong></p>
                <p>📧 Vous allez recevoir sous quelques minutes à <strong>${email}</strong> :</p>
                <ul class="feature-list">
                    <li>Dossier complet du bien (12 pages)</li>
                    <li>Votre simulation financière</li>
                    <li>Guide de visite personnalisé</li>
                    <li>Contacts de nos partenaires (banque, notaire)</li>
                </ul>
                <p><small>💡 Pensez à vérifier vos spams !</small></p>
            `);
            
            // Envoyer les données
            const pdfData = {
                type: 'pdf_request',
                property: CHATBOT_PROPERTY_DATA.reference,
                contact: { email, name },
                qualificationData: CHATBOT_STATE.qualificationData,
                timestamp: new Date().toISOString()
            };
            
            fetch(CHATBOT_AGENCY_CONFIG.webhookContact, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pdfData)
            });
        }

        // Préchargement des images critiques
        function preloadCriticalImages() {
            const criticalImages = [
                'assets/images/IMG_9898.JPG',
                'assets/images/IMG_9899.JPG'
            ];

            criticalImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }

        // ===== INITIALIZATION ===== //
        document.addEventListener('DOMContentLoaded', () => {
            // Setup features
            setupKeyboardNavigation();
            
            // Initialiser immédiatement le carousel et les fonctionnalités
            initializeCarousel();
            
            // Initialiser les nouvelles fonctionnalités de fluidité
            initializeScrollAnimations();
            initializeSmoothScroll();
            initializePageTransitions();
            optimizePerformance();
            preloadCriticalImages();
            
            // Ajouter la classe de transformation à la navbar
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.add('navbar-transform');
            }
        });