import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';


function Hero(){
    return(
        <div className='w-full bg-oppen aspect-w-16 aspect-h-9 bg-cover mt-20 lg:mt-0'>
            <div className='h-full flex flex-col justify-center items-center'>
            <div className='h-fit text-white text-base min-[490px]:text-lg md:text-xl lg:text-3xl uppercase font-medium tracking-wider'>
                Welcome to Technofi 2024
            </div>
            <div className='text-center font-[Inter] text-3xl min-[350px]:text-5xl min-[490px]:text-8xl md:text-[120px] xl:text-[150px] font-semibold leading-normal tracking-[1.44px] h-fit text-yellow-orange'>
                EVENTS
            </div>
            </div>
        </div>
    )
}

function Event(){

    const navigate = useNavigate();

    return(
        <>
        <div className='w-full xl:flex flex-wrap grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row-reverse overflow-hidden cursor-pointer' onClick={() => navigate('/events/mech')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy83LmpwZyIsImlhdCI6MTc1NzYxMDc3MiwiZXhwIjoxNzg5MTQ2NzcyfQ.zIEu4vAb4U8_KhB_jPNl0u5l4XYLDRj4KIFlIKWZwz0" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Mech Mayhem</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>Build.Battle.Conquer</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Prepare for an epic showdown between robotic warriors! In this thrilling competition, skilled engineers and programmers will pit their creations against one another in a battle of wits and technology.
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/anatomy')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8zLmpwZyIsImlhdCI6MTc1NzYxMDc4NywiZXhwIjoxNzg5MTQ2Nzg3fQ.cgL7vDnzwcahdeWQASTThiWQFoqa2pscahX1fKmYDyc" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Anatomy Architects</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>Blueprint for Life: Decoded</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Fellow Architects, Welcome to St. Peter's College. We present to you Techno-fi 9.0 Biology event Anatomy Architects. Join us today and delve into the fascinating world of Biology. The event provides a platform to the students who wish to showcase their innovative talents creative ideas.
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row-reverse overflow-hidden cursor-pointer' onClick={() => navigate('/events/ascent')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy81LmpwZyIsImlhdCI6MTc1NzYxMDgwMCwiZXhwIjoxNzg5MTQ2ODAwfQ.2NhTUJOoKX9Cwv6iQeZ4YZ5jmcCj3HeYRKc_zoFzLPc" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Ascent Assault</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>Bring me the arsenal</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Ascent Assault, the name has been taken from its most famous and the most played map 'Ascent'. Valorant is a 5v5 tactical FPS. This game has been choosen because of its popularity and the competitive nature of the game.
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/byte')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8yLmpwZyIsImlhdCI6MTc1NzYxMDgxOCwiZXhwIjoxNzg5MTQ2ODE4fQ.FMRsFcaULKtF3etAhUSM1bR27mwvK067o8KdxXeHTbg" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Bytes of Brilliance</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>A byte sized taste of future</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Bytes of Brilliance, the sui generis of TECHNOFI where you will step into the future of world. The event is a platform for the students to showcase their innovative ideas and creativity.
                </div>
            </div>
        </div>
        
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/picto')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy82LmpwZyIsImlhdCI6MTc1NzYxMDgyOSwiZXhwIjoxNzg5MTQ2ODI5fQ.IprWGAWNAOhW-JrIJ6OLASa1J4jx3FLfQzeoljuA1zI" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Pictomania</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>Capture and create your flair</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Welcome to Pictomania. The ultimate short video making event of the year. With the help of this event, we bring together creative minds to showcase their power in photography and video editing. 
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row-reverse overflow-hidden cursor-pointer' onClick={() => navigate('/events/pseudo')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8xLmpwZyIsImlhdCI6MTc1NzYxMDgzOSwiZXhwIjoxNzg5MTQ2ODM5fQ.cQuOL3FamSs6iR6Vx97WpBWLRF74R6kP-d9zkBhGJtU" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Pseudo Solids</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>Look beyond the surface</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    Welcome to Pseudo Solids, where the ordinary rules of matter are left at the door. Prepare to dive into a world where materials defy classification, revealing the hidden complexities and surprising behaviors of substances that challenge our very understanding of solid and liquid.
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/chaos')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy80LmpwZyIsImlhdCI6MTc1NzYxMDg1MywiZXhwIjoxNzg5MTQ2ODUzfQ.clJ6A9n0GghlJwUdXxU4CcEIDWw2H4FDU2XE6Rbg5xI" alt="" className='h-full'/>
            <div className='flex justify-between items-center py-8 mx-8'>
                <div className='h-full flex justify-center flex-col'>
                    <div className='text-yellow-orange text-2xl font-bold'>Wild Chaos</div>
                    <div className='text-[#DFC9A7] text-lg font-base'>ROCK.RAGE.REBELLION</div>
                </div>
                <div className='text-text-white h-0 xl:h-full w-0 xl:w-3/5 flex items-center' style={{
          backgroundImage: 'linear-gradient(121deg,#DFC9A7 0%, #FBB144  100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
                    The event will endeavour you to set your vocal chords to the sweetest frequencies. You must work your way to the top through your rhythmic vocals, melodious music and soulful beats. The competition will be held in two rounds: A. Video round (online) B. Stage round (offline, Top 08)
                </div>
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
    <div className='bg-[#0c0000] overflow-hidden'>
        <Header/>
        <Hero/>
        <EventSet/>
        <Footer/>
    </div>
  )
}
