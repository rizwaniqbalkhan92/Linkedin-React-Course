import React from 'react'
import Color from './Color'

const ColorComponent = () => {
    const color=[
        {code:"#CD5C5C",name:"IndianRed"},
        {code:"#E9967A",name:"DarkSalmon"},
        {code:"#FF0000",name:"Red"},
        {code:"#8B0000",name:"DarkRed"},
        {code:"#FFD700",name:"Gold"},
        {code:"#4B0082",name:"Indigo"},
    ]
  return (
    <div>
        {
            color.map(color=><Color  hexCode={color?.code}  colorName={color.name}  />)
        }
    </div>
  )
}

export default ColorComponent