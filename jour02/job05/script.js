let barre = document.getElementById("bar");


addEventListener("scroll", function(){

        const max = document.body.scrollHeight - innerHeight;

        const pourcentage = pageYOffset / max * 100;

        barre.style.width = pourcentage + "%";

        // console.log(max);

        // console.log(`
        // Taille page: ${document.body.scrollHeight}
        // Taille affichage: ${innerHeight}
        // Position Scroll: ${pageYOffset}
        // `);
})