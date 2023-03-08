// import { formatISO9075 } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({_id,title,summary,file,content,createdAt,author}) => {
  return (
    <div className="post">
    <div className="image">
      <Link to={'/post/'+_id}>
        <img src={'http://localhost:4000/' +file} alt=''></img>
      </Link>
    </div>
    <div className="texts">
      <Link to={'/post/'+_id}>
        <h2>{title}</h2>
      </Link>
      
      <p className="info">
        <span>{author.username}</span>
        <time>{createdAt}</time>
      </p>
      <p className="summary">{summary} </p>
    </div>
  </div>
  )
}
