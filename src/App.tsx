import React from 'react';
import './App.css';
import { Book } from './components';

const App = () => (
  <>
    <Book
      title="War and Peace"
      author="Leo Tolstoy"
      readOnceMsg="Hmm, maybe."
    />
    <Book
      title="Slaughterhouse-Five"
      author="Kurt Vonnegut"
      readOnceMsg="In high school, probably."
    />
    <Book title="My Amazing Novel" readOnceMsg="Well, I should hope so." />
  </>
);

export default App;
