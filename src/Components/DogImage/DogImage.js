import React, { useEffect, useState } from 'react'

const DogImage = () => {
const [dogImage,setDogImage]=useState("")
const getDogImage=async()=> {
        const data=await fetch("https://dog.ceo/api/breeds/image/random");
        const imageLink=await data.json();
        return imageLink.message;

}

useEffect(()=>{
  let image=getDogImage()
  setDogImage(image);
},[])

  return (
    <div>
        <h1>Dog Image</h1><br/>
        <img src={dogImage} /><br/>
        <button onClick={async (e)=> setDogImage(await getDogImage())  }>refresh</button>
    </div>
  )
}

export default DogImage