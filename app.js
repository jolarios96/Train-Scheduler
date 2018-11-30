// initial clock render before interval kicks in
$('#clock').text(moment().format('MMMM Do, h:mm:ss a'));

var globalClock = setInterval(function () {
    $('#clock').text(moment().format('MMMM Do, h:mm:ss a'));


}, 1000);

// code that accesses database below this point
// database ref
var trainData = firebase.database;

// get input && store in object
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTrain = $("#first-train-input").val().trim();
var frequency = $("#frequency-input").val().trim();

// store inputs in object
var newTrain = {
    name: trainName,
    destination: destination,
    startTime: startTime,
    frequency: frequency
};

// store object @ database
trainData.ref().push(newTrain);

// clear input fields
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");


var updateInterval = setInterval(function () {
    // update table entries every 5 min

}, 300000); // 1000ms * 60 * 5

$('#submit').on('click', function () {
    //create new table row
    var newEntry = $('<tr>');

    //append new table data to row

    // JSON.stringify & send to firebase
});