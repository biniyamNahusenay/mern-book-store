import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction","Non-Fiction","Mistery","Programming","Science Fiction","Fantasy",
    "Horror","Bibliograhy","Autobiography","History","Self-Help","Memoir","Businnes",
    "Children Books","Travel","Religion","Art and Design"
  ]
  
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0])

   const handleChangeSelectedValue = (event)=>{
      console.log(event.target.value)
      setSelectedBookCategory(event.target.value)
   }

   const handleBookSubmit = (e)=>{
     e.preventDefault()
     const form = e.target
     const bookTitle = form.bookTitle.value;
     const authorName = form.authorName.value
     const imageUrl = form.imageUrl.value
     const category = form.categoryName.value
     const bookDescription = form.bookDescription.value
     const bookPdfUrl = form.bookPdfUrl.value

     const bookObj = {
      bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
     }
     fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(bookObj)
     }).then(res=>res.json()).then(data=>{
       alert("Book uploaded successfully")
       form.reset()
     })
   }

  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
       <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL"/>
            </div>
            <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image Url" required />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
             <div className="mb-2 block">
               <Label htmlFor="inputState" value="Book Category"/>
             </div>
             <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} 
             onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
                }
             </Select>
          </div>
        </div>

        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description"/>
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description ..." 
          required rows={6} className='w-full' />
      </div>
      {/* book pdf link */}
      <div className=''>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PdfUrl" />
          </div>
          <TextInput id="bookPdfUrl" name="bookPdfUrl" type="text" placeholder="Book pdf url" required />
       </div>
       <Button type="submit" className='mt-5'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook
