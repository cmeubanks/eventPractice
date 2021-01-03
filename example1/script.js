var addNewButton = document.querySelector('.add-new');
var parent = document.querySelector('.parent');
var allButtons = document.querySelectorAll('.parent .click-me');

addNewButton.addEventListener('click', createButton);

for(var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', showAlert);
}

function showAlert() {
  alert('You clicked me!');
}

function createButton() {
  var newButton = document.createElement('button');
  newButton.className = 'click-me';
  newButton.innerText = "New click me button!";
  parent.appendChild(newButton);
}
//addNewButton = selecting "Add a new button below" and
//firing createButton on a click.

//parent = is assigned to the class of 'parent' in HTML
//which is our div that contains all 'click-me' Buttons

//allButtons = query selector all grabs all the 'click-me' Buttons

//There is a loop created to iterate through all the 'click me' Buttons
//and adds an event listener which fires on a 'click' and launches the showAlert
//function

//createButton function creates a variable newButton which is
//assigned to the new html element created 'button'
//.className is a new built in JS method for HTML, which takes our new variable
//and assigns it to the string of 'click-me' - therefore creating an assigned class
//.innerText allows us to assign new HTML text to our newButton variable, therefore
//giving our button a name
//our 'clickme' buttons are modified with .appendChild
