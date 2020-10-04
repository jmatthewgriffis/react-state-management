import React, { Dispatch, SetStateAction } from 'react';

export const useLocalStorageState = ({
  key,
  defaultValue = '',
}: {
  key: string;
  defaultValue: string;
}): [string, Dispatch<SetStateAction<string>>] => {
  const [state, setState] = React.useState((): string => {
    console.log(
      `Using lazy init for LocalStorage key '${key}', ` +
        'so this should only fire once, ' +
        'but is firing twice for some reason.'
    );
    return window.localStorage.getItem(key) || defaultValue;
  });

  React.useEffect((): void => {
    console.log(`Saving LocalStorage key '${key}'...`);
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
