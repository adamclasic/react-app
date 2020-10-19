import React from 'react'

function BookList() {
  return (
    <div>
      <Book title='the rise of Adam' name='adam'/>
      <Book title='the rise of me' name='Abdulrrahmane'><p>hi</p></Book>
      
    </div>
  )
}

const Book = (props) => {
  const {title, name, children} = props
  return (
  <article>
    <Image />
    <Author name={name}/>
    <Title title={title}/>
    {children}
  </article>
  )
}

const BooksList = [
  {
    id:1,
    title: 'The rise of Adam',
    author: 'Adam'
  },
  {
    id:2,
    title: 'Why Bother',
    author: 'Me'
  },
  {
    id:3,
    title: 'Let it go',
    author: 'Hamoud'
  }
]
const Title = (props) =>  <h4>Title of the book: {props.title}</h4>
const Author = (props) =>  <h5 style={{ color: 'blue', margin: 0}}>writed by: {props.name}</h5>

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg' alt='img' width='100' height='100' />

export default BookList
