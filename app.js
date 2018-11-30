// database ref
var trainData = firebase.database();

$('#submit').on('click', function () {
    // get input && store in object
    var trainName = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var startTime = $('#start-time-input').val().trim();
    var frequency = $('#frequency-input').val().trim();

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
    $('#train-name-input').val('');
    $('#destination-input').val('');
    $('#first-train-input').val('');
    $('#frequency-input').val('');
});

// when data is added to the database:
trainData.ref().on('child_added', function (snapshot, prevChildKey) {
    // store the data @ firebase
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var startTime = snapshot.val().startTime;

    //  and append data to timetable
    $('#timetable').append(
        $('<tr>').append(
            $('<td>').text(name),
            $('<td>').text(destination),
            $('<td>').text(frequency)
        )
    );
});

// var updateInterval = setInterval(function () {
//     // update table entries every 5 min

// }, 300000); // 1000ms * 60 * 5

