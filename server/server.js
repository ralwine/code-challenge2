const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

app.get('/badjokes', (req, res) => {
  console.log("in server, /jokes", jokes)
  res.send(jokes)
})

// serve back static files
app.use(express.static('server/public'));

app.post('/badjokes', (req, res) => {
  const whoseJoke = req.body.whoseJoke
  const jokeQuestion = req.body.jokeQuestion
  const punchLine = req.body.punchLine

  // Calculate based on incoming data
  //let result = calculate(number1, number2, operator); // 

  // Adding recent number and calculation to history array, as objects.
  let incomingJokes = {
      whoseJoke,
      jokeQuestion,
      punchLine
  }

  console.log('Current Joke: ', incomingJokes)
  jokes.push(incomingJokes)

  res.sendStatus(201)
})

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
