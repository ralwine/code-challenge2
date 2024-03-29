console.log('client.js sourced');

$( document ).ready( onReady );



function onReady() {
    console.log('DOM ready');

    //getJokes()
    $('#addJokeButton').on('click', addJoke );
    //listener(s)

}

function getJokes() {
    // GET Request to retrieve history.
    // Call render to refresh DOM

    $.ajax({
        method: 'GET',
        url: '/badjokes'
    }).then((response) => {
        console.log("getJokes response: ", response)
        render(response) // Called 'OUT' in render()

        // Isolate last result
        //Let currentJoke = response[response.length - 1]?.result
        // If undefined, set to empty array so DOM is empty
        //if (currentJoke == undefined) {
         //   currentJoke = ''
        //}

        // Passing Current result to render in DOM
        //renderCurrentJoke(currentJoke)
    }).catch((error) => {
        alert("Error sending GET request /badJokes")
    })
}

function addJoke() {
    console.log('in addJoke');

    let whoseJoke = $('#whoseJokeIn').val();
    let jokeQuestion = $('#questionIn').val();
    let punchLine = $('#punchlineIn').val();

    let dataToSend = {
        whoseJoke,
        jokeQuestion,
        punchLine
    }

    console.log("dataToSend: ", dataToSend)

    // Need to store operator& 2 numbers in object
    // Ajax POST Request
        // GET to retrieve latest history
        // Render

    $.ajax({
        method: 'POST',
        url: '/badjokes',
        // Entire data prop will be req.body on server
        data: dataToSend
    }).then((response) => {
        console.log('POST was successeful!')
        getJokes() // calls render()
    }).catch((error) => {
        alert("Error sending POST request /badJokes")
        console.log("Error with POST: ", error)
    })
}


function render(allJokes) {
    console.log("In render()")
    // will clear dom container for results
    // append new reselts to dom container

    $('#outputDiv').empty()

    //number1,number2, operator,result
    for (let joke of allJokes) {
        console.log("Inside of For Loop")
        $('#outputDiv').append(`
            <li>${joke.whoseJoke}  ${joke.jokeQuestion}  ${joke.punchLine}</li>
        `)
    }

}