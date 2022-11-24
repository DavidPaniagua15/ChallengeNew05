//updates time on the webpage
function updateTIME() {
    let today = moment();

// time element in the header//
var date = moment().format('dddd MMMM Do');
var currentdate = document.querySelector('#currentDay')

currentdate.textContent = date

//past, present and future element colors//

let now = moment().format("kk");
for (let i= 0; i < scheduleElArray.lenght; i++) {
    scheduleElArray[i].removeClass("future past present");

    if (now > scheduleElArray[i].data("hour")) {
        scheduleElArray[i].addClass("past");
    }
        else if (now === scheduleElArray[i].attr("data-hour")) {
            scheduleElArray[i].addClass("present");

    } else {
        scheduleElArray[i].addClass("future");
    }
    
}

}

//textarea//

let saveBttn = $(".save-icon");
let containerEl = $(".container");
let schedule9am = $("#9 AM");
let schedule10am = $("#10 AM");
let schedule11am = $("#11 AM");
let schedule12pm = $("#12 PM");
let schedule1pm = $("#1 PM");
let schedule2pm = $("#2 PM");
let schedule3pm = $("#3 PM");
let schedule4pm = $("#4 PM");
let schedule5pm = $("#5 PM");

let scheduleElArray = [schedule9am, schedule10am, schedule11am, schedule12pm, schedule1pm, schedule2pm, schedule3pm, schedule4pm, schedule5pm];

