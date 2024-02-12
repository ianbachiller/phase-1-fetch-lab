function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(jsonified => renderBooks(jsonified)
  )
}

function renderBooks(books) {
  const main = document.querySelector('main');

  const h1 = document.createElement('h1')
  h1.innerHTML = `The fifth book is: ${books[4].name} and it has ${books[4].numberOfPages} pages. `
  main.appendChild(h1)

  const char = document.createElement('h1')
  char.innerHTML = `The 1031st character is: `
  main.appendChild(char)

  const page = document.createElement('h1')
  page.innerHTML = `The total number of all pages is: ${(totalNumberOfPages(books))} `
  main.appendChild(page)

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `The book titled ${book.name} has ${book.numberOfPages} pages`
    console.log(book)
    main.appendChild(h2);

  });
}

function totalNumberOfPages(books){
  const totalPages = books.reduce((acc, book) => acc + book.numberOfPages, 0)
  return totalPages
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// //find: 
// The 5th book in the series
// The 1031st character in the series
// The total number of pages of all the books