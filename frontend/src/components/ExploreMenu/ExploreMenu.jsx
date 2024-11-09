// import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className ='explore-menu' id = 'explore-menu'>
      <h1>Explore our Menu</h1>
      <p className = 'explore-menu-text'>
        This approach can help ensure a clean setup with Vite and React.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className='explore-menu-list-item'
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

// Define PropTypes for category and setCategory
// xác định xem kiểu mà được truyển và. với cate là string, với setCate là function
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
}

export default ExploreMenu
