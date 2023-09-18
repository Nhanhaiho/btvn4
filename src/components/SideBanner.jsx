import React from 'react'

const SideBanner = (props,{width,height}) => {
  return (
    <div className='side_banner'>
       <img src={`images/${props.image}`}  style={{width,height}}/>
    </div>
  )
}

export default SideBanner