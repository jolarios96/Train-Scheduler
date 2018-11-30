// NOTE:
// find a way to calc. the following: (lines ~55-60)
// var nextArrival;
// var minutesAway;
// then append.


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDq5Mynul_U8ebMaYmn9w6PiBY_mEWCVZI",
    authDomain: "train-scheduler-c766b.firebaseapp.com",
    databaseURL: "https://train-scheduler-c766b.firebaseio.com",
    projectId: "train-scheduler-c766b",
    storageBucket: "train-scheduler-c766b.appspot.com",
    messagingSenderId: "473971828499"
};
firebase.initializeApp(config);

// database ref
var trainData = firebase.database();

$('#train-submit-btn').on('click', function(event) {
    event.preventDefault();

    // get input && store in object
    var trainName = $('#train-id-input').val().trim();
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

    // caclulate nextArrival in some way . . .
    var nextArrival;

    //  calculate minutes away:
    //  = nextArrival - (time from moment().format(some useable format))
    var minutesAway;

    //  and append data to timetable
    $('#timetable').append(
        $('<tr>').append(
            $('<td>').text(name),
            $('<td>').text(destination),
            $('<td>').text(frequency),
            $('<td>').text(nextArrival),
            $('<td>').text(minutesAway)
        )
    );
});