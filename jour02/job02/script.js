let button = document.getElementById("button");


function showhide(){
    let art_exist = document.getElementsByTagName("article");
    if(!art_exist[0]){   
        const article = document.createElement("article");
        let texte = "L'important n'est pas la chute, mais l'atterrissage";
        article.innerHTML = `${texte}`; 
        document.body.appendChild(article);
    }
    else{
        document.body.removeChild(art_exist[0]);
    }
}

button.addEventListener("click",showhide);

