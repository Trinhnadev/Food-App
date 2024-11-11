import React from 'react'

import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to ="/add"className="sidebar-option">
            <img src={assets.add_icon_green} alt="" />
            <p>Add Itmes</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
            <img src={assets.add_icon_green} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
            <img src={assets.add_icon_green} alt="" />
            <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
