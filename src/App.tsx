import React, { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { BookInterface, Book } from './components';
import { useLocalStorageState } from './hooks';
import { initialBooksState } from './initialBooksState';

const App = () => {
  const [books, setBooks] = useLocalStorageState({
    key: 'books',
    defaultValue: JSON.stringify(initialBooksState),
  });

  const getBooksArray = (): BookInterface[] => JSON.parse(books);

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
      id: uuidv4(),
      title,
      author: author || undefined,
    };
    setBooks(JSON.stringify([...getBooksArray(), newBook]));
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
  };

  return (
    <>
      {getBooksArray().map((book) => (
        <Book key={book.id} {...book} />
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
