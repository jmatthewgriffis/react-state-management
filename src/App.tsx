import React, { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    const { bookTitle: bookTitleInput, bookAuthor: bookAuthorInput } = (event
      .currentTarget.elements as unknown) as {
      bookTitle: HTMLInputElement;
      bookAuthor: HTMLInputElement;
    };
    const { value: title } = bookTitleInput;
    const { value: author } = bookAuthorInput;
    const newBook: BookInterface = {
      key: uuidv4(),
      title,
      author: author || undefined,
    };
    setBooks([...books, newBook]);
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
  };

  return (
    <>
      {books.map((book) => (
        <Book {...book} />
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookTitle">
          Title
          <span>*</span>
        </label>
        <input id="bookTitle" required />
        <label htmlFor="bookAuthor">Author</label>
        <input id="bookAuthor" />
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default App;
