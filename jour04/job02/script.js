$("document").ready(function(){
    function jsonValueKey(str, clef){
        var str = JSON.parse(str, (key, value) => {
            if(key == clef){
                return value;
            } else {
                return false
            }
        });
    }
    jsonValueKey('{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}', "city");
});