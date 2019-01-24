console.log('hey, it works');

// $clock = document.querySelector('#clock');


function updateClock() {
    var currentTime = new Date(); //new data object

    var currentHours = currentTime.getHours(); //breaking down hours, minutes, seconds
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    if (currentHours <= 9) currentHours = '0' + currentHours; //adding a zero if they're single digits
    if (currentMinutes <= 9) currentMinutes = '0' + currentMinutes;
    if (currentSeconds <= 9) currentSeconds = '0' + currentSeconds;

    background_color = '#' + currentHours + currentMinutes + currentSeconds; //setting background color
    clock = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    document.body.style.background= background_color;
    document.getElementById('clock').innerHTML=clock;


    var clock_percent = (currentSeconds / 60) * 100;


    setTimeout(updateClock, 1000); //timeout is saying wait x time and then run it again.
                                            //It works in milliseconds, so it's saying, wait 1000 milliseconds/1second,
                                                //and run this again.
    // hexString = currentTime.toString(16);
    // if (hexString.length % 2) {
    //     hexString = '0' + hexString;
    // }
    // document.getElementById("clock").addEventListener("hover", hexString);
    console.log(clock_percent)
}



updateClock();