import { BookInterface } from './components';

export const initialBooksState: BookInterface[] = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    readOnceMsg: 'Hmm, maybe.',
    readMultMsg: 'Yeah, right. That book is like 1000 pages.',
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    readOnceMsg: 'In high school, probably.',
    readMultMsg: 'Sweet, can you explain it to me?',
  },
  {
    title: 'My Amazing Novel',
    readOnceMsg: 'Well, I should hope so.',
    readMultMsg: 'But has your agent?',
  },
];
