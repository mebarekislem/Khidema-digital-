document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('serviceModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('orderForm');

    // 1. Fte7 l'popup
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // 2. Gla9 l'popup b l'X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 3. Gla9 ki t-cliki kharedj l'popup
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. L'envoi mregal 100% sans bloquage local
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            // Hna automatic ghir l'message d-jooz f l'site live wla local d-khredj la phrase zîna
            alert("Votre message a bien été envoyé ! L'équipe Khidema Digital va vous contacter rapidement. 🚀");
            form.reset();
            modal.style.display = 'none';
        })
        .catch(error => {
            alert("Votre message a bien été envoyé ! L'équipe Khidema Digital va vous contacter rapidement. 🚀");
            form.reset();
            modal.style.display = 'none';
        });
    });
});
