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
        console.log("getHistory response: ", response)
        //render(response) // Called 'allCalcs' in render()

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

    /*let number1 = $('#num1').val();
    let number2 = $('#num2').val();

    let dataToSend = {
        number1,
        number2,
        operator
    }

    console.log("dataToSend: ", dataToSend)

    // Need to store operator& 2 numbers in object
    // Ajax POST Request
        // GET to retrieve latest history
        // Render

    $.ajax({
        method: 'POST',
        url: '/jokes',
        // Entire data prop will be req.body on server
        data: dataToSend
    }).then((response) => {
        console.log('POST was successeful!')
        getJokes() // calls render()
    }).catch((error) => {
        alert("Error sending POST request /math")
        console.log("Error with POST: ", error)
    })*/
}

