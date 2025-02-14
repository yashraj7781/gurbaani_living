// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const Exploremenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Where We Located</h1>
        <p className='explore-menu-text'>Choose from a wide range of premium PG options with top-notch facilities. Our mission is to provide comfort and elevate your living experience, one exceptional stay at a time</p>
        <div className="explore-menu-list">
          {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu