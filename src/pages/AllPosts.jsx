import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, Postcard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([]) // becasuse all posts ayegi database se toh array mai rakhenge id unki
    useEffect(() => {
          appwriteService.getPosts([]).then((posts) => {
      if(posts){
        setPosts(posts.documents) // why documents because post is an object uske andar docmensts array jiske pass data hai posts ke bare mai 
      }
    }) // empty array i.e no condition to get array i.e no filter

    }, []);
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='
            p-2 w-1/4'>
              <Postcard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
