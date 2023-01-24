import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '@/context/StateContext'
import { runFireworks } from '@/lib/utils'


const Success = () => {
  const {setCartItems,setTotalPrice,setTotalQuantites} = useStateContext()
  
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantites(0)
    runFireworks()
  }, [])
    

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank You for your order!</h2>
            <p className='email-msg'>Your order's receipt has been sent to your email.</p>
            <p className='description'>If you have any questions ,please email
                <a className='email' href='mailto:not_a_real_email@email.gov'>not_a_real_email@email.gov</a>
            </p>
            <Link href="/">
              <button type='button' width='300px' className='btn'>Contine Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success