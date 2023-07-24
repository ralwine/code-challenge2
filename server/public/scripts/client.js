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
        render(response) // Called 'allJokes' in render()

        // Isolate last result
        //let currentResult = response[response.length - 1]?.result
        // If undefined, set to empty array so DOM is empty
        //if (currentResult == undefined) {
        //    currentResult = ''
        //}

        // Passing Current result to render in DOM
        //renderCurrentResult(currentResult)
    }).catch((error) => {
        alert("Error sending GET request /math")
    })
}

function addJoke() {
    console.log('in addJoke');

    let whose = $('#whoseJokeIn').val();
    let question = $('#questionIn').val();
    let punchline = $('#punchlineIn').val();

    let dataToSend = {
        whose,
        question,
        punchline
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
        alert("Error sending POST request /math")
        console.log("Error with POST: ", error)
    })
}


function render(allJokes) {
    console.log("In render()")
    // will clear dom container for results
    // append new reselts to dom container

    $('#allJokes').empty()

    //number1,number2, operator,result
    for (let joke of allJokes) {
        console.log("Inside of For Loop")
        $('#allJokes').append(`
            <li>${joke.whose}  ${joke.question}  ${joke.punchline}</li>
        `)
    }

}