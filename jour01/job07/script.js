
let date2 = new Date("12 25 2020");

function jourtravaille(date){
    var tab_mois=["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let week = date.getDay();
    let jour = date.getDate();
    let mois = tab_mois[date.getMonth()];
    let annee = date.getFullYear();
    let date2 = (jour+" "+mois+" "+annee);
    let ferie = ["1 Janvier 2020", "13 Avril 2020", "1 Mai 2020", "8 Mai 2020", "21 Mai 2020", "1 Juin 2020", "14 Juillet 2020", "15 Aout 2020", "1 Novembre 2020", "11 Novembre 2020", "25 Décembre 2020"];
    console.log(date2);
    if(ferie.includes(date2)){
        console.log(`Le ${date2} est un jour férié`);
    } else if(week == 0 || week == 6){
        console.log(`Non, le ${date2} est un week-end`);
    } else if (!ferie.includes(date2)){
        console.log(`Oui, le ${date2} est un jour travaillé`);
    }
}

jourtravaille(date2);















    // switch(mois){
    //     case 1 : "Janvier";
    //     break;
    //     case 2 : "Février";
    //     break;
    //     case 3 : "Mars";
    //     break;
    //     case 4 : "Avril";
    //     break;
    //     case 5: "Mai";
    //     break;
    //     case 6: "Juin";
    //     break;
    //     case 7: "Juillet";
    //     break;
    //     case 8: "Aout";
    //     break;
    //     case 9: "Septembre";
    //     break;
    //     case 10: "Octobre";
    //     break;
    //     case 11: "Novembre";
    //     break;
    //     case 12: "Decembre";
    //     break;
    // }   