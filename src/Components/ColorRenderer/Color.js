import React from 'react'



const Color = ({hexCode,colorName}) => {
  return (
    <div style={{backgroundColor:hexCode,width:200,height:150}}>
        <p>{colorName}</p>
    </div>
  )
}

export default Color