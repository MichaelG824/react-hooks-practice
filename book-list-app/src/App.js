import Header from './components/Header.js';
import BookContextProvider from './contexts/BookList.js';
import Books from './components/Books.js';
import BookForm from './components/BookForm.js';
function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Header />
        <Books />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
