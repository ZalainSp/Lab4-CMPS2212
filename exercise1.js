// exercise1.js

const accordion = document.querySelector('.accordion');

//attach a single click listeneer to the .accordion element
accordion.addEventListener('click', function(event) {
         
  //find the closest trigger from even.target
  const trigger = event.target.closest('.accordion-trigger'); 
  
  //if null then the click was not a trigger so we return early
  if (!trigger) return;

  //frin trigger we find the closest .accordion-item
  const item = trigger.closest('.accordion-item');
  const allItems = accordion.querySelectorAll('.accordion-item');
  
  //close all accordion items
  allItems.forEach(items => {

      if(items !== item) {
        items.classList.remove('open');
      }
  });
  
  //toggle .open on the clicked item
  item.classList.toggle('open');
});