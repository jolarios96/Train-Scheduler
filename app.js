var globalClock = setInterval(function () {
    $('#clock').text(moment().format('MMMM Do, h:mm:ss a'));
    
    //next, update table entries via firebase data

}, 1000);

$('#submit').on('click', function () {
    //create new table row
    var newEntry = $('<tr>');
        
    //append new table data to row

    // JSON.stringify & send to firebase
});