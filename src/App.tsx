import React, { ReactElement } from 'react';
import './App.css';

const Book = ({
  title,
  author,
}: {
  title: string;
  author: string;
}): ReactElement => (
  <div>
    {title} by {author}
  </div>
);

const App = () => <Book title="War and Peace" author="Leo Tolstoy" />;

export default App;
