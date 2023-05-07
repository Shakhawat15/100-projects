/**
 * Problem: Create a BMI Calculator
 * Solved by: Md Shakhawat Hossen
 * Date: 07-05-2023
 */

const calBtn = document.getElementById('calculateBMI'); // Select the MBI Calculate button
const reset = document.getElementById('reset'); // Select the Reset button
const result = document.getElementById('result'); // Select the Result Showing div

/**
 * Create addEventListener on calBtn to calculate BMI
 * set "click" event
 * return {BMI}
 */
calBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Set the default action of the event

    let height = document.getElementById('height').value; // Select the height
    let weight = document.getElementById('weight').value; // Select the weight

    // Check the height and weight empty or not a number?
    if ((height === '' || isNaN(height)) && (weight === '' || isNaN(weight))) {
        return result.innerHTML = 'Please provide a valid height and weight'; // Show this message in result if the height and weight empty or NaM
    } else if (weight === '' || isNaN(weight)) {
        return result.innerHTML = 'Please provide a valid weight'; // Show this message in result if the  weight empty or NaM
    } else if (height === '' || isNaN(height)) {
        return result.innerHTML = 'Please provide a valid height'; // Show this message in result if the height empty or NaM
    } else {
        height = height / 100; // Convert the height CM to M
        let bmi = (weight / Math.pow(height, 2)).toFixed(2); // Calculate the BMI (weight / height * height)
        // Some condition on BMI Result
        if (bmi < 18.5) {
            result.innerHTML = `Underweight: <span>${bmi}</span>`; // if the BMI less than 18.5 show the result Underweight
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `Normal: <span>${bmi}</span>`; // if the BMI between 18.5 and 24.9 show the result Normal
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            result.innerHTML = `Overweight: <span>${bmi}</span>`; // if the BMI between 25.0 and 29.9 show the result Overweight
        } else {
            result.innerHTML = `Obese: <span>${bmi}</span>`; // else show the result Obese
        }
    }
    reset.classList.remove('d-none'); // Remove the class "d-none" on reset button
    result.classList.remove('d-none'); // Remove the class "d-none" on result div
})

/**
 * Create addEventListener on reset button to reset the form and result
 * set "click" event
 * reset everything
 */
reset.addEventListener('click', (e) => {
    document.querySelector('form').reset(); // Reset the Form
    reset.classList.add('d-none');  // Add the class "d-none" on reset button
    result.classList.add('d-none'); // Add the class "d-none" on result div
})