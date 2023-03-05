import React from 'react'

export const Post = () => {
  return (
    <div className="post">
    <div className="image">
      <img src="https://techcrunch.com/wp-content/uploads/2023/02/this-week-in-apps-splash-2023.webp?w=430&h=230&crop=1" alt=''></img>
    </div>
    <div className="texts">
      <h2> This Week in Apps: Jack Dorsey-backed Bluesky, social apps’ teen</h2>
      <p className="info">
        <span>author</span>
        <time>2023-03-05</time>
      </p>
      <p className="summary">
          Welcome back to This Week in Apps, the weekly TechCrunch series
          that recaps the latest in mobile OS news, mobile applications
          and the overall app economy. The a
      </p>
    </div>
  </div>
  )
}
