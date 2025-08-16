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

        // ===== INITIALIZATION ===== //
        document.addEventListener('DOMContentLoaded', () => {
            // Setup features
            setupKeyboardNavigation();
            
            // Initialiser immédiatement le carousel et les fonctionnalités
            initializeCarousel();
        });