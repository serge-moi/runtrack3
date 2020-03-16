$("document").ready(function(){
    $("#button").click(function(){
        $.ajax({
            url:"pokemon.json",
            method: "GET"
        })
        .done(function(data){
            for(let i = 0; i< data.length; i++){
                if($("#id").val() == data[i].id){
                    $("tbody").append(`<tr><td>#${data[i].id}</td><td>${data[i].name["french"]}</td><td>${data[i].type}</td></tr>`);
                }
                if(data[i].name["french"].toLowerCase().includes($("#nom").val()) || data[i].name["french"].includes($("#nom").val())){
                    $("tbody").append(`<tr><td>#${data[i].id}</td><td>${data[i].name["french"]}</td><td>${data[i].type}</td></tr>`);
                }
                if(data[i].type.includes($("#type option:selected").val())){
                    $("tbody").append(`<tr><td>#${data[i].id}</td><td>${data[i].name["french"]}</td><td>${data[i].type.join(", ")}</td></tr>`);
                }
            }
        })
    })
});