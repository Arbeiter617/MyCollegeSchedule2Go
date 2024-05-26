// common arrays
var nameArr = [];

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
function grabCellProvider(provider) {
    if(document.querySelector(".phone_number_input").value != "") {
        for(var i = 0; i < window[provider].length; i++) {
            tempEmail = document.querySelector(".phone_number_input").value.toString() + window[provider][i];
            console.log("You are using " + provider);
            console.log(tempEmail);
        }
    } else {
        console.log("Please add an input");
    }
}

function grabValue(btn) {
    var localName;
    if(btn == "submit") {
        localName = document.querySelector(".name_input").value;
        if(localName == "#clear") {
            cache();
            console.log("cache cleared");
        } else {
            nameArr.push(localName);
            saveData();
        }
    }
}

function grabCollegeData(college) {
    if(college == "ULL") {
        // for ULL
        window.open('./images/campusMaps/ullCampusMap.png', '_blank').focus();
    }
}
//

// data functions
function initializeLocalData() {
    nameArr = localStorage.saveLocatName.split(",");
    console.log(nameArr);
}

function saveData() {
    if (localStorage && 'saveLocatName' in localStorage) {
        console.log("Current Data:" + localStorage.saveLocatName);
    }

    function storeData() {
        localStorage && (localStorage.saveLocatName = [nameArr]);
        console.log("Data saved: " + localStorage.saveLocatName);
    }
    storeData();
}

// to clear cache
const cache = () => {
    localStorage.clear();
    localStorage.clear();
 };
//
//

// startup functions
initializeLocalData();