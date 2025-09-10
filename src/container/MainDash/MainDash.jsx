import React, { useState } from 'react'
import { SidebarData } from '../../Data/Data';

import images from '../../constans/images'
import { Cards } from '../../components';
import BasicTable from '../../components/Table/Table'



import './MainDash.scss';


const MainDash = () => {
  return (
      <div className='main__dash'>
          <h1 className="head-text">dashboard</h1>
      <Cards />
      <BasicTable />
    </div>
  )
}

export default MainDash