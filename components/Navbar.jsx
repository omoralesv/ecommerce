import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'

const Navbar = () => {
  const {showCart,setshowCart,totalQuantites} = useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Omar's Fake/Test Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=> setshowCart(true)}>
        <AiOutlineShopping></AiOutlineShopping>
        <span className='cart-item-qty'>{totalQuantites}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar