import React, { useState } from 'react'

const DarkMode = () => {
const [dark,setDark]=useState(false)

  return (
    <div style={ !dark ? {backgroundColor:"#000",height:'100vh', display:'flex',justifyContent:'center',alignItems:'center' } :  {height:'100vh',display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor:'#fff'}  } >
        <div>
            <button style={!dark ? {backgroundColor:"#fff",color:"#000"}: {backgroundColor:"#000",color:"#fff"} } onClick={()=>setDark(!dark)}>{!dark ?  'LIGHT':'DARK' }</button>
        </div>
    </div>
  )
}

export default DarkMode