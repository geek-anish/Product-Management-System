import React, { useEffect, useState } from 'react'

const LearnUseEffect2 = () => {
    let name="nitan"
    let [address,setAddress]=useState("ktm")

    /* 
    useEffect(fun,[dep1,dep2])
    what are dependency
     */

    useEffect(()=>{
        let country="nepal"
        console.log(name)
        console.log(address)
        console.log(country)
    },[name,address])
    /*
    dependency
    they are the variable used in useeffect
    but they must be defined outside useeffect 
     */
  return (
    <div>LearnUseEffect2</div>
  )
}

export default LearnUseEffect2