import React from 'react'
import Footer from '../../public/image/Group 1076.png'
import Image from 'next/image'

export default function footer() {
  return (
    <div className='mt-5'>
      <Image src={Footer}/>
    </div>
  )
}
