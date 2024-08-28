import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Hero(){
    return(
        <div className='w-full bg-oppen aspect-w-16 aspect-h-9 bg-cover'>
            <div className='h-full flex flex-col justify-center items-center'>
            <div className='h-fit text-white text-3xl uppercase font-medium tracking-wider'>
                Welcome to Technofi 2024
            </div>
            <div className='text-center font-[Inter] text-[150px] font-semibold leading-normal tracking-[1.44px] h-fit text-yellow-orange'>
                EVENTS
            </div>
            </div>
        </div>
    )
}

function Event(){
    return(
        <>
        <div className='h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden'>
            <img src="./public/download.jpg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-white h-full w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    This event is a coding competition where participants will be given a set of problems to solve in a limited amount of time. The participants will be judged based on the number of problems solved and the time taken to solve them.
                </div>
            </div>
        </div>
        <div className='h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange flex flex-row-reverse overflow-hidden'>
            <img src="./public/download.jpg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-white h-full w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    This event is a coding competition where participants will be given a set of problems to solve in a limited amount of time. The participants will be judged based on the number of problems solved and the time taken to solve them.
                </div>
            </div>
        </div>
        <div className='h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden'>
            <img src="./public/download.jpg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-white h-full w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    This event is a coding competition where participants will be given a set of problems to solve in a limited amount of time. The participants will be judged based on the number of problems solved and the time taken to solve them.
                </div>
            </div>
        </div>
        <div className='h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange flex flex-row-reverse overflow-hidden'>
            <img src="./public/download.jpg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-white h-full w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    This event is a coding competition where participants will be given a set of problems to solve in a limited amount of time. The participants will be judged based on the number of problems solved and the time taken to solve them.
                </div>
            </div>
        </div>
        <div className='h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden'>
            <img src="./public/download.jpg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-white h-full w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    This event is a coding competition where participants will be given a set of problems to solve in a limited amount of time. The participants will be judged based on the number of problems solved and the time taken to solve them.
                </div>
            </div>
        </div>
        </>
    )
}

function EventSet(){
    return(
        <div className='w-full flex flex-col items-center'>
            <Event/>
        </div>
    )
}
export default function Events() {
  return (
    <div className='bg-[#0c0000]'>
        <Header/>
        <Hero/>
        <EventSet/>
        <Footer/>
    </div>
  )
}
