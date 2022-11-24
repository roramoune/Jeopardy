class player { //player class to store player data
    constructor(fname, lname, dob, age, email, gender, street, city, town, country) {
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.age = age;
        this.email = email;
        this.gender = gender;
        this.street = street;
        this.city = city;
        this.town = town;
        this.country = country;
    }
}
let PlayersData = []; //array for player class to store multiple playerdata

//validate and register player 
function Register() {
    //first name validation
    let fname = document.getElementById("fname").value; //gets the value currently in the fname text input
    if (fname.length < 3) { //confirms if the fname length is greater than three 
        alert("First Name is too short");
        return false; //stops the function
    }
    //last name validation
    let lname = document.getElementById("lname").value; //gets the value currently in the lname text inupt
    if (lname.length < 1) { //confirms if the lname was entered
        alert("Enter last name.");
        return false;
    }
    //gets the dob value 
    var dob = new Date(document.getElementById("dob").value)

    //age validation
    age = document.getElementById("age").value;
    if (age < 12) {
        alert("Must be older than 12 to play");
        return false;
    }
    //email validation
    let email = document.getElementById("email").value;
    if (email.endsWith("@SomeEmail.com") !== true) {
        alert("Enter a @SomeEmail.com email");
        return false;
    }
    //street validation
    let street = document.getElementById("street").value;
    if (street.length < 1) {
        alert("Enter street.");
        return false;
    }
    //city validation
    let city = document.getElementById("city").value;
    if (city.length < 1) {
        alert("Enter city.");
        return false;
    }
    //town validation
    let town = document.getElementById("town").value;
    if (town.length < 1) {
        alert("Enter town");
        return false;
    }
    //get gender from form
    let gender = document.querySelector('input[name="gender"]:checked');
    //get country from form
    let country = document.getElementById("country").value;
    let playerx = new player(fname, lname, dob, age, email, gender, street, city, town, country);
    PlayersData.push(playerx);
    return true;
}

//calculate age
function Agecal() {
    var dob = new Date(document.getElementById("dob").value);
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);

    //display the calculated age 
    document.getElementById("age").value = age;
}

//test data and correctness
function display() {
    console.log(PlayersData[0]);
    document.getElementById("view").innerHTML = JSON.stringify(PlayersData[0].fname);
}



//used to call the jeopardy game
function PlayGame() {
    document.getElementById("jeo").style.display = "block";
    document.getElementById("jeocontainer").style.display = "block";
    element = document.getElementById("play");
    element.remove("play");
}

//used to enable the options for the selected category
function category(c) {
    this.c = c;
    if (c == 1) {
        document.getElementById("cat1.1").disabled = false;
        document.getElementById("cat1.2").disabled = false;
        document.getElementById("cat1.3").disabled = false;
        document.getElementById("cat1.4").disabled = false;
        document.getElementById("cat1.5").disabled = false;

        document.getElementById("cat2.0").disabled = true;
        document.getElementById("cat3.0").disabled = true;
        document.getElementById("cat4.0").disabled = true;
        document.getElementById("cat5.0").disabled = true;

    }
    if (c == 2) {
        document.getElementById("cat2.1").disabled = false;
        document.getElementById("cat2.2").disabled = false;
        document.getElementById("cat2.3").disabled = false;
        document.getElementById("cat2.4").disabled = false;
        document.getElementById("cat2.5").disabled = false;

        document.getElementById("cat1.0").disabled = true;
        document.getElementById("cat3.0").disabled = true;
        document.getElementById("cat4.0").disabled = true;
        document.getElementById("cat5.0").disabled = true;
    }
    if (c == 3) {
        document.getElementById("cat3.1").disabled = false;
        document.getElementById("cat3.2").disabled = false;
        document.getElementById("cat3.3").disabled = false;
        document.getElementById("cat3.4").disabled = false;
        document.getElementById("cat3.5").disabled = false;

        document.getElementById("cat1.0").disabled = true;
        document.getElementById("cat2.0").disabled = true;
        document.getElementById("cat4.0").disabled = true;
        document.getElementById("cat5.0").disabled = true;

    }
    if (c == 4) {
        document.getElementById("cat4.1").disabled = false;
        document.getElementById("cat4.2").disabled = false;
        document.getElementById("cat4.3").disabled = false;
        document.getElementById("cat4.4").disabled = false;
        document.getElementById("cat4.5").disabled = false;

        document.getElementById("cat1.0").disabled = true;
        document.getElementById("cat2.0").disabled = true;
        document.getElementById("cat3.0").disabled = true;
        document.getElementById("cat5.0").disabled = true;

    }
    if (c == 5) {
        document.getElementById("cat5.1").disabled = false;
        document.getElementById("cat5.2").disabled = false;
        document.getElementById("cat5.3").disabled = false;
        document.getElementById("cat5.4").disabled = false;
        document.getElementById("cat5.5").disabled = false;

        document.getElementById("cat1.0").disabled = true;
        document.getElementById("cat2.0").disabled = true;
        document.getElementById("cat3.0").disabled = true;
        document.getElementById("cat4.0").disabled = true;
    }
}
//stores the answer for the selected category
var theanswer;

//stores the question number for answer selection
var thequestion;

//runs the selected option
function quest(q) {
    thequestion = q; //gets the question number from the html
    if (q == 1.1) { //runs the question 1.1
        document.getElementById("cat1.1").disabled = true; //disables the options
        document.getElementById("cat1.2").disabled = true;
        document.getElementById("cat1.3").disabled = true;
        document.getElementById("cat1.4").disabled = true;
        document.getElementById("cat1.5").disabled = true;
        document.getElementById("question").innerHTML = "what's your name?"; //displays the question for the number selected
        var a = document.createElement("input"); //variable a to generate an input element
        a.id = "useranswer"; // creates input to receive user's answer
        theanswer = "john"; //sets the global variable theanswer to the question's specific answer
        document.getElementById("question").appendChild(a); //adds the a input to the html after the question element
    }
    if (q == 1.2) {
        document.getElementById("cat1.1").disabled = true; //disables the options
        document.getElementById("cat1.2").disabled = true;
        document.getElementById("cat1.3").disabled = true;
        document.getElementById("cat1.4").disabled = true;
        document.getElementById("cat1.5").disabled = true;
        document.getElementById("question").innerHTML = "what's your age?"; //displays the question for the number selected
        var a = document.createElement("input"); //variable a to generate an input element
        a.id = "useranswer"; // creates input to receive user's answer
        theanswer = "1"; //sets the global variable theanswer to the question's specific answer
        document.getElementById("question").appendChild(a); //adds the a input to the html after the question element

    }
}

function CheckAnswer() {
    let useranswer = document.getElementById("useranswer").value; //get the user's answer from the html
    if (useranswer == theanswer) { //check if the user's answer is correct
        clearInterval(time); //ends the timer if the answer is correct
    }

}

var time; //keeps the number of seconds

function timer() {

    var sec = 0;
    time = setInterval(() => {
        document.getElementById("timer").innerHTML = sec;
        sec++;
    }, 1000)
    var count = setTimeout(nothing, 60000); //ends at 60secs

}

function nothing() {
    document.getElementById("question").innerHTML = "timer is up"; //displays if the timer ends
    clearInterval(time); //stops the timer
    var x = document.getElementById("answer");
    x.remove; //removes the answer element
}

var score = 0;
