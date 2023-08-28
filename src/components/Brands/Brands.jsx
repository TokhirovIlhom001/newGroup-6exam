import './brands.scss'

import React from 'react'
import BrandOne from '../../../public/brand1.svg'
import BrandTwo from '../../../public/brand2.svg'
import BrandThree from '../../../public/brand3.svg'
import BrandFour from '../../../public/brand4.svg'
import BrandFive from '../../../public/brand5.svg'

const Brands = () => {
  return (
    <div className='brand_div'>
        <h2 className='brand_h2'>Top Brands Deal</h2>
        <h4 className='brand_h4'>Up To <span className='yellow'>60%</span> off on brands</h4>
        <div>
            <img className='brand_img' src={BrandOne} alt="Brands" />
            <img className='brand_img' src={BrandTwo} alt="Brands" />
            <img className='brand_img' src={BrandThree} alt="Brands" />
            <img className='brand_img' src={BrandFour} alt="Brands" />
            <img className='brand_img' src={BrandFive} alt="Brands" />
        </div>
    </div>
  )
}

export default Brands