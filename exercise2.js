// exercise2.js 
const tagInput     
= document.querySelector('#tag-input'); 
const tagContainer = document.querySelector('#tag-container'); 

tagInput.addEventListener('keydown', function(event) { 
if (event.key !== 'Enter') return; 
const value = tagInput.value.trim(); 
if (!value) return; 
const tag = document.createElement('div');

tag.innerHTML = `<span class="tag-label">${value}
</span><span class="tag-remove">&times;</span>`; 

tagContainer.appendChild(tag);

tagInput.value = ''; 
}); 

tagContainer.addEventListener('click', function(event) { 
}); 

tagContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('tag-remove')) {
        event.target.parentElement.remove();
    }
});