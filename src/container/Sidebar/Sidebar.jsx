import React, { useState } from 'react'
import { SidebarData } from '../../Data/Data';
//import { UilEstate } from '@iconscout/react-unicons'

import images from '../../constans/images'
import './Sidebar.scss';


const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(0)


  return (
      <div className='sidebar'>
          {/* LOG */}
          <div className="logo">
          <img src={images['icon.png']} alt='logo' />
              <span>
                  sh<span>o</span>ps
              </span>
          </div>


          {/* MENU */}

          <div className="menu">
              {SidebarData.map((item, index )=> (
                  <div className={activeLink === index ? 'menuItem active' : 'menuItem'}
                      key={item.heading + index}
                    onClick={()=>setActiveLink(index)}
                  >
                      <item.icon />
                      <span className={`link_${item.heading}`}>
                          {item.heading}
                      </span>

                  </div>
              ))}
          </div>
    </div>
  )
}

export default Sidebar