import React, { ReactElement } from 'react';
import './Book.css';

export const Book = ({
  title,
  author = 'Unknown',
  messageOne = '',
}: {
  title: string;
  author?: string;
  messageOne: string;
}): ReactElement => {
  const [timesRead, setTimesRead] = React.useState((): number => {
    console.log(
      `Using lazy init for '${title}', ` +
        'so this should only fire once, ' +
        'but is firing twice for some reason.'
    );
    return 0;
  });

  const increment = (): void => setTimesRead(timesRead + 1);

  return (
    <div>
      <span className="underline">{title}</span> by {author} | Times read:{' '}
      {timesRead}
      <button type="button" onClick={increment} className="margin-sides">
        I read it
      </button>
      {timesRead > 0 ? messageOne : ''}
    </div>
  );
};
