import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const BestSellerBooks = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/all-books').then(res=>res.json()).then(data=>setBooks(data.slice(0,6)))
  },[])
  return (
    <div>
       <BookCards headline="Best Seller Books" books={books}/>
    </div>
  )
}

export default BestSellerBooks
