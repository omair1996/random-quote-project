import './App.css';
import React, { useState } from 'react';

const Quotetion = [
  {
    text: `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand"`,
    author: "Martin Fowler"
  },
  {
    text: `"First, solve the problem. Then, write the code"`,
    author: "John Johnson"
  },
  {
    text: `"Everybody should learn to program a computer because it teaches you how to think."`,
    author: "Steve Jobs"
  },
  {
    text: `"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."`,
    author: "Linus Torvalds"
  },
  {
    text: `"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Mondays code."`,
    author: "Dan Salomon"
  },
  {
    text: `"Confusion is part of programming"`,
    author: "Felienne Hermans"
  },
  {
    text: `"Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? "`,
    author: "Olawale Daniel"
  }
];



function App() {
  const [randomQuote, setRandomQuote] = useState(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotetion.length);
    setRandomQuote(Quotetion[randomIndex]);
  };

  

  return (
    
    <div id="quote-box" className="col-md-8 offset-md-2">
    <div className="App">
      <div>
      <h1>Random Quote Generator By Umair</h1>
      <div className='text-center'>
     <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + randomQuote} target="_blank"><button  className="btn btn-primary">Tweet it</button></a></div><div className='text-center'>
      <button id="new-quote"onClick={getRandomQuote} className="btn btn-success">Get Random Quote</button></div></div>
      {randomQuote && (
        <div className="quote">
          <div id="text">{randomQuote.text}</div>
          <h3 id="author"> {randomQuote.author}</h3>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
