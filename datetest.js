const birthday = new Date('February 22, 1993 04:20:30');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


var fullDate = `${months[birthday.getMonth()]} ${birthday.getDate()} ${birthday.getHours()}:${birthday.getMinutes()}`

console.log(fullDate);
