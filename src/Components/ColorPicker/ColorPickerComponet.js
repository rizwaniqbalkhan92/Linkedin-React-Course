import React from 'react'
import { useState } from 'react'
import ColotPicker from './ColotPicker'

const ColorPickerComponet = () => {
    const [bgColor, setBgcolor] = useState('#fff');
    const color = [
        { code: "#CD5C5C", name: "IndianRed" },
        { code: "#E9967A", name: "DarkSalmon" },
        { code: "#FF0000", name: "Red" },
        { code: "#8B0000", name: "DarkRed" },
        { code: "#FFD700", name: "Gold" },
        { code: "#4B0082", name: "Indigo" },
    ]
    return (
        <div style={{ backgroundColor: bgColor,height:'100vh',padding:0,margin:0 }}>
            {
                color.map(color => <ColotPicker bgColor={bgColor} setBgcolor={setBgcolor} hexCode={color?.code} colorName={color.name} />)
            }
        </div>


    )
}

export default ColorPickerComponet