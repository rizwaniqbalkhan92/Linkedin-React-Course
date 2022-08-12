import React,{createContext, useContext} from 'react'
import Picker from './Picker';
import {  PixelFillComponent } from './Pixel';


export const ColorContext=createContext(
    {
        color:'lightGrey',
        setColor:()=>{}
    }
);



const PixelArt = () => {
const {color,setColor}=useContext(ColorContext)

  return (

    <ColorContext.Provider  value={ColorContext} >
    <Picker/>
    <PixelFillComponent/>
    </ColorContext.Provider>
  )
}

export default PixelArt