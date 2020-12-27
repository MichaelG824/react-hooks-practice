import React, { useContext } from 'react';
import '../views/Header.css';
import { BookListContext }  from '../contexts/BookList.js'
const Header = () => {

    const { books } = useContext(BookListContext);
    console.log(books)
    return (
        <div className='header'>
            <h1>Ninja Reading List</h1>
            <h3>Currently you have {books.length} books to get through</h3>
        </div>
    );
}

export default Header;
