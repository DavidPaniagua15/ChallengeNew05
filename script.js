var date = moment().format('dddd MMMM Do');
var currentdate = document.querySelector("#currentDay")

currentdate.textContent = date

// this update the color in the past, present and future on the blocks //
let now = moment().format('kk');
for (let i = 0; i < scheduleElArray.length; i++) {
    scheduleElArray[i].removeClass('future past present');

if (now > scheduleElArray[i].data('hour')) {
    scheduleElArray[i].addClass('past')


} else if (now === scheduleElArray[i].attr('data-hour')) {
    scheduleElArray[i].addClass('present');
} else {
    scheduleElArray[i].addClass('future')
}
}