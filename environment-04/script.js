"use strict";


window.addEventListener("load", start)

let tickets=[]; 

function start(){
    document.querySelector("#create-event-form").addEventListener("submit", addTickets)
}

function addTickets(event){
    event.preventDefault(); 
    const form=event.target;
    const title=form.title.value; 
    const description=form.description.value; 
    const date=form.date.value; 

    const ticket={title,description,date}

    tickets.push(ticket)

    console.log(tickets)

}