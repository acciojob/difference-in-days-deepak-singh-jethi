var dateDiffInDays = function (date1, date2) {
   // Parse the input strings into Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Calculate the difference in milliseconds
    const timeDiff = Math.abs(d2 - d1);

    // Convert the difference from milliseconds to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Determine the sign based on the order of dates
    return (d2 > d1) ? daysDiff : -daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
