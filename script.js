// Global variable
var maxquestion = getmaxquestion();
var questionnumber = 0;
var data;

// Defining async function
async function getapi() {
    // Storing response
    const response = await fetch('http://localhost:5000');
    // Storing data in form of JSON
    data = await response.json();
    return(data);
}

// Get the maximum number of questions
async function getmaxquestion() {
    var max= await getapi();
    maxquestion = max.length;
}

// Get the next or period question
function getquestion(chosseqt) {
    questionnumber+=chosseqt;
    if(questionnumber>=1 && questionnumber<=maxquestion) {show(questionnumber);}
    if(questionnumber<=1) {
        //document.getElementById("back").classList.add("hide");
        document.getElementById("back").hide();
    } else document.getElementById("back").classList.remove("hide");
    if(questionnumber>=maxquestion) {
        document.getElementById("next").classList.add("hide");
        document.getElementById("submit").classList.remove("hide");
    } else {
        document.getElementById("next").classList.remove("hide");
        document.getElementById("submit").classList.add("hide");
    }
}

// Function to define innerHTML for HTML question
function show(questionnumber) {
    // Loop to access all rows
    let tab = `<h1>${data[questionnumber-1].question}</h1>`;
    // Setting innerHTML as tab variable
    document.getElementById("question").innerHTML = tab;
}