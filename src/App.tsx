import React from 'react';
import './App.css';
import { Book } from './components';

const App = () => (
  <>
    <Book
      title="War and Peace"
      author="Leo Tolstoy"
      readOnceMsg="Hmm, maybe."
      readMultMsg="Yeah, right. That book is like 1000 pages."
    />
    <Book
      title="Slaughterhouse-Five"
      author="Kurt Vonnegut"
      readOnceMsg="In high school, probably."
      readMultMsg="Sweet, can you explain it to me?"
    />
    <Book
      title="My Amazing Novel"
      readOnceMsg="Well, I should hope so."
      readMultMsg="But has your agent?"
    />
  </>
);

export default App;
