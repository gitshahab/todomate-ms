import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center p-2 border-t'>
        <p className='text-gray-900 dark:text-gray-200'>Made with ❤️, ©{date} todomate. All rights reserved.</p>
    </div>
  )
}
