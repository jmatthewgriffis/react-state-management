import React from 'react';
import './App.css';

const Book = ({ name, author }: { name: string; author: string }) => (
  <div>
    {name} by {author}
  </div>
);

function App() {
  return <Book name="War and Peace" author="Leo Tolstoy" />;
}

export default App;
