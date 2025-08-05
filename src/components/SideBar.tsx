'use client'
import { reduxStoreState } from '@/app/reduxStore/store';
import React from 'react'
import { useSelector } from 'react-redux'

export default function SideBar() {
  const sideBarState=useSelector((state:reduxStoreState)=>state.sideBar.isOpened);
  return (
    <div>{sideBarState?"true":"false"}</div>
  )
}
