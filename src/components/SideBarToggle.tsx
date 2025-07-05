import React from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const SideBarToggle = () => {
  return (
    <div className='flex items-center'>
      {/* <button>
        <Menu size={32}/>

      </button> */}
      <Button variant="ghost" className=' z-50 p-0 m-2 ' size="icon" asChild
        onClick={()=>{
          // console.log("test")
        }}
      >
        <Menu size={64}/>
      </Button>
    </div>
  )
}

export default SideBarToggle;