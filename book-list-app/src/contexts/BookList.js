import React, { createContext, useState } from 'react';
const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};


// Create context.
export const BookListContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
      {title: 'Fahrentheit 451', author: 'Ray Bradbury', id: 1},
      {title: 'Green Eggs and Ham', author: 'Dr. Seuss', id: 2},
      {title: 'How to Win and Influence Friends', author: 'Dale Carnegie', id: 3},
      {title: 'The Stranger', author: 'Albert Camus', id: 4}
    ]);
    const removeBook = (id) => {
        const newBooksList = books.filter(book => book.id != id);
        setBooks(newBooksList);
    }
    const addBook = (title, author) => {
        const newBook = {
            title: title,
            author: author,
            id: ID,
        };
        const newBooksList = [...books, newBook];
        console.log(newBooksList);
        setBooks(newBooksList);
    }
    
    return (
      <BookListContext.Provider value={{books, removeBook, addBook}}>
        {props.children}
      </BookListContext.Provider>
    )
}
  
export default BookContextProvider;
