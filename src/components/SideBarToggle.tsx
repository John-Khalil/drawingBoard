import React from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { openSideBar,closeSideBar } from '@/app/reduxStore/sideBarSlice';
import { UseSelector } from 'react-redux';
import { reduxStoreState } from '@/app/reduxStore/store';

const SideBarToggle = () => {
  const dispatch=useDispatch();
  const isOpened=useSelector((state:reduxStoreState)=>state.sideBar.isOpened);
  return (
    <div className='flex items-center'>
      {/* <button>
        <Menu size={32}/>

      </button> */}
      <Button variant="ghost" className=' z-50 p-0 m-2 ' size="icon" asChild
        onClick={()=>{
          isOpened?dispatch(closeSideBar()):dispatch(openSideBar())
        }}
      >
        <Menu size={64}/>
      </Button>
    </div>
  )
}

export default SideBarToggle;