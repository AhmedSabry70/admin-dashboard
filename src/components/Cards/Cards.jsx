import React from 'react'


import { CardsData } from '../../Data/Data';
import {Card} from '../../components';

import './Cards.scss';

const Cards = () => {
  return (
      <div className='Cards'>
          {CardsData.map((card, index) => (
              <div className="card__box" key={index}>
                  <Card
                      title={card.title}
                      color={card.color}
                      barValue={card.barValue}
                      value={card.value}
                      png={card.png}
                      series={card.series}
                  />
              </div>
          ))}
    </div>
  )
}

export default Cards