const arrayCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyQ"];

let i = 0;

function konami(e){
        if(e.code == arrayCode[i]){
                // console.log(e.code);
        i++;
                if(i == 10){
                let image = document.createElement("img");
                image.setAttribute("src", "laplateforme.png");
                document.body.appendChild(image);
                document.body.style.display = "flex";
                document.body.style.justifyContent = "center";
                document.body.style.alignItems = "center";
                document.body.style.height = "-webkit-fill-available";
                document.body.style.backgroundColor = "#89C2D1";
                }
        }
        else {
                i = 0;
        }
}


addEventListener("keyup", konami);