// exercise4.js 
const editList = document.querySelector('#edit-list'); 

editList.addEventListener('dblclick', function(event) { 

//find closest .edit-item from event.target and return if null, 
//return early if the item already has an .editing class to prevent nested edits
const item = event.target.closest('.edit-item'); 
if (!item || item.classList.contains('editing')) return;


//save the current text and replace the items content with an input field
const originalText = item.textContent; 
item.textContent = ''; 
const input = document.createElement('input'); 
input.value = originalText; 
item.appendChild(input); 
item.classList.add('editing'); 
input.focus(); 

// -- Helper: save the typed text and exit edit mode-- 
function commitEdit() { 
const newText = input.value.trim() || originalText; 

item.textContent = newText;
item.classList.remove('editing'); 
} 
// -- Helper: revert back to original text and edit mode-- 
function cancelEdit() { 
item.textContent = originalText;
item.classList.remove('editing');
} 

//listen for enter to save or escape to cancel, key presses
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        commitEdit();
    }else if (event.key === 'Escape'){
        cancelEdit();
    }
});

//save automctically if the user clicks anywhere else on the page
input.addEventListener('blur', function() {
    commitEdit();
});
}); 