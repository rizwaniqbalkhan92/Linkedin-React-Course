import React from 'react'

const ColotPicker = ({ hexCode, colorName, bgColor, setBgcolor }) => {
    return (
        <div style={{width:200,height:120,backgroundColor:hexCode}} onClick={()=>setBgcolor(hexCode)}>
            <p>{colorName}</p>

        </div>
    )
}

export default ColotPicker