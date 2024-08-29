import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch'
const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[22px] not-italic font-bold leading-7'
const paraHeaderStyles = 'flex px-4 pt-1 pb-3 flex-col self-stretch item-stretch' 
const paraTextStyles = 'text-white text-[16px] font-dlig-on font-[Lexend] leading-6 font-normal'

function Hero(){
    return(
        <div className='w-full bg-oppen aspect-w-16 aspect-h-9 bg-cover'>
            <div className='h-full flex flex-col justify-center items-center'>
            <div className='h-fit text-white text-3xl uppercase font-medium tracking-wider'>
                Welcome to Technofi 2024
            </div>
            <div className='text-center font-[Inter] text-[150px] font-semibold leading-normal tracking-[1.44px] h-fit text-yellow-orange'>
                HISTORY
            </div>
            </div>
        </div>
    )
}

function Brochures(){
    return (
        <section className='w-full'>
                <div className='text-center font-[Inter] text-5xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Over the years
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10 mt-5 p-4'>
            <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2016 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2016</p>
            </div>
            <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2017 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2017</p>
            </div>
            <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2018 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2018</p>
            </div>
            <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2019 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2019</p>
            </div>
            <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2022 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2022</p>
            </div>
        </div>
            </section>
    )
}

function Leaders(){
    return(
        <div>
        <div className='h-52 w- border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-semibold'>2016</div>
                <div className='flex-1'></div>
            </div>
        </div>
        <div className='h-52 w- border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-semibold'>2017</div>
                <div className='flex-1'></div>
            </div>
        </div>
        <div className='h-52 w- border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-semibold'>2018</div>
                <div className='flex-1'></div>
            </div>
        </div>
        <div className='h-52 w- border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-semibold'>2019</div>
                <div className='flex-1'></div>
            </div>
        </div>
        <div className='h-52 w- border m-10 rounded-2xl border-yellow-orange flex flex-row overflow-hidden pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-semibold'>2022</div>
                <div className='flex-1'></div>
            </div>
        </div>
        </div>
    )
}

function PastLeaders(){
    return(
        <div className='mt-20'>
            <div className='text-center font-[Inter] text-5xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Past Leaders
        </div>
        <Leaders/>
        </div>
    )
}


export default function History() {
  return (
    <div className='bg-[#0c0000]'>
        <Header/>
        <Hero/>
        <Brochures/>
        <PastLeaders/>
        <Footer/>
    </div>
  )
}
