import React from 'react'
import { Link } from 'react-router-dom'
import service, { Service } from '../appwrite/config'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'

function Postcard({$id, title, featuredImage}) {
  const check = service.getFilePreview(featuredImage)
  console.log("check", check);
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img  src={service.getFilePreview(featuredImage)} alt={title} />
        </div>
        <h2 
        className='text-xl font-bold'
        >
            {title}
        </h2>
    </div>
    </Link>
  )
}

export default Postcard
