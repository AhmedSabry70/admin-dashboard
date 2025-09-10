import React from 'react'

import {Updates, CustomerReview} from '../../components'

import './RightSide.scss'

const RightSide = () => {
  return (
      <div className='rightside'>
          <div>
              <h3>Updates</h3>
              <Updates />
          </div>
          <div>
              <h3>Customer Review</h3>
              <CustomerReview />
          </div>
    </div>
  )
}

export default RightSide