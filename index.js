// Get all the unread elements
const unreadElements = document.querySelectorAll('.unread');

// Set the initial value of num to the number of unread elements
const numElement = document.querySelector('.num');
numElement.textContent = unreadElements.length;

// Add a click event listener to the title-a element
const markAllAsRead = document.querySelector('.title-a');
markAllAsRead.addEventListener('click', function () {
  // Loop through all the unread elements and set their class to read
  for (let i = 0; i < unreadElements.length; i++) {
    unreadElements[i].classList.replace('unread', 'read');
  }
  
  // Set the num element's text to 0
  numElement.textContent = 0;
});

// Loop through all the unread elements and add a click event listener to each
for (let i = 0; i < unreadElements.length; i++) {
  unreadElements[i].addEventListener('click', function () {
    // Replace the unread class with read
    this.classList.replace('unread', 'read');
    
    // Hide the circle element
    const circleElement = this.querySelector('.circle');
    circleElement.style.display = 'none';
    
    // Update the num element's text
    numElement.textContent = document.querySelectorAll('.unread').length;
  });
}
