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

//save data from the save btn, hour and the container //

let saveBttn = $('.save-icon');
let containerEl = $('.container');
let schedule9am = $('#9AM');
let schedule10am = $('#10AM');
let schedule11am = $('#11AM');
let schedule12pm = $('#12PM');
let schedule1pm = $('#1PM');
let schedule2pm = $('#2PM');
let schedule3pm = $('#3PM');
let schedule4pm = $('#4PM');
let schedule5pm = $('#5PM');

let scheduleElArray = [schedule9am, schedule10am, schedule11am, schedule12pm, schedule1pm, schedule2pm, schedule3pm, schedule4pm, schedule5pm];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000);

function renderLastRegistered() {
    for (let el of scheduleElArray) {
        el.val(localStorage.getItem('time block' + el.data('hour')));
    }
}