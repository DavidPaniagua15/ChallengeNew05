var date = moment().format('dddd MMMM Do');
var currentdate = document.querySelector('#currentDay');

currentdate.textContent = date

var saveBtn = (".saveBtn");

function timeBlockColor() {
    var hour = moment().hour();

}

$(".saveBtn").on("click", function () {
    // Get value of correct row description
    var userText = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(timeStamp, userText);
});

function schedule() 
    