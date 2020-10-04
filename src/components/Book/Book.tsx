import React, { ReactElement } from 'react';
import './Book.css';

export const Book = ({
  title,
  author = 'Unknown',
}: {
  title: string;
  author?: string;
}): ReactElement => (
  <div>
    <span className="underline">{title}</span> by {author}
  </div>
);
