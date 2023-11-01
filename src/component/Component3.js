import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../App'

export const Component3 = () => {
    const user= useContext(Mycontext)
  return (
    <div style={{background:'pink',margin:'auto',width:'3git 0%'}}>This is {user} third component </div>
  )
}
