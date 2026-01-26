const text = "Jordan Gaillet.";
let index = 0;
const textTypeWriter = document.getElementById('typewriter');

function type() {
    if (index < text.length) {
        textTypeWriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

document.querySelectorAll('.skills-card').forEach(card => {
    card.addEventListener('click', () => {
        const content = card.querySelector('.skill-content');
        const icon = card.querySelector('i');

        if (content.style.height === '0px' || content.style.height === '') {
            content.style.height = content.scrollHeight + 'px';
            icon.classList.remove('reverse');
            icon.classList.add('rotate');
        } else {
            content.style.height = '0px';
            icon.classList.remove('rotate');
            icon.classList.add('reverse');
        }
    });
});

// Project Details Data
const projectDetails = {
    deeptrust: {
        title: "DeepTrust - Protection contre les Deepfakes",
        content: `
            <h3>🏆 Projet ESP Epitech sélectionné</h3>
            <img src="img/deeptrust.jpeg" alt="DeepTrust">
            
            <h3>À propos du projet</h3>
            <p>DeepTrust est une solution de cybersécurité innovante sélectionnée parmi les meilleurs projets de fin d'études (End of Study Project). Face à la menace grandissante des deepfakes, nous développons une extension de navigateur capable de sécuriser les appels vidéo en temps réel.</p>
            
            <h3>Fonctionnalités & Objectifs</h3>
            <p>L'objectif est de créer une protection universelle qui s'intègre aux plateformes de visioconférence.
            <br>Pour y parvenir, nous concevons et entraînons <strong>notre propre modèle d'Intelligence Artificielle</strong> spécialisé dans la détection d'anomalies audio et vidéo (artefacts de génération, incohérences biométriques) pour alerter l'utilisateur instantanément en cas de trucage présumé.</p>
            
            <h3>Technologies utilisées</h3>
            <p>
                <span class="label-ia">Training IA (PyTorch)</span>
                <span class="label-python">Python</span>
                <span class="label-js">Extensions Web</span>
                <span class="label-cybersec">Cybersécurité</span>
            </p>
            
            <h3>Mon rôle (Fondateur & Chef de Projet)</h3>
            <p>En tant que porteur du projet sélectionné, j'assure le leadership d'une <strong>équipe de 8 développeurs</strong>.
            <br>Je pilote la vision produit, la coordination technique et la stratégie d'entraînement de nos modèles IA, tout en participant activement au développement du cœur de la solution.</p>
        `
    },
    scanner: {
        title: "Scanner de Vulnérabilité Web",
        content: `
            <img src="img/vuln_scanner.jpeg" alt="Scanner de vulnérabilité">

            <h3>À propos du projet</h3>
            <p><strong>Projet Personnel.</strong> Développement d'un outil d'analyse de sécurité offensif (Pentesting) permettant d'automatiser la phase de reconnaissance et de détection des vulnérabilités sur une cible web, générant des rapports d'audit exploitables.</p>

            <h3>Fonctionnalités & Objectifs</h3>
            <p>L'outil orchestre plusieurs modules d'analyse pour fournir une vue complète de la surface d'attaque :
            <br>- <strong>Scan Réseau & Services :</strong> Identification des ports ouverts et fingerprinting des services.
            <br>- <strong>Analyse Web :</strong> Inspection des en-têtes HTTP de sécurité, détection des technologies (CMS, Frameworks) et crawl des endpoints.
            <br>- <strong>Détection de Failles :</strong> Recherche automatisée des vulnérabilités courantes (Top 10 OWASP) et mauvaise configurations.</p>

            <h3>Technologies utilisées</h3>
            <p>
                <span class="label-python">Python (Backend/Scan)</span>
                <span class="label-next">Next.js (Interface)</span>
                <span class="label-cybersec">SecTools Integration</span>
            </p>
            
            <h3>Mon rôle</h3>
            <p>Développeur Full-Stack du projet. J'ai implémenté le moteur de scan en Python (scripting réseau) et conçu l'interface de reporting pour rendre les données techniques lisibles et actionnables.</p>
        `
    },
    jo: {
        title: "Application Web - Billetterie JO",
        content: `
            <img src="img/JO.png" alt="Application JO">

            <h3>À propos du projet</h3>
            <p><strong>Projet Universitaire (Bachelor).</strong> L'objectif était de concevoir une plateforme e-commerce complète et sécurisée pour la gestion de la billetterie des Jeux Olympiques, gérant des flux transactionnels et des fortes contraintes de trafic.</p>

            <h3>Fonctionnalités & Objectifs</h3>
            <p>L'application gère le parcours utilisateur complet, de la sélection à l'achat sécurisé :
            <br>- <strong>Système d'Authentification :</strong> Gestion sécurisée des sessions utilisateurs et droits d'accès.
            <br>- <strong>Gestion de Panier complexe :</strong> Maintien d'état, réservation temporaire de billets et calcul dynamique.
            <br>- <strong>Paiement & Transaction :</strong> Intégration simulée d'un processus de paiement et génération de billets numériques.</p>

            <h3>Technologies utilisées</h3>
            <p>
                <span class="label-java">Java / JEE</span>
                <span class="label-js">React.js</span>
                <span class="label-css">CSS3 / Responsive</span>
            </p>
            
            <h3>Mon rôle</h3>
            <p>Développeur Lead sur la partie Backend (Java) et intégration Frontend. J'ai structuré la base de données et assuré la cohérence des transactions lors des commandes de billets.</p>
        `
    },
    proxmox: {
        title: "Infrastructure Cloud Hybride sous Proxmox",
        content: `
            <img src="img/Proxmox.png" alt="Infrastructure Cloud Hybride">

            <h3>À propos du projet</h3>
            <p>Conception et déploiement d'une infrastructure hybride évolutive et hautement sécurisée (janv. 2026 - aujourd’hui). Ce projet repose sur la mise en place d'un socle technique robuste capable d'accueillir de futurs sites de manière standardisée et résiliente.</p>

            <h3>Fonctionnalités & Architecture</h3>
            <p>Le système repose sur l'interconnexion de deux sites virtualisés via Proxmox VE :
            <br>- <strong>Connectivité Sécurisée :</strong> Tunnel VPN Site-à-Site chiffré pour relier les environnements locaux et distants.
            <br>- <strong>Défense en Profondeur :</strong> Segmentation réseau, pare-feu pfSense en bordure, Bastion d'administration et "Kill Switch" d'urgence.
            <br>- <strong>Approche GitOps :</strong> L'infrastructure est gérée comme du code (IaC) avec une documentation technique complète (IPAM NetBox, DRP/Runbooks).</p>

            <h3>Technologies utilisées</h3>
            <p>
                <span class="label-proxmox">Proxmox VE</span>
                <span class="label-pfsense">pfSense / VPN</span>
                <span class="label-cloud">GitOps / IaC</span>
                <span class="label-elastic">Elastic Stack</span>
            </p>

            <h3>Mon rôle</h3>
            <p>J'ai conçu l'intégralité de l'architecture réseau et système. J'ai déployé les hyperviseurs, configuré les politiques de sécurité (Firewalling) et mis en place les outils de supervision centralisée (Logs/Métriques).</p>
        `
    }
};

// Handle project card clicks
document.querySelectorAll('.project-card.clickable').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectDetails[projectId];

        if (project) {
            const detailPanel = document.querySelector('.project-detail-panel');
            document.getElementById('detail-title').textContent = project.title;
            document.getElementById('detail-body').innerHTML = project.content;

            // Reset scroll position of the detail panel
            detailPanel.scrollTop = 0;

            document.querySelector('.main-wrapper').classList.add('show-detail');
        }
    });
});

// Handle close button
document.querySelector('.close-detail-btn').addEventListener('click', () => {
    document.querySelector('.main-wrapper').classList.remove('show-detail');
});

