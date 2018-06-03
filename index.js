// graph settings
var overlap = 8;
var height = 646;
var margin = ({top: 40, right: 20, bottom: 30, left: 120});

// read CSV data
d3.csv("data/data_casualty_1992-1993.csv", function(d) {
    // transform data into numbers and compute sum of affected peole
    return {
        year: Number(d['Jahr']),
        month: Number(d['Monat-Nr.']),
        hour: Number(d['Stunde-Nr.']),
        lightlyInjured: Number(d['Leichtverletzt']),
        seriouslyInjured: Number(d['Schwerverletzt']),
        dead: Number(d['Tot']),
        total: Number(d['Leichtverletzt']) + Number(d['Schwerverletzt']) + Number(d['Tot'])
    };
}).then(function(data) {
    console.log(data);

});

function reder() {
    // TODO initialize plot
}