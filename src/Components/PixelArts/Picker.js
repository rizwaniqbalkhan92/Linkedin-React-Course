import React, { useContext, useEffect } from 'react'
import {ColorContext} from './PixelArt'

const Picker = () => {
const {color,setColor}=useContext(ColorContext);
    const colors=['red','green','blue','orange','navy','yellow','purple'];

    useEffect(()=>{
  console.log(color)
    alert(color)

},[color])
  return (
    <div >
        <h1>Color Picker</h1>
        {
            colors.map((colorMap,index)=>(
                <button key={index} onClick={()=>{setColor(colorMap);alert(colorMap)}} style={{backgroundColor:colorMap,width:100,marginLeft:5,height:100,color:'#fff',borderRadius:'50%'}}>{colorMap}</button>
            ))
        }
    </div>
  )
}

export default Picker