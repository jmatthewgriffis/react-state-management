import React, { ReactElement } from 'react';
import { useLocalStorageState } from '../../hooks';
import './Book.css';

export interface BookInterface {
  id: string;
  title: string;
  author?: string;
  readOnceMsg?: string;
  readMultMsg?: string;
}

export const Book = ({
  id,
  title,
  author = 'Unknown',
  readOnceMsg = 'No snarky message available.',
  readMultMsg = 'This will not change no matter how many times you click.',
}: BookInterface): ReactElement => {
  const [timesRead, setTimesRead] = useLocalStorageState({
    key: id,
    defaultValue: String(0),
  });

  const decrement = (): void => setTimesRead(String(Number(timesRead) - 1));
  const increment = (): void => setTimesRead(String(Number(timesRead) + 1));

  const getMsg = (): string => {
    const numTimesRead = Number(timesRead);
    return numTimesRead > 1
      ? readMultMsg
      : numTimesRead === 1
      ? readOnceMsg
      : '';
  };

  return (
    <div>
      <span className="underline">{title}</span> by {author}
      <button
        type="button"
        disabled={!Number(timesRead)}
        onClick={decrement}
        className="margin-sides"
      >
        I didn't read it
      </button>
      Times read: {timesRead}
      <button type="button" onClick={increment} className="margin-sides">
        I read it
      </button>
      {getMsg()}
    </div>
  );
};
