import React, { useContext, useState } from 'react';
import { BookListContext }  from '../contexts/BookList.js'

const BookForm = () => {

    const { books, addBook } = useContext(BookListContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    console.log(books)

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Title...' onChange={(e) => setTitle(e.target.value)} value={title} />
            <input placeholder='Author...' onChange={(e => setAuthor(e.target.value))} value={author} />
            <input type='submit' value='Add book' />
        </form>
    );
}

export default BookForm;