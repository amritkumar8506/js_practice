let year = 2001;
if ((year % 7 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("it is a leap year");

} else {
    console.log("it is not a leap year");

}
