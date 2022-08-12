import React, { useContext, useState } from 'react'
import {ColorContext} from './PixelArt';


export const Pixel = () => {
    const { color } = useContext(ColorContext);
    const [pixel, setPixel] = useState('lightGrey');

    return (

        <div onClick={() => setPixel(color)} style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: pixel }}>

        </div>

    )
}


export const PixelFillComponent=()=>{
const  boxes=[];
for(let i=1; i<=20; i++){
    boxes.push(<Pixel/>);

}

return (
    <div style={{display:'flex',justifyContent:'space-around',width:200,marginTop:20,marginLeft:'auto',marginRight:'auto', flexWrap:'wrap'}}>
        {boxes}
    </div>
)

}