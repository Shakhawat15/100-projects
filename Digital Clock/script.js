/**
 * Problem: Create a Digital Clock
 * Solved by: Md Shakhawat Hossen
 * Date: 10-05-2023
 */

/**
 * Create getDate() function for showing date
 * @returns {`${string}, ${number}, ${string}, ${number}`}
 */
const getDate = () => {
    // Declare some variable
    const d = new Date(); // Current date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Days Array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Months Array
    const day = days[d.getDay()]; // Get day name
    const date = d.getDate(); // Get date
    const month = months[d.getMonth()]; // Get month name
    const year = d.getFullYear(); // Get year
    // Return the day, date, month and year
    return `${day}, ${date}, ${month}, ${year}`;
}
// Invoke the getDate() function in HTML tag using innerHTML
document.querySelector('#date').innerHTML = getDate();

/**
 * Create getTime() function for showing time
 */
const getTime = () => {
    // Declare some variable
    const d = new Date(); // Current date
    let h = d.getHours(); // Get hour
    let m = d.getMinutes(); // Get minute
    let s = d.getSeconds(); // Get seconds

    // Check some conditions
    const ampm = h >= 12 ? 'PM' : 'AM'; // Set 'AM' 'PM' Base on house
    h = h % 12 || 12; // Format the in 12 hour
    h = h < 10 ? `0${h}` : h; // Concat 0 if the hour less than 10
    m = m < 10 ? `0${m}` : m; // Concat 0 if the minute less than 10
    s = s < 10 ? `0${s}` : s; // Concat 0 if the seconds less than 10

    // Declare a variable for sore the time
    const time = `${h} : ${m} : ${s} ${ampm}`;
    document.querySelector('#time').innerHTML = time; // Pass the time variable in HTML tag using innerHTML
}
// Invoke the getTime() function for show the time
getTime();
// Use setInterval() to call the getTime() function every second
setInterval(getTime, 1000);