const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// install Quokka.js extension to run js files without an html file

// desestruturação - destructuring
/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

// const { title, author } = book;
// console.log(author, title);

// destructuring: avoid get each element of an array or object//
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// rest operator: creates an array with the elements that were not destructured
//must be the last parameter
//
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator: take the elements out of the array
//must be the first parameter
//
const newGenres = [...otherGenres, "epic fantasy"]; // creating a new array with a new one
console.log(newGenres);

// spreading an object. Creates a new object adding moviePublicationDate property
const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
console.log(updatedBook);

// it's possible to use spread operator to update properties
const updatedBook2 = { ...book, pages: 1210 };
console.log(updatedBook2);

//
//Template literals (ES6): allows to insert js variables/expressions inside string
//use ${} and put the variable inside the curly braces
//
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
console.log(summary);

// ${publicationDate.split('-')[0]: split results in an array and we get the first element (year)

//
//ternary operator
//
const pagesRange = pages > 1000 ? "over a thousand" : "less then 1000";
console.log(`The book has ${pagesRange} pages`);

//
//arrow functions (ES6): new way of write functions of, ideally, one line
//how to write: argument (str), an arrow (=>) and what we want to return (str.split("-")[0])
//we can use multiples arguments (str, x, y) => str + x//y
//everything that is after the arrow (=>) will be returned without the word return
//
// original: function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

// arrow function: function expression
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary2 = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
console.log(summary2);

//
//short circuit operators
//and: when the first element is false
//or: when the first element is true
//// falsy: 0, '', null, undefined
//// truthy: 1, non empty string
//
/*
console.log(true && "Some value"); // "Some value"
console.log(false && "Some value"); // false
console.log(hasMovieAdaptation && "This book has a movie"); // "This book has a movie"
console.log("Manoel" && "Some string"); // "Some string"
console.log(true || "Some string"); // true
console.log(false || "Some string"); // "Some string"

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

// short circuit can lead to wrong results, due to js consider 0 (zero) a falsy
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);

// as short circuit can lead to wrong results, due to js consider 0 (zero) a falsy,
// it was introduced the "Nullish coalescing operator" ( ?? )
// operator is a logical operator that returns its right-hand side operand when
// its left-hand side operand is null or undefined. Thus, when the left side
// is 0 (zero), the ?? returns 0
const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);
*/
//
//Optional chaining ?
//avoid read properties that are undefined or null
//the expression short circuits and evaluates to undefined instead of throwing an error
//
/*
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // set 0 if undefined
  return goodread + librarything;
}

console.log(getTotalReviewCount(book));


// map, filter, reduce: are functional methods, in other words, returns
// a new array based on the original. It's possible to chain three methods

// map: iterate over an array and apply a function to each element of this array
// ex.: console.log([1,2,3,4].map((el) => el * 2)) // double the values
const books = getBooks();

const titles = books.map((book) => book.title);
console.log(titles);

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
// or use () to return
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialData);


// filter: filter some elements of an array based on a condition
// it's possible to chain filters

// longBooks will be an array with books with more than 500 pages
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

const longBooksWithAdaptation = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithAdaptation);

const advenureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(advenureBooks);

*/

// reduce: reduce the entire array
// first argument: get each element of an array and the accumulator
// second argument: gets the initial value of the accumulator. It can be a number, an array, object and so on
const books = getBooks();

// acc stands for accumulator
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// sort: put the array in order
// the method changes the original array
// a-b put in ascending order
const unorderedArray = [3, 7, 1, 9, 6];
const sortedArray = unorderedArray.sort((a, b) => a - b); // ascending
console.log(unorderedArray);
console.log(sortedArray);

// a trick to keep the original array untouched is to use the method
// slice() without parameters
const unorderedArray2 = [3, 7, 1, 9, 6];
const sortedArray2 = unorderedArray2.slice().sort((a, b) => a - b); // ascending
console.log(unorderedArray2);
console.log(sortedArray2);

// sorting objects
// descending
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);
