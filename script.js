// Global variable

var maxquestion = 2;

// Defining async function
async function getapi(questionnumber) {

    // Storing response
    const response = await fetch('http://localhost:5000/getquestion/' + questionnumber);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Get next question
void getquestion() {
    var questionnumber = randomquetion();
    getapi();
}

// Random question
randomquetion() {
    var question;
    while (showquestion(question) = false) {
        question = rand(1, maxquestion);
    }
    return question;
}

// Function to define innerHTML for HTML table
function show(data) {
    // Loop to access all rows
    let tab = `<h1>${data[0].question}</h1>`;
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}