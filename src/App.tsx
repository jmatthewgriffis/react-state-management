import React from 'react';
import './App.css';

const Book = ({ title, author }: { title: string; author: string }) => (
  <div>
    {title} by {author}
  </div>
);

function App() {
  return <Book title="War and Peace" author="Leo Tolstoy" />;
}

export default App;
