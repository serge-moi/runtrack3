const textarea = document.querySelector("#keylogger");

document.addEventListener("keyup", function(e){
        textarea.value += e.key;
});
