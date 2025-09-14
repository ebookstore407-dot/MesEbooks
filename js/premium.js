paypal.Buttons({
    // Configuration du style
    style: {
        color: 'blue',
        shape: 'rect',
        layout: 'vertical'
    },
    
    // Configurer la transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '9.99',
                    currency_code: 'EUR'
                },
                description: 'eBook Premium'
            }]
        });
    },
    
    // Finaliser la transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Afficher un message de succès
            alert('Transaction réussie! Merci ' + details.payer.name.given_name);
            
            // Ici vous pouvez ajouter la logique pour donner accès à l'eBook
            // Par exemple, rediriger vers une page de téléchargement
            // window.location.href = 'download.html?order=' + details.id;
        });
    },
    
    // Gérer les erreurs
    onError: function(err) {
        console.error('Erreur:', err);
        alert('Une erreur est survenue lors de la transaction.');
    }
}).render('#paypal-button-container');