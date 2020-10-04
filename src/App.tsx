import React from 'react';
import './App.css';
import { BookInterface, Book } from './components';
import { initialBooksState } from './initialBooksState';

const App = () => {
  const [books, setBooks] = React.useState((): BookInterface[] => {
    console.log(
      'Using lazy init for App, so this should only fire once, ' +
        'but is firing twice for some reason.'
    );
    return initialBooksState;
  });

  return (
    <>
      {books.map((book) => (
        <Book {...book} />
      ))}
    </>
  );
};

export default App;
