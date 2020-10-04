import React, { ReactElement } from 'react';
import './App.css';

const Book = ({
  title,
  author = 'Unknown',
}: {
  title: string;
  author?: string;
}): ReactElement => (
  <div>
    {title} by {author}
  </div>
);

const App = () => (
  <>
    <Book title="War and Peace" author="Leo Tolstoy" />
    <Book title="Slaughterhouse-Five" author="Kurt Vonnegut" />
    <Book title="My Amazing Novel" />
  </>
);

export default App;
