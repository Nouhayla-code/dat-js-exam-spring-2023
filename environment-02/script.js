"use strict";

// Envo-2:
// 1. Lav en liste og en funktion der, ud fra formen på hjemmesiden, kan lave et nyt athlet-objekt og gemme den i listen.
// 2. Vis de 3 hurtigste athleter på hjemmesiden.
// 3. Vis kun athleter med en topfart mellem 50 og 60.

window.addEventListener("load", start);

let athletes=[];

function start(){
    console.log("hej")

    document.querySelector("#create-athlete-form").addEventListener("submit", addAthlet)

}

function addAthlet(event){
 event.preventDefault();

 const form = event.target;
 const name= form.name.value; 
 const topSpeed= Number(form.topSpeed.value); 

 const athlete= {name,topSpeed}
 athletes.push(athlete); 
 filterTop50(athletes); 
}

function createTop3(){
    athletes.sort(sortTop3)
    const top3= athletes.slice(0,3)

    showTopThreeAthlete(top3)

}
function sortTop3(a,b){
  return b.topSpeed-a.topSpeed

}

function filterTop50(athletes){

  for(const athlete of athletes){
    if (athlete.topSpeed <50) {
        athletes.pop(athlete)
        
    }else if (athlete.topSpeed >60) {
        athletes.pop(athlete)
    }
    console.log(athletes)
 
}
 createTop3();
}

function showTopThreeAthlete(athletes){
    document.querySelector("#athlete ns-list").innerHTML=""
    for(const athlete of athletes){
    document.querySelector("#athletes-list").insertAdjacentHTML(
        "beforeend"
    , /*HTML*/ `
    
        <Li> ${athlete.name}</Li>
        <Li> ${athlete.topSpeed}</Li>
    `
    )      ;
   }

}

