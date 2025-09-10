import React, {useState} from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

import './Card.scss'






// const Card = ({title, color, barValue, png, value, series}) => {
const Card = (props) => {
//console.log(props.title);
    const [expanded, setExpanded] = useState(false)
  return (
      <div className='card'>
          <AnimateSharedLayout>
              {
                  expanded ? (
                      <ExpandedCard cardData={props} setExpanded={setExpanded}  />
                  ) :
                    //   <CompactCard cardData={[title, color, barValue, png, value, series] } />
                      <CompactCard cardData={props} setExpanded={() => setExpanded(true)}   />
              }
          </AnimateSharedLayout>
    </div>
  )
}




// COMPACTCARD

const CompactCard= ({cardData , setExpanded}) =>{
   
    const {title, color, barValue, png, value} =cardData
   const Png = png
    console.log(title);
     return (
         <motion.div className="CompactCard"
             style={{
                 background: color.backGround,
                  boxShadow: color.boxShadow
              }}
             onClick={setExpanded}
             layoutId='expandableCard'
         >
             <div className="radialBar">
                  <CircularProgressbar
                     value= {barValue}
                     text={`${barValue}%`}
                 />
                 <span>{ title }</span> 
             </div>
             <div className="details">
                  <Png />
                  <span>{value}</span>  
                 <span>last 24 hours</span>
             </div>
         </motion.div>
     )
}

//EXPANDEDCARD
const ExpandedCard = ({ cardData, setExpanded }) => {
    
    const data = {
        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },

            dropShadow: {
                enable: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35,
            },
            fill: {
                color: ['#fff'],
                type: 'gradient',
            },
            dataLabels: {
               enabled:false
            },
            stroke: {
                curve: 'smooth',
                color: ['#fff'],
            },
            tooltip: {
                x: {
                    format: 'dd/mm/yy HH:mm',
                }
            },
            grid: {
                show:true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:00:00.000Z',
                    '2018-09-19T02:00:00.000Z',
                    '2018-09-19T03:00:00.000Z',
                    '2018-09-19T04:00:00.000Z',
                    '2018-09-19T05:00:00.000Z',
                    '2018-09-19T06:00:00.000Z',
                ],
            },
        }
    }
    
    return (
        <motion.div className="overlay">
 <motion.div className="expandedCard"
            style={{
            background:cardData.color.backGround,
            boxShadow:cardData.color.boxShadow,
            }}
            layoutId='expandableCard'
        >
            
            <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: '#fff'}}>
                <UilTimes onClick={() => setExpanded(false)} />
            </div>
            <span>
                {cardData.title}
            </span>
            <div className="chartContainer">
                <Chart series={cardData.series} type='area' options={data.options} />
            </div>
            <span>last 24 hours</span>
        </motion.div>
        </motion.div>
       
    )
} 


export default Card