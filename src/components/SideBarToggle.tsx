import React from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const SideBarToggle = () => {
  return (
    <button>
      <Menu size={32}/>

    </button>
    // <Button variant="ghost" className='absolute top-2.5 left-5 z-50 p-0 m-0 '>
      
    // </Button>
  )
}

export default SideBarToggle;