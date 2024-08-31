import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const core = ["Harshit Agarwal", "Jatin Mohnani", "Krishna Goyal" ]

const team = ["Adeesh Garg","Mayank Sharma", "Parth Bhatnagar", "Garvit Gupta", "Rachit Sadana",  "Krrish Verma", "Sidak Sachdeva", "Vitthal Singh", "Nityam Agarwal", "Abhinav Gupta", "Mohd. Junaid", "Avanindra Singh", "Shreyas Tiwari", "Arpit Bansal", "Prince Gupta", "Achintya Parashar"]

function Hero(){

  const handleDownload = () => {
    const pdfUrl = 'https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/2024/Technofi%202024.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIyMDI0L1RlY2hub2ZpIDIwMjQucGRmIiwiaWF0IjoxNzI1MTI1ODI1LCJleHAiOjE3NTY2NjE4MjV9.xb0ksYHlZOT8VbTerD6OCR0evy7b9AGTAkpoYcS_09Q&t=2024-08-31T17%3A37%3A06.548Z'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = pdfUrl; 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const navigate = useNavigate()
  return(
    <div className='w-full lg:h-[600px] mt-28 lg:mt-40 lg:flex justify-center'>
      <div className='lg:w-1/2 flex justify-center items-center h-full'>
      <div className='bg-center bg-broch2024 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer w-2/3' style={{ aspectRatio: '724 / 1024'}}>
            </div>
      </div>
      <div className='mt-10 lg:w-1/2 flex flex-col justify-center items-center gap-5 lg:gap-10 lg:mt-0'>
                <div className='flex w-60 h-10 flex-col justify-center items-center border rounded-full bg-yellow-orange text-lg font-bold cursor-pointer' onClick={handleDownload}>
                    Download Brochure
                </div>
                <div className='flex w-60 h-10 flex-col justify-center items-center border rounded-fu bg-yellow-orange text-lg font-bold rounded-full cursor-pointer' onClick={() => navigate('/events')}>
                    Events
                </div>
      </div>
    </div>
  )
}


function Coordinators(){
  return(
    <div className='mt-20'>
      <div className='text-center font-[Inter] text-3xl md:text-5xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          COORDINATORS
        </div>
        <div className='flex justify-center items-center mt-20 gap-5 sm:gap-20 lg:gap-40 px-10 lg:px-0'>
          <div className='w-fit flex flex-col justify-center items-center gap-5'>
          <img src= "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/2024/Coordinators/Mam.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIyMDI0L0Nvb3JkaW5hdG9ycy9NYW0uanBnIiwiaWF0IjoxNzI1MDkwNDIwLCJleHAiOjE3NTY2MjY0MjB9.XIhNqr7m2Kmcq89ZxHT8og2gMGRaDF9NpNAZWNcqAWM&t=2024-08-31T07%3A47%3A00.436Z" alt="coordinator" className='rounded-3xl lg:w-[400px]'/>
          <div className='text-white text-lg md:text-2xl lg:text-3xl text-center'>Sharlly P. Singh</div>
          </div>
          <div className='w-fit flex flex-col justify-center items-center gap-5'>
          <img src= "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/2024/Coordinators/SIR.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIyMDI0L0Nvb3JkaW5hdG9ycy9TSVIuanBnIiwiaWF0IjoxNzI1MDkwNDMyLCJleHAiOjE3NTY2MjY0MzJ9.6SCm5EMWIXhNoYcIVU457vU-b5KHIJkHpZirZRHprRU&t=2024-08-31T07%3A47%3A12.300Z" alt="coordinator" className='rounded-3xl lg:w-[400px]'/>
          <div className='text-white text-lg md:text-2xl lg:text-3xl text-center'>Rakshit John</div>
          </div>
        </div>
    </div>
  )
}

function Quote(){
  return(
    <div className='text-center font-[Inter] text-5xl md:text-6xl lg:text-8xl font-semibold leading-normal tracking-[1.44px] h-fit text-white my-20'>
      "I BELIEVE WE DID"
    </div>
  )
}

function Team(){
  return(
    <div>
      <div className='text-center font-[Inter] text-5xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          THE TEAM
        </div>
        <div className='flex justify-center items-center gap-7 lg:gap-20 my-20 flex-wrap px-10'>
          {core.map((member) =>
            <div className='w-80 h-20 border border-yellow-orange rounded-3xl text-white flex justify-center items-center text-xl sm:text-2xl font-bold'>
              {member}
            </div>
          )}
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 px-10'>
          {team.map((member) => (
            <div className='flex flex-col justify-center items-center'>
              <div className='text-2xl font-bold text-white text-center'>{member}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default function T2024() {
  return (
    <div className='bg-background overflow-hidden'>
      <Header />
      <Hero />
      <Coordinators />
      <Quote />
      <Team />
      <Footer />
    </div>
  )
}
