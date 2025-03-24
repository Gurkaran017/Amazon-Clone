import React from 'react'
import Bazaar from "../assets/Images/Bazaar.jpg"
import Groceries from "../assets/Images/Groceries.jpg"
import everyday from "../assets/Images/everyday.jpg"
import Mobile from "../assets/Images/Mobiles.jpg"
import MXplayer from "../assets/Images/MXplayer.jpg"
import fashion from "../assets/Images/Fashion.png"
import Books from "../assets/Images/Books.jpg"
import Deals from "../assets/Images/Deals.jpg"
import Homes from "../assets/Images/Homes.jpg"
import ProductSlider from './ProductSlider'
import Slider1 from './Slider1'
import solmo from "../assets/Images/solmo.jpg"
import DealUnder99 from "../assets/Images/DealUnder99.jpg"
import MobileAcces from "../assets/Images/MobileAcces.jpg"
import Under1499 from "../assets/Images/Under1499.jpg"
import kurti from "../assets/Images/kurti.jpg"
import OfferSlider from './OfferSlider'
import ThreeImgs from "../assets/Images/ThreeImgs.jpg"
import Base from './Base'



const Bottom = () => {

    const products = [
    { name: "Bazaar", image: Bazaar },
    { name: "Groceries", image: Groceries },
    { name: "Everyday", image: everyday },
    { name: "Mobile", image: Mobile },
    { name: "MXplayer", image: MXplayer },
    { name: "Fashion", image: fashion },
    { name: "Books", image: Books },
    { name: "Deals", image: Deals },
    { name: "Homes", image: Homes },
    ]

    const Offers = [
      { image: solmo },
      { image: DealUnder99 },
      { image: MobileAcces },
      { image: Under1499 },
      { image: kurti }
      ]

  return (
    <>
    <div>
        <ProductSlider products = {products}/>
        <Slider1/>
        <div className='mt-[-130px]'><OfferSlider Offers = {Offers} /></div>
        <div className='w-full flex bg-gray-300 justify-center'>
          <img className='w-[85vh] p-2' src={ThreeImgs}/>
        </div>
    </div>
    <Base/>
    </>
  )
}

export default Bottom
