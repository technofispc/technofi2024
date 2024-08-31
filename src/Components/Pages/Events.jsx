import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';

const eventDetails = {
    anatomy : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/anatomy.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYW5hdG9teS5qc29uIiwiaWF0IjoxNzI1MDc3ODEwLCJleHAiOjE3NTY2MTM4MTB9.EYgXBRSNfVG_7KbCdKc9UFpimdU7P8qEwP94OBi6_k0&t=2024-08-31T04%3A16%3A51.059Z",
    ascent : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/ascent.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYXNjZW50Lmpzb24iLCJpYXQiOjE3MjUwNzc4MzgsImV4cCI6MTc1NjYxMzgzOH0.oM8lgjt8tSqM_gPb-EF2g5ehDBmkHsPmvdpS_Ds4M-0&t=2024-08-31T04%3A17%3A18.493Z",
    byte : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/byte.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYnl0ZS5qc29uIiwiaWF0IjoxNzI1MDc3Nzg5LCJleHAiOjE3NTY2MTM3ODl9.Dac_StL_A2CYb3LjFCzLbKccBuUxcUpKFm3hm13ddkw&t=2024-08-31T04%3A16%3A29.979Z",
    mech : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/mech.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvbWVjaC5qc29uIiwiaWF0IjoxNzI1MDc3ODY3LCJleHAiOjE3NTY2MTM4Njd9.UbkM2azumtc4vBlfCacom69WBrc4H_f2y1fXsQFmM9s&t=2024-08-31T04%3A17%3A47.404Z",
    picto : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/picto.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcGljdG8uanNvbiIsImlhdCI6MTcyNTA3Nzg4MCwiZXhwIjoxNzU2NjEzODgwfQ.Vh_dGY6NimkxSnbyK79rPeeb2As9FMn7lXumGjy8ZRQ&t=2024-08-31T04%3A18%3A00.589Z",
    psuedo : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/pseudo.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcHNldWRvLmpzb24iLCJpYXQiOjE3MjUwNzc4OTYsImV4cCI6MTc1NjYxMzg5Nn0.kMDpUd7o_cXGfQ3zbHC75BtE6-rfASNpNp3NgZCRj-s&t=2024-08-31T04%3A18%3A16.453Z",
    chaos : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/rock.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcm9jay5qc29uIiwiaWF0IjoxNzI1MDc3OTEyLCJleHAiOjE3NTY2MTM5MTJ9.vv-E6ZzRRisfSPsgofTxmY_J3g29MCAxe-oclV1vyiA&t=2024-08-31T04%3A18%3A33.042Z"
  }

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
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/anatomy')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8zLmpwZyIsImlhdCI6MTcyNTA5MjMwMCwiZXhwIjoxNzU2NjI4MzAwfQ.I3zE_ENppDaubvMwYZ8AYscybdgq3mH_ZL2CZW8v_og&t=2024-08-31T08%3A18%3A20.500Z" alt="" className='h-full'/>
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
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy81LmpwZyIsImlhdCI6MTcyNTA5MjMyNCwiZXhwIjoxNzU2NjI4MzI0fQ.7t-928YorFr-rA6hJ1HSZ6vgKCRyB6Feskm-BvrwP1M&t=2024-08-31T08%3A18%3A45.383Z" alt="" className='h-full'/>
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
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8yLmpwZyIsImlhdCI6MTcyNTA5MjI4MSwiZXhwIjoxNzU2NjI4MjgxfQ.Alefb7GFLdKSOkQbu4bfZLkY1CrMA8V6LBMSHWJ3vLA&t=2024-08-31T08%3A18%3A02.263Z" alt="" className='h-full'/>
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
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row-reverse overflow-hidden cursor-pointer' onClick={() => navigate('/events/mech')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy83LmpwZyIsImlhdCI6MTcyNTExMTExMywiZXhwIjoxNzU2NjQ3MTEzfQ.DMVcdOtl8qPp1aeB-sQGZEhCw2EJk6u_F4OJKoj8e-A&t=2024-08-31T13%3A31%3A53.647Z" alt="" className='h-full'/>
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
        <div className='h-fit xl:h-52 w-5/6 border m-10 rounded-2xl border-yellow-orange xl:flex flex-row overflow-hidden cursor-pointer' onClick={() => navigate('/events/picto')}>
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy82LmpwZyIsImlhdCI6MTcyNTA5MjMzOSwiZXhwIjoxNzU2NjI4MzM5fQ.AIWa0wOBwLfMI-CzZr5lbPz5R64jdMn_sw4A7F4y76k&t=2024-08-31T08%3A19%3A00.175Z" alt="" className='h-full'/>
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
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy8xLmpwZyIsImlhdCI6MTcyNTA5MjI1MSwiZXhwIjoxNzU2NjI4MjUxfQ.F5B3FOfL9FyPq53kEvTgLuS_EXPyuSAdkmw8-Tmf71I&t=2024-08-31T08%3A17%3A31.842Z" alt="" className='h-full'/>
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
            <img src="https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/img/4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL2ltZy80LmpwZyIsImlhdCI6MTcyNTA5MjMxMCwiZXhwIjoxNzU2NjI4MzEwfQ.-o7uqV4V4wHFbiMifS4k7vuh5h0OBR-I4IJCbe570vs&t=2024-08-31T08%3A18%3A31.305Z" alt="" className='h-full'/>
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
