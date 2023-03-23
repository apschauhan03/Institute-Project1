import React from 'react'
import './form.css'
import hackersvg from './hacker.svg'

export default function Leftcontainer() {
  return (
    <div id='contactpage' className='leftcontainer'>
      <div className='Contactheading'>Contact</div>
      <img src={hackersvg} alt='hackerimage'></img>
      <div className='ArtWork'></div>
    </div>
  )
}
