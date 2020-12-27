import React, { useContext } from 'react';
import '../views/Books.css';
import { BookListContext }  from '../contexts/BookList.js'

const Books = () => {

    const { books, removeBook } = useContext(BookListContext);
    console.log(books)
    return books.length ? (
        <div className='books'>
            {books.map((book, index) => 
                <div className='book' onClick={() => removeBook(book.id)}>
                    <h4>{book.title}</h4>
                    <h4>{book.author}</h4>
                </div>
            )}
        </div>
    ) : (
        <div>
            Well there are no more books. Try to add some more.
        </div>
    );
    
    
}

export default Books;