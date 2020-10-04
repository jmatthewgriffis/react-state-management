import React from 'react';
import './App.css';
import { Book } from './components';

const App = () => (
  <>
    <Book title="War and Peace" author="Leo Tolstoy" />
    <Book title="Slaughterhouse-Five" author="Kurt Vonnegut" />
    <Book title="My Amazing Novel" />
  </>
);

export default App;
