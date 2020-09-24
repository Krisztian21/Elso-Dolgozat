'use strict';

const diakok=[
    {"nev": "Tóth Balázs", "osztaly": "14SZF"},
    {"nev": "Börcsög Dávid", "osztaly": "14SZF"},
    {"nev": "Szabó Levente", "osztaly": "14SZF"},
    {"nev": "Pásztor Krisztián József", "osztaly": "14SZF"},
    {"nev": "Visnyei Ádám", "osztaly": "14SZF"},
    {"nev": "Kucsera Kinga", "osztaly": "14SZF"},
    {"nev": "Kiss Laci", "osztaly": "14SZF"},
    {"nev": "Németh Christopher", "osztaly": "14SZF"},
];

let table="<table><tr><th>név</th><th>osztály</th></tr>";
for(let i=0; i<diakok.length; i++){
table+="<tr>";
table+="<td>"+diakok[i].nev+"</td>";
table+="<td>"+diakok[i].osztaly+"</td>";
table+="</tr>";
}
table+="</table>";
document.getElementById("táblázat").innerHTML=table;
function feltolt(){
    let nev=document.getElementById('nev').value;
    let osztaly=document.getElementById('osztaly').value;
    console.log(nev+' '+osztaly);
    diakok.push({'osztaly': `${osztaly}`, 'nev': `${nev}`})

}
feltolt();