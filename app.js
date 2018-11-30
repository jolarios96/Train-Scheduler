// initial clock render before interval kicks in
$('#clock').text(moment().format('MMMM Do, h:mm:ss a'));

var globalClock = setInterval(function () {
    $('#clock').text(moment().format('MMMM Do, h:mm:ss a'));


}, 1000);

var updateInterval = setInterval(function () {
    // update table entries every 5 min

}, 300000); // 1000ms * 60 * 5

$('#submit').on('click', function () {
    //create new table row
    var newEntry = $('<tr>');

    //append new table data to row

    // JSON.stringify & send to firebase
});