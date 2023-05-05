const dob = document.getElementById('dob');
const btn = document.getElementById('calculateAge');
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let today = new Date();
    let dobInput = new Date(dob.value);

    if (isNaN(dobInput.getTime())) {
        document.getElementById('age').value = 'Please Select Your Birth Date!';
        return;
    }
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
        date: dobInput.getDate(),
        month: dobInput.getMonth() + 1,
        year: dobInput.getFullYear(),
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    if (birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)) {
        document.getElementById('age').value = 'Not Born Yet!';
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentMonth - birthDetails.date;

        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }

    document.getElementById('age').value = `${birthYear} Years ${birthMonth} Months and ${birthDate} Days`;

})