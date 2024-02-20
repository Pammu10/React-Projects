import React, { useEffect, useState } from 'react'


const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let hexcolor = '#'
    for (let i = 0; i < 6; i++){
      hexcolor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexcolor)
    setColor(hexcolor)
    
  }
  function handleCreateRandomRgbColor(){
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r},${g},${b})`)
  }
useEffect(()=>{
  if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
  else handleCreateRandomHexColor()
}, [typeOfColor])

  return (
    <div style={
      {
        width: '100vw',
        height: '100vh',
        background: color,
      }
    }>
      <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} >Genereate Random Color</button>
      <div style={
        {
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          fontSize: '60px',
          marginTop: '50px',
          color: 'white'
        }
      }>
        {
        typeOfColor === 'hex'? <><h1>HEX</h1> <h1>{color}</h1></> : <><h1>RGB</h1> <h1>{color}</h1></> 
        }
      </div>
      
    </div>
    
  )
}

export default RandomColor