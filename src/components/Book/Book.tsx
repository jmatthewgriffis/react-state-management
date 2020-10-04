import React, { ReactElement } from 'react';
import './Book.css';

export interface BookInterface {
  key: string;
  title: string;
  author?: string;
  readOnceMsg?: string;
  readMultMsg?: string;
}

export const Book = ({
  title,
  author = 'Unknown',
  readOnceMsg = 'No snarky message available.',
  readMultMsg = 'This will not change no matter how many times you click.',
}: BookInterface): ReactElement => {
  const [timesRead, setTimesRead] = React.useState((): number => {
    console.log(
      `Using lazy init for Book '${title}', ` +
        'so this should only fire once, ' +
        'but is firing twice for some reason.'
    );
    return 0;
  });

  const decrement = (): void => setTimesRead(timesRead - 1);
  const increment = (): void => setTimesRead(timesRead + 1);

  return (
    <div>
      <span className="underline">{title}</span> by {author}
      <button
        type="button"
        disabled={!timesRead}
        onClick={decrement}
        className="margin-sides"
      >
        I didn't read it
      </button>
      Times read: {timesRead}
      <button type="button" onClick={increment} className="margin-sides">
        I read it
      </button>
      {timesRead > 1 ? readMultMsg : timesRead === 1 ? readOnceMsg : ''}
    </div>
  );
};
