const button = document.getElementById("button");
const article = document.getElementById("compteur");

let i = 1;
function addone(){
        article.innerHTML = i;
        i++;
}

button.addEventListener("click", addone);
