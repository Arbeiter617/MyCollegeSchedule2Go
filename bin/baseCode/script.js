// variables
var tempEmail;
var tempMessage;

//phone number endings//
var attEnding = ["@mms.att.net"];
var verizonEnding = ["@vtext.com", "@vzwpix.com"];
var tmobileEnding = ["@tmomail.net"];
var cricketEnding = ["@mms.cricketwireless.net"];
//

// value grabber
function grabCellProvider(spec) {
    for(var i = 0; i < window[spec].length; i++) {
        tempEmail = document.querySelector(".phone_number_input").value.toString() + window[spec][i];
        console.log("You are using " + spec);
        console.log(tempEmail);
    }
}

function grabValue(btn) {
    var localName;
    if(btn == "submit") {
        localName = document.querySelector(".name_input").value;
        console.log(localName);
    }
}
//