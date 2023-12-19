import React, { useState } from 'react';
import './main';

function BookLibrary() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41XMaCHkrgL.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://media.glamour.com/photos/56e1f3c562b398fa64cbd310/master/w_1600%2Cc_limit/entertainment-2016-02-07-main.jpg' },
    { id: 3, title: '1984', author: 'George Orwell', image: 'https://149522020.v2.pressablecdn.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', image: '' });

  const handleTitleChange = (event) => {
    setNewBook({ ...newBook, title: event.target.value });
  };

  const handleAuthorChange = (event) => {
    setNewBook({ ...newBook, author: event.target.value });
  };

  const handleImageChange = (event) => {
    setNewBook({ ...newBook, image: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, { ...newBook, id: Date.now() }]);
    setNewBook({ title: '', author: '', image: '' });
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="book-library-container">
      <h1>Book Library</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={newBook.title} onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input type="text" value={newBook.author} onChange={handleAuthorChange} />
        </label>
        <label>
          Image URL:
          <input type="text" value={newBook.image} onChange={handleImageChange} />
        </label>
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookLibrary;



