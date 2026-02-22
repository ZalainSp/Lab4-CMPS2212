// exercise1.js

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
         
  const trigger = event.target.closest('.accordion-trigger');
  
  if (!trigger) return;
  const item = trigger.closest('.accordion-item');
  
  const allItems = accordion.querySelectorAll('.accordion-item');
  allItems.forEach(item => {
    
      if(item !== trigger) {
        item.classList.remove('open');
      }
  });
  
  item.classList.toggle('open');
});