import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect, useCallback } from 'react'


export default function Header() {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1280);

    const handleResize = useCallback(() => {
      setIsWideScreen(window.innerWidth > 1280);
    }, []);
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [handleResize]);

    useEffect(() => {
        if (isWideScreen) {
            setShow(false)
        }
      }, [isWideScreen]);

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    let sideBarStyle

    if(show && window.innerWidth < 1280) {
        sideBarStyle = 'fixed w-80 h-screen right-0 z-10 bg-transparent backdrop-blur-md top-0'
    } else {
        sideBarStyle = 'fixed w-80 h-screen right-0 z-10 bg-transparent backdrop-blur-md top-0 hidden'
    }

    const linkStyle = 'flex text-center font-Inter text-base font-medium leading-5 tracking-[0.16px] justify-center items-center text-white'

  return (
    <div>
    <div className='flex w-full h-[80px] py-5 px-10 sm:px-12 md:px-14 lg:px-20 items-center fixed top-0 bg-opacity-50 backdrop-blur-md z-10'>
            <div className='flex justify-between items-center w-screen h-fit'>
                <Link to='/'>
                <div className='flex items-center w-fit'>
                <img src='https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Home/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb21lL2xvZ28uc3ZnIiwiaWF0IjoxNzI1MDg5NjQxLCJleHAiOjE3NTY2MjU2NDF9.iR-jY5FbbksQpPcueGaxrMVfkM7lF5dSNT_1JBQ-vjM&t=2024-08-31T07%3A34%3A01.154Z' alt='logo' className='h-4 flex-1 items-center pr-2' />
                <div className='flex flex-col items-center justify-center text-center font-bold text-lg text-white w-fit whitespace-nowrap'>
                    Technofi
                </div>
                </div>
                </Link>
                <div className='flex justify-center items-center gap-40 w-fit invisible xl:visible'>
                        <div className={linkStyle}>
                            <Link to='/technofi2024'>
                            TECHNOFI 2024
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/'>
                            HOME
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/history'>
                            HISTORY
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/events'>
                            EVENTS
                            </Link>
                        </div>
                        <div className='flex w-24 h-10 flex-col justify-center items-center border rounded bg-yellow-orange shadow-custom'>
                            <a href="https://forms.gle/9eQv1F4ev9KbTGh68" target='_blank'>
                            Register
                            </a>
                        </div>
                </div>
                <img src="./src/assets/menu.svg" className='absolute right-10 sm:right-20 visible xl:invisible' onClick={handleClick} />
            </div>
    </div>
    <div className={sideBarStyle}>
        <div className='flex flex-col w-full pt-20 gap-20 h-full'>
                <img src="./src/assets/close.svg" className='absolute right-10 sm:right-20 top-7 w-7' onClick={handleClick} />
                        <div className={linkStyle}>
                            <Link to='/technofi2024'>
                            TECHNOFI 2024
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/'>
                            HOME
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/history'>
                            HISTORY
                            </Link>
                        </div>
                        <div className={linkStyle}>
                            <Link to='/events'>
                            EVENTS
                            </Link>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                        <div className='flex w-24 h-10 flex-col justify-center items-center border rounded bg-yellow-orange shadow-custom'>
                            <a href="https://forms.gle/9eQv1F4ev9KbTGh68" target='_blank'>
                            Register
                            </a>
                        </div>
                        </div>
                        
            </div>
    </div>
    </div>
  )
}