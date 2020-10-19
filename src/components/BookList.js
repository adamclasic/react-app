import React from 'react'
import BooksList from '../books'
import Book from './Book'

function BookList() {
  return (
    <div>
    {BooksList.map((book) => <Book {...book}/>)}
    {/* {BooksList.map((book) => <p className="">{book.title + 'hi'}</p> )} */}
      {/* <Book title='the rise of Adam' name='adam'/> */}
      
    </div>
  )
}


export default BookList
