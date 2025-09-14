document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        // Citations existantes
        { text: "La lecture est une porte ouverte sur un monde enchanté", author: "François Mauriac" },
        { text: "Les livres sont des amis silencieux qui nous rendent plus sages", author: "Victor Hugo" },
        { text: "Un livre est un rêve que vous tenez dans vos mains", author: "Neil Gaiman" },
        { text: "La lecture est à l'esprit ce que l'exercice est au corps", author: "Joseph Addison" },
        { text: "Un lecteur vit mille vies avant de mourir", author: "George R.R. Martin" },
        { text: "Les bons livres font les bons amis", author: "Victor Hugo" },
        { text: "Lire, c'est boire et manger", author: "Victor Hugo" },
        { text: "La lecture enrichit l'esprit", author: "Voltaire" },
        { text: "Un livre est une fenêtre par laquelle on s'évade", author: "Julien Green" },
        { text: "La lecture est une amitié", author: "Marcel Proust" },

        // 40 nouvelles citations
        { text: "Les livres nous permettent de naviguer dans le temps", author: "Carl Sagan" },
        { text: "La lecture est un voyage de l'esprit", author: "Victor Hugo" },
        { text: "Un livre doit être la hache qui brise la mer gelée en nous", author: "Franz Kafka" },
        { text: "Les grands lecteurs deviendront de grands hommes", author: "Denis Diderot" },
        { text: "La lecture est le pain quotidien de l'esprit", author: "Antoine de Rivarol" },
        { text: "Un livre est une bouteille jetée à la mer", author: "Victor Hugo" },
        { text: "Lire, c'est voyager; voyager, c'est lire", author: "Victor Hugo" },
        { text: "Les livres sont les miroirs de l'âme", author: "Virginia Woolf" },
        { text: "La lecture est une conversation avec les plus honnêtes gens des siècles passés", author: "René Descartes" },
        { text: "Un livre est un outil de liberté", author: "Jean Guéhenno" },
        { text: "La lecture est le plus court chemin vers l'excellence", author: "Sénèque" },
        { text: "Les livres sont des vaisseaux qui voyagent sur les mers du temps", author: "Francis Bacon" },
        { text: "Un bon livre est un bon ami", author: "Jacques-Henri Bernardin de Saint-Pierre" },
        { text: "La lecture est une seconde vie", author: "Marcel Proust" },
        { text: "Les livres nous font vivre plusieurs vies en une seule", author: "Christopher Paolini" },
        { text: "Un livre est une âme qui parle à une autre âme", author: "Alphonse de Lamartine" },
        { text: "La lecture est le seul moyen de vivre plusieurs fois", author: "Pierre Dumayet" },
        { text: "Les livres sont les gardiens du savoir", author: "Stephen King" },
        { text: "La lecture est une forme de bonheur", author: "Jorge Luis Borges" },
        { text: "Un livre est un monde en soi", author: "William Wordsworth" },
        { text: "La lecture nourrit les rêves", author: "Marc Levy" },
        { text: "Les livres sont les phares de la civilisation", author: "Victor Hugo" },
        { text: "La lecture est une fête de l'esprit", author: "Jacques Sternberg" },
        { text: "Un bon livre n'a pas de fin", author: "R.D. Cumming" },
        { text: "La lecture est une passion qui s'enrichit", author: "Daniel Pennac" },
        { text: "Les livres sont les amis de la solitude", author: "Charles Nodier" },
        { text: "La lecture est un dialogue infini", author: "Maurice Blanchot" },
        { text: "Un livre est un jardin que l'on porte dans sa poche", author: "Proverbe Arabe" },
        { text: "La lecture est la clé de la connaissance", author: "Confucius" },
        { text: "Les livres sont la mémoire de l'humanité", author: "Barbara Tuchman" },
        { text: "La lecture est un acte de création", author: "Jean-Paul Sartre" },
        { text: "Un livre est une voix imprimée", author: "Honoré de Balzac" },
        { text: "La lecture est une forme de résistance", author: "Daniel Pennac" },
        { text: "Les livres sont des îles de pensée", author: "Emily Dickinson" },
        { text: "La lecture est un voyage intérieur", author: "Claude Roy" },
        { text: "Un livre est une promesse de bonheur", author: "Stendhal" },
        { text: "La lecture est la respiration de l'âme", author: "André Malraux" },
        { text: "Les livres sont des fenêtres sur le monde", author: "Andrea Levy" },
        { text: "La lecture est le plus beau des voyages", author: "Alexandre Jardin" },
        { text: "Un livre est un ami qui ne trahit jamais", author: "Francis Bacon" }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    let currentQuote = 0;

    function updateQuote() {
        const quote = quotes[currentQuote];

        // Fade out
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            // Update content
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author;

            // Fade in
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 500); // Match the duration of the CSS fade-out transition
    }

    function nextQuote() {
        currentQuote = (currentQuote + 1) % quotes.length;
        updateQuote();
    }

    // Initial update
    updateQuote();

    // Change quote every 6 seconds
    setInterval(nextQuote, 6000);
});
