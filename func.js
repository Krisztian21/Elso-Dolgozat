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

function osztalytoltes()
{
    let table="<table><tr><th>név</th><th>osztály</th></tr>";
    for(let i=0; i<diakok.length; i++){
    table+="<tr>";
    table+="<td>"+diakok[i].nev+"</td>";
    table+="<td>"+diakok[i].osztaly+"</td>";
    table+="</tr>";
}
    table+="</table>";
    document.getElementById("táblázat").innerHTML=table;
}
function feltolt(){
    let nev=document.getElementById('nev').value;
    let osztaly=document.getElementById('osztaly').value;
    //console.log(nev+' '+osztaly);
    let nevTomb=[];
    diakok.forEach((diakok)=>{
        nevTomb.push(diakok.nev);
    });
    if(nevTomb.includes(nev)){
        window.alert('Ez a név szerepel már a listában!');
    }
    else{
        diakok.push({'osztaly': `${osztaly}`, 'nev': `${nev}`});
    }
    /*let eldont=false;
    diakok.forEach((diakok)=>{
        if(diakok.nev==nev){
            eldont=true;
            return;
        }
        /*window.alert('Ez a név szerepel már a listában!');
        return;
    });
    if(eldont){
        window.alert('Ez a név szerepel már a listában!');
    }
    else{
        diakok.push({'osztaly': `${osztaly}`, 'nev': `${nev}`});
    }*/
    osztalytoltes();
}
feltolt();

function torol()
{
    diakok.pop();
    osztalytoltes();
}