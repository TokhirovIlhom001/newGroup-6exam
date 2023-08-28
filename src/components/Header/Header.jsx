import './header.scss' 

// import React, { useState } from 'react'

import Logo from '../../../public/Logo.svg'
import { Box, IconButton, TextField } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const Header = ({size}) => {

  // const [data, setData] = useState([])
  // 
  // const loadUsersData = async () => {
    // return await fetch('https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts')
    // .then((response) => setData(response.data))
    // .catch((err) => console.log(err));
  // }

  return (
    <div className='container'>
        <div className='header_div'>
    
            <img className='Header_logo' src={Logo} alt="Logo" />
            <div  className='header_menu-div'>
                <NavLink className={'header_menu-p'} to={'/shop'}>Shop</NavLink>
                <NavLink className={'header_menu-p'} to={'/men'}>Men</NavLink>
                <NavLink className={'header_menu-p'} to={'/women'}>Women</NavLink>
            </div> 
            <div>
              <Box>
                <TextField  label=' Search' className='header_input'/>

              </Box>
            </div> 
            <div className='header_btn-div'>
                <NavLink className='header_menu-btn'> <FavoriteBorderIcon/> </NavLink>
                <NavLink className='header_menu-btn'> <PersonOutlineIcon/> </NavLink>
                <div>
                <NavLink className='header_menu-btn' to={'/magazine'}>  <ShoppingCartIcon/>  <span>0</span> </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header