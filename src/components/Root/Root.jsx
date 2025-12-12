import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'

export default function Root() {
  return (
  <>
    <Header></Header>
    <Outlet></Outlet>
  </>
    
  )
}
