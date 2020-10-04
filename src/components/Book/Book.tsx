import React, { ReactElement } from 'react';
import './Book.css';

export const Book = ({
  title,
  author = 'Unknown',
}: {
  title: string;
  author?: string;
}): ReactElement => {
  const [timesRead, setTimesRead] = React.useState((): number => {
    console.log(
      `Using lazy init for '${title}', so this should only fire once.`
    );
    return 0;
  });

  const increment = (): void => setTimesRead(timesRead + 1);

  return (
    <div>
      <span className="underline">{title}</span> by {author} | Times read:{' '}
      {timesRead}
      <button type="button" onClick={increment} className="margin-left">
        I read it
      </button>
    </div>
  );
};
