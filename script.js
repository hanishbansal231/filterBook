const books = [
  {title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', year: 2010},
  {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008},
  {title: 'Gone Girl', author: 'Gillian Flynn', year: 2012},
  {title: "Quiet: The Power of Introverts in a World That Can't Stop Talking", author: 'Susan Cain', year: 2012},
  {title: 'The Fault in Our Stars', author: 'John Green', year: 2012},
  {title: 'Divergent', author: 'Veronica Roth', year: 2011},
  {title: 'The Girl on the Train', author: 'Paula Hawkins', year: 2015},
  {title: 'The Nightingale', author: 'Kristin Hannah', year: 2015},
  {title: 'All the Light We Cannot See', author: 'Anthony Doerr', year: 2014},
  {title: 'The Martian', author: 'Andy Weir', year: 2011}
];

const newBook = books.filter(book => book.year >= 2010).map((book) => ({
  title: book.title,
  author: book.author.toUpperCase,
  year: book.year
}));

console.log(newBook)