import React from 'react'

const Book = (props) => {
  const {title, author, children} = props
  return (
  <article>
    <Image />
    <Author name={author}/>
    <Title title={title}/>
    {children}
  </article>
  )
}

const Title = (props) =>  <h4>Title of the book: {props.title}</h4>
const Author = (props) =>  <h5 style={{ color: 'blue', margin: 0}}>writed by: {props.name}</h5>

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg' alt='img' width='100' height='100' />
export default Book;