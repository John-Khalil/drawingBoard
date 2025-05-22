import React from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const SideBarToggle = () => {
  return (
    <Button variant="ghost" className='absolute top-2.5 left-5 z-50'>
      <Menu size={32}/>
    </Button>
  )
}

export default SideBarToggle;