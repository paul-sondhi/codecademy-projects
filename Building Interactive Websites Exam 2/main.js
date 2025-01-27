// Click handler for search button
const captureSearchValue = () => {
    const searchBar = document.getElementById("search-bar").value;
    return searchBar;
  };
  
  // Filter books based on search input
  const filterBooks = (searchString, bookList) => {
    const searchLower = searchString.toLowerCase();
    const filteredBooks = bookList.filter(book => {
      const titleMatch = book.title.toLowerCase() === searchLower;
      const authorMatch = book.author.toLowerCase() === searchLower;
      const tagsMatch = book.tags.some(tag => tag.toLowerCase() === searchLower);
      return titleMatch || authorMatch || tagsMatch;
    }); 
    return filteredBooks;
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = (books) => {
    const bookElements = books.map(book => structureBookAsHtml(book));
      return bookElements;
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
      const searchInput = captureSearchValue();
      const filteredBooks = filterBooks(searchInput, books);
      const bookElements = structureBooksAsHtml(filteredBooks);
      renderBooksToDom(bookElements);
  };
  
  // Grab search button from the DOM
  
  const searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });