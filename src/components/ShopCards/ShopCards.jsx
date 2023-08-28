import './shopCards.scss'

import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button } from '@mui/material';

const ShopCards = () => {
  return (
    <div className=''>
        <div className='shop_cards-div'>
            <div className='shop_cards-top'>
                <div className='card_one'> 
                  <div className='card_one-div'>
                    <h2 className='card_h'>Hawaiian <br/>Shirts</h2>
                    <h4 className='card_h'>Dress up in summer vibe</h4>
                    <h3 className='card_h'>UPTO 50% OFF</h3>
                    < ArrowDownwardIcon className='arrow'/>
                    <Button style={{border: '1px solid #FFFFFF', color: '#FFFFFF'}} variant='outlined' className='card_btn'>SHOP NOW</Button>
                  </div>
                </div>
                <div  className='card_two'>
                  <div className='card_two-div'>
                    <h2 className='card_h'>Printed <br/> T-Shirt</h2>
                    <h4 className='card_h'>New Designs Every Week</h4>
                    <h3 className='card_h'>UPTO 40% OFF</h3>
                    < ArrowDownwardIcon className='arrow'/>
                    <Button style={{border: '1px solid #FFFFFF', color: '#FFFFFF'}} variant='outlined' className='card_btn'>SHOP NOW</Button>
                  </div>
                </div>
                <div className='card_three'>
                  <div className='card_two-div'>
                    <h2 className='card_h'>Cargo <br/> Joggers</h2>
                    <h4 className='card_h'>Move with style & comfort</h4>
                    <h3 className='card_h'>UPTO 50% OFF</h3>
                    < ArrowDownwardIcon className='arrow'/>
                    <Button style={{border: '1px solid #3C4242', color: '#3C4242'}} variant='outlined' className='card_btn'>SHOP NOW</Button>
                  </div>
                </div>
            </div>
            <div className='shop_cards-bottom'>
                <div className='card_four'>
                  <div className='card_four-div'>
                    <h2 className='card_h'>Urban <br/> Shirts</h2>
                    <h4 className='card_h'>Live In Confort</h4>
                    <h3 className='card_h'>FLAT 60% OFF</h3>
                    < ArrowDownwardIcon className='arrow'/>
                    <Button style={{border: '1px solid #3C4242', color: '#3C4242'}} variant='outlined' className='card_btn'>SHOP NOW</Button>
                  </div>
                </div>
                <div className='card_five'>
                  <div className='card_four-div'>
                    <h2 className='card_h'>Oversized <br/> T-Shirts</h2>
                    <h4 className='card_h'>Street Style Icon</h4>
                    <h3 className='card_h'>FLAT 60% OFF</h3>
                    < ArrowDownwardIcon className='arrow'/>
                    <Button style={{border: '1px solid #3C4242', color: '#3C4242'}} variant='outlined' className='card_btn'>SHOP NOW</Button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default ShopCards