import React from 'react'
import { AiFillInstagram,AiOutlineFacebook,AiOutlineMail,AiOutlinePhone,AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Omar's Fake/Test Store All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiOutlineFacebook/>
        <AiOutlineMail/>
        <AiOutlinePhone/>
      </p>
    </div>
  )
}

export default Footer