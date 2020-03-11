var i = 0;
$("document").ready(function(){
        $("#button").click(function(){
                if(i == 0){
                $("body").append(`<p>le $ est un bon élément
                monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
                classe pour cacher cet élément.</p>`);
                }
                i++
        });
        $("#hide").click(function(){
                $("html").css("display","none");
        });
});