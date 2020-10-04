import React, { FormEvent } from 'react';
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Not sure what is a better way to handle the typing here.
    const {
      bookTitle: { value: bookTitle },
      bookAuthor: { value: bookAuthor },
    } = (event.currentTarget.elements as unknown) as {
      bookTitle: HTMLInputElement;
      bookAuthor: HTMLInputElement;
    };
    console.log('title', bookTitle, 'author', bookAuthor);
  };

  return (
    <>
      {books.map((book) => (
        <Book {...book} />
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookTitle">Title</label>
        <input id="bookTitle" required />
        <label htmlFor="bookAuthor">Author</label>
        <input id="bookAuthor" />
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default App;
