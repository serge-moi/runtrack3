$("document").ready(function(){

        const win = $("#win");
        const lose = $("#lose");

        function checkWin(){
                let i = 0;
                while(i < 6){
                        var numb = $("#rangees").children()[i];
                        if(!numb || $(numb).attr("src") !== `img/arc${i+1}.png` ){
                                return false;
                        }
                        i++;
                }
                return true;
        }
        // console.log(arc[0]);
        function shuffle(arc){
                for(i = 0; i < arc.length; i++){
                        const random = Math.floor(Math.random()*arc.length);
                        [arc[i], arc[random]] = [arc[random], arc[i]]; 
                }
                return arc;
        }
        
        $("#button").click(function(){
                shuffle($("img")).appendTo("#melangees");
                win.css("display","none");
                lose.css("display","none");
                $("#winart").css("display","none");
        });
        // console.log(shuffle(arc));
        $("img").click(function(){                
                if($(this).parent().attr("id") == "melangees"){
                $(this).appendTo("#rangees");
                if($("#melangees").children().length === 0){
                        if (checkWin()){
                                $("main").append("<article></article>");
                                $("article").attr("id", "winart");
                                $("#winart").css("display","block");
                                win.css("display","block");
                        } else{
                                $("main").append("<article></article>");
                                $("article").attr("id", "winart");
                                $("#winart").css("display","block");
                                lose.css("display","block");
                        }
                }
        }
        });
        console.log($("rangees"));
});

