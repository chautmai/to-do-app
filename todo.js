let inputField = document.getElementById('inputField');
let addItem = document.getElementById('add-item');
let toDoContainer = document.getElementById('to-do-container');

let clearItems = document.getElementById('clear-items');

//adding and removing specific items
addItem.addEventListener('click', function(){
    var item = document.createElement('li');
    var span = document.createElement('span')
    
    item.innerText = inputField.value;

    //alert user if input is blank
    if (item.innerText == ''){
        alert('Input cannot be blank.');
    }
    else{
        toDoContainer.appendChild(item);
        inputField.value = '';
        item.appendChild(span)
        span.setAttribute('class', 'remove');
        span.innerText = 'X';
    }
   


    //remove button
    var close_button = document.getElementsByClassName("remove");
    var i;

    for (i = 0; i < close_button.length; i++) {
        close_button[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}

    //change background color when clicked
    item.addEventListener('click', function(){
        item.style.color = 'red';
        item.style.borderLeft = '2px solid red';
        
    })
    //delete item when double click
    item.addEventListener('dblclick', function(){
        toDoContainer.removeChild(item);
    })

    

})



//clear all items
clearItems.addEventListener('click', function(){
    toDoContainer.remove();
    location.reload();
    
})

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


