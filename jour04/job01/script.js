$("document").ready(function(){    
    $("#button").click(function(){
        $.ajax({
            url:"expression.txt",
            dataType: "text",
        })
        .done(function(data){
            var citation = `<p>${data}</p>`;
            $("section").append(citation);
        })
    })
});