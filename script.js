document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Reveal Animation Logic
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Form Submission Handling (Email to Admin + WhatsApp to Partner 0561390155 + Form Reset)
    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Récupération de toutes les valeurs
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const telephone = document.getElementById('telephone').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;

            // Formatage du message WhatsApp pour le partenaire
            const message = `🛒 *Nouvelle Commande - Khidema Digital*%0A\n` +
                            `👤 *Nom:* ${nom}%0A` +
                            `👥 *Prénom:* ${prenom}%0A` +
                            `📞 *Téléphone:* ${telephone}%0A` +
                            `📧 *Email:* ${email}%0A` +
                            `🛠️ *Service choisi:* ${service}`;

            // Numéro WhatsApp du partenaire (0561390155)
            const partnerNum = "213561390155";
            const whatsappUrl = `https://wa.me/${partnerNum}?text=${message}`;

            // Envoi des données via Formspree en arrière-plan (vers votre email)
            const formData = new FormData(orderForm);
            
            try {
                fetch(orderForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).catch(err => console.log('Email error:', err));
            } catch (error) {
                console.log(error);
            }

            // Vider/Effacer tous les champs du formulaire (Reset)
            orderForm.reset();

            // Rediriger le client vers le WhatsApp du partenaire
            setTimeout(() => {
                window.location.href = whatsappUrl;
            }, 300);
        });
    }
});
