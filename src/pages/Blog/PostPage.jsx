import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PostPage.css'


export const PostPage = () => {
    const {id} = useParams()
    const [postInfo,setPostInfo] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:4000/post/'+id).then(response =>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo)
            })
        })
    },[])

    if(!postInfo) return ''

  return (
    <div className='post-page'>
        <h1>
            {postInfo.title}
        </h1>
        <div className='author'>by {postInfo.author.username}</div>
        <div className='postImg'>
            <img src={`http://localhost:4000/${postInfo.file}`} alt=''></img>
        </div>
        <div className='content'>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        </div>
    </div>
  )
}
