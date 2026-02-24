// exercise2.js 
const tagInput     = document.querySelector('#tag-input'); 
const tagContainer = document.querySelector('#tag-container'); 

//add tag for when user presses enter in the input
tagInput.addEventListener('keydown', function(event) { 
if (event.key !== 'Enter') return; 
const value = tagInput.value.trim(); 
if (!value) return; 

//create div with the class "tag"
const tag = document.createElement('div');
tag.classList.add('tag');

//set the innerHTML to include the label text and a x button
tag.innerHTML = `<span class="tag-label">${value}
</span><span class="tag-remove">&times;</span>`; 

//append the tag to tagContainer
tagContainer.appendChild(tag);

//clear the input
tagInput.value = ''; 
}); 

//remove the tag when x button is clicked
tagContainer.addEventListener('click', function(event) {
    //check event.target.matches if it has the class .tag-remove
    if(event.target.matches('.tag-remove')) {
        //if true call closest tag and remove it
        event.target.closest('.tag').remove();
    }
});