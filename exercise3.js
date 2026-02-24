// exercise3.js 
const filterBar  = document.querySelector('#filter-bar'); 
const cards      = document.querySelectorAll('.card'); 
const filterBtns = document.querySelectorAll('.filter-btn'); 
filterBar.addEventListener('click', function(event) { 

//check if event.target does not match .filter-btn, if true return
if (!event.target.matches('.filter-btn')) return;

//update active class on all buttons
filterBtns.forEach(btn => btn.classList.remove('active'));
event.target.classList.add('active');

//read the filter value from event.target.dataset.filter
const filter = event.target.dataset.filter;

//loop through all cards
cards.forEach(card => {
    //if filter is all remove hidden frome every card
    if (filter === 'all'){
        card.classList.remove('hidden');
    } else {
        //compare card.dataset.category to flter, add .hidden if no match
        //remove .hidden if match
        if(card.dataset.category === filter){ 
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    }
}); 
}); 