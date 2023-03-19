import React from 'react'

export default function Rightcontainer() {
  return (
    <div className='rightcontainer'>
      
      <form method="post" autoComplete='off' autoCorrect='off'>
        <div class="txt_field">
          <input autoSave='off' type="text" required></input>
          <span></span>
          <label>Enter your name</label>
        </div>
        <div class="txt_field">
          <input type="email" required></input>
          <span></span>
          <label>Enter your email</label>
        </div>
        <div class="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Enter your number</label>
        </div>
        <div class="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Enter your message</label>
        </div>
       <input type="submit" value="Submit"></input>
       
      </form>
    </div>
  )
}
