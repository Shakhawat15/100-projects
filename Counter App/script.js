const count = document.getElementById('count'); // Select count dive for show output
const button = document.querySelector('.card-footer'); // Select card-footer for select all button in the card footer

/**
 * Create addEventListener on button Counter
 * set "click" event
 * return {Increment, Decrement, Reset}
 */
button.addEventListener('click', (e) => {
    e.preventDefault(); // Set the default action of the event

    // Check the button class name
    if (e.target.classList.contains('add')) {
        count.innerHTML++; // if the class name "add" then Increment 1 in count innerHTML
    }else if (e.target.classList.contains('subtract')) {
        count.innerHTML--; // if the class name "subtract" then Decrement 1 in count innerHTML
    }else if (e.target.classList.contains('reset')) {
        count.innerHTML = '0'; // if the class name "reset" then set 0 in count innerHTML
    }
})