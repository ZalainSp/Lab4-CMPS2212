// exercise4.js 
const editList = document.querySelector('#edit-list'); 

editList.addEventListener('dblclick', function(event) { 

const item = event.target.closest('.edit-item'); 
if (!item || item.classList.contains('editing')) return;

const originalText = item.textContent; 
item.textContent = ''; 

const input = document.createElement('input'); 
input.value = originalText; 
item.appendChild(input); 
item.classList.add('editing'); 
input.focus(); 

// -- Helper: commit the edit -- 
function commitEdit() { 
const newText = input.value.trim() || originalText; 
    item.textContent = newText;
    item.classList.remove('editing'); 
} 
// -- Helper: cancel the edit -- 
function cancelEdit() { 
    item.textContent = originalText;
    item.classList.remove('editing');
} 

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        commitEdit();
    }else if (event.key === 'Escape'){
        cancelEdit();
    }
});

input.addEventListener('blur', function() {
    commitEdit();
});
}); 