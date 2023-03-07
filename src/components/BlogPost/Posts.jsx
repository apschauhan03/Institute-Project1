import React, { useEffect,useState } from 'react'
import { Post } from './Post'

export const Posts = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response =>{
      response.json().then(posts =>{
        setPosts(posts)
      })
    })
  })
  return (
    <div className="posts">   
    {posts.length >0 && posts.map(post =>(
      <Post {...post}/>
    ))}
    {/* <Post/> */}
   </div> 
  )
}
