import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      <div className="sidebar-opt">
        <NavLink to='/add' className="sidebar-option">
         <img src={assets.add_icon} alt="" />
         <p>Add Items</p>
        </NavLink>
        <NavLink to='/List' className="sidebar-option">
         <img src={assets.order_icon} alt="" />
         <p>Lits Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
         <img src={assets.order_icon} alt="" />
         <p>Orders</p>
        </NavLink>
      </div>
      </div>
    </div> 
    
  )
}

export default Sidebar
