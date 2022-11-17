import React from 'react'
import { Navbar } from '../component/Layout'
import bookCover from "../assets/images/Cart/bookCover.jpg"
import trash from "../assets/images/Cart/trash.png"
import Line from "../assets/images/Cart/Line.png"
const Cart = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="ml-5 mt-24 grid grid-cols-8 gap-4">
        <div></div>
        <img src={bookCover} className ="scale-75"></img>
        <div className="mt-8 ml-5 pl-1 pt-5 text-reemkufiink text-blue font-bold text-xl">Book1
          <p></p>
          <p className='pt-12'>Rp xx.xxx</p>
        </div>
        <div></div>
        <div className='scale-75'>
          <img src={trash} className ="scale-50 pt-12"></img>
        </div>
        <div className = "mt-8 ml-5 pl-1 pt-5 text-reemkufiink text-blue font-bold text-xl">Book1</div>
        <div className = "mt-8 ml-5 pl-1 pt-5 text-reemkufiink text-blue font-bold">
          <p className='text-xl'>Rp xx.xxx</p>
          <img src={Line} className = "pr-10"></img>
          <p className='text-2xl'>Rp xx.xxx</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
     
  )
}

export default Cart