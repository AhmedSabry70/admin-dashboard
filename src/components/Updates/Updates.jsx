import React from 'react'
import { UpdatesData } from '../../Data/Data'

import './Updates.scss'

const Updates = () => {
  return (
    <div className='updates'>
      {UpdatesData.map((update, index) => (
        <div className="update" key={index}>
          <img src={update.img} alt='avatar' />
          <div className="noti">
            <div className="" style={{marginBottom: '0.5rem'}}>
              <span>{ update.name}</span>
              <span> { update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
          
          
        </div>
      ))}
    </div>
  )
}

export default Updates