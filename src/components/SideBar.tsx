'use client'
import { sideBarState } from '@/app/reduxStore/store';
import React from 'react'
import { useSelector } from 'react-redux'

export default function SideBar() {
  const sideBarState=useSelector((state:sideBarState)=>state.sideBar.isOpened);
  return (
    <div>{sideBarState?"true":"false"}</div>
  )
}
