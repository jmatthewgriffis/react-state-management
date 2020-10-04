import React from 'react';
import './App.css';
import { Book } from './components';

const App = () => (
  <>
    <Book title="War and Peace" author="Leo Tolstoy" messageOne="Hmm, maybe." />
    <Book
      title="Slaughterhouse-Five"
      author="Kurt Vonnegut"
      messageOne="In high school, probably."
    />
    <Book title="My Amazing Novel" messageOne="Well, I should hope so." />
  </>
);

export default App;
