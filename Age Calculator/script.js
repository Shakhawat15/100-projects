/**
 * Problem: Create an Age Calculator
 * Solved by: Md Shakhawat Hossen
 * Date: 06-05-2023
 */

const dob = document.getElementById('dob'); // Select the Date of Birth
const btn = document.getElementById('calculateAge'); // Select the calculate Button
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Declare an Array for months

/**
 * Create addEventListener on btn to calculate Age
 * set "click" event
 * return {Age}
 */
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Set the default action of the event

    let today = new Date(); // Select today's date
    let dobInput = new Date(dob.value); // Convert the Date of Birth into Date format

    // Handle an error if the dobInput is null or not
    if (isNaN(dobInput.getTime())) {
        document.getElementById('age').value = 'Please Select Your Birth Date!'; // if date is not select then show the message
        return; // And return the function
    }
    // Declare this variable for Birth year, month, and day
    let birthMonth, birthDate, birthYear;
    // Declare an Object for birth details
    let birthDetails = {
        date: dobInput.getDate(), // get dob date
        month: dobInput.getMonth() + 1, // get dob month and plus 1 for actual month because month name start with 0 index
        year: dobInput.getFullYear(), // get dob year
    }

    let currentYear = today.getFullYear(); // get current date
    let currentMonth = today.getMonth() + 1; // get current month and plus 1 for actual month because month name start with 0 index
    let currentDate = today.getDate(); // get current year

    // Check the Birth date greater than or less than Current date
    if (birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)) {
        document.getElementById('age').value = 'Not Born Yet!'; // if less than then show the message
        return; // And return the function
    }

    // Get the year
    birthYear = currentYear - birthDetails.year;

    // Check the current month greater or equal the birth month
    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month; // if true then simply subtract birth month from current month
    } else {
        birthYear--; // else Decrement 1 from the year
        birthMonth = 12 + currentMonth - birthDetails.month; // And add 12 in current month then subtract the birth month from current month and 12
    }

    // Check the current date greater or equal the birthdate
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date; // if true then simply subtract birthdate from current date
    } else {
        birthMonth--; // else Decrement 1 from the month
        let days = months[currentMonth - 2]; // find the previous month days subtract 2 because 1 for month start with 0 index and another 1 for previous month
        birthDate = days + currentDate - birthDetails.date; // add days in current month then subtract the birthdate from current date and days

        // Check the birth month less than 0 or not
        if (birthMonth < 0) {
            birthMonth = 11; // if true then set birth month 11
            birthYear--; // And Decrement 1 from the year
        }
    }
    // Show the result in age element
    document.getElementById('age').value = `${birthYear} Years ${birthMonth} Months and ${birthDate} Days`;

})