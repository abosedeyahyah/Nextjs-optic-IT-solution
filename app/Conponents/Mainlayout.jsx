import React from 'react'

const Mainlayout = ({children}) => {
  return (
    <div className='text'>
      {/* <h1>HOME</h1>
      <p>SHOP</p>
      <p>FOOD</p> */}
      <main>{children}</main>
    </div>
  )
}

export default Mainlayout
