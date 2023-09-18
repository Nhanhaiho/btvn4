import React from 'react'

const Banner = (props) => {
  return (
    <div className='banner'><img  src={`images/${props.image}`} /></div>
  )
}

export default Banner