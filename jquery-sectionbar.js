		// grab all the buttons
let Buttons = document.querySelectorAll(".selectSection button");

// loop through the buttons using for..of 
for (let button of Buttons) {

 // listen for a click event 
 button.addEventListener('click', (e) => {
  // Store the event target in a const
  const et = e.target;

  // select active class
  const active = document.querySelector(".active");

  /* when a button is clicked, remove the active class 
from the button that has it */
  if (active) {
    active.classList.remove("active");
   }

  // Add active class to the clicked element
  et.classList.add("active");

  // select all classes with the name content
  let allContent = document.querySelectorAll('.content');

  // loop through all content classes
  for (let content of allContent) {

    /* display the content if the value in the data attribute of the button and content are the same */
    if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
      content.style.display = "block";
     }

     // if it's not equal then hide it.
     else {
        content.style.display = "none";
      }
    }
 });
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 