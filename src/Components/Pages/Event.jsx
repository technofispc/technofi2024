import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react';

const eventDetails = {
  anatomy : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/anatomy.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYW5hdG9teS5qc29uIiwiaWF0IjoxNzI1MDc3ODEwLCJleHAiOjE3NTY2MTM4MTB9.EYgXBRSNfVG_7KbCdKc9UFpimdU7P8qEwP94OBi6_k0&t=2024-08-31T04%3A16%3A51.059Z",
  ascent : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/ascent.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYXNjZW50Lmpzb24iLCJpYXQiOjE3MjUwNzc4MzgsImV4cCI6MTc1NjYxMzgzOH0.oM8lgjt8tSqM_gPb-EF2g5ehDBmkHsPmvdpS_Ds4M-0&t=2024-08-31T04%3A17%3A18.493Z",
  byte : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/byte.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvYnl0ZS5qc29uIiwiaWF0IjoxNzI1MDc3Nzg5LCJleHAiOjE3NTY2MTM3ODl9.Dac_StL_A2CYb3LjFCzLbKccBuUxcUpKFm3hm13ddkw&t=2024-08-31T04%3A16%3A29.979Z",
  mech : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/mech.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvbWVjaC5qc29uIiwiaWF0IjoxNzI1MDc3ODY3LCJleHAiOjE3NTY2MTM4Njd9.UbkM2azumtc4vBlfCacom69WBrc4H_f2y1fXsQFmM9s&t=2024-08-31T04%3A17%3A47.404Z",
  picto : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/picto.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcGljdG8uanNvbiIsImlhdCI6MTcyNTA3Nzg4MCwiZXhwIjoxNzU2NjEzODgwfQ.Vh_dGY6NimkxSnbyK79rPeeb2As9FMn7lXumGjy8ZRQ&t=2024-08-31T04%3A18%3A00.589Z",
  pseudo : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/pseudo.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcHNldWRvLmpzb24iLCJpYXQiOjE3MjUwNzc4OTYsImV4cCI6MTc1NjYxMzg5Nn0.kMDpUd7o_cXGfQ3zbHC75BtE6-rfASNpNp3NgZCRj-s&t=2024-08-31T04%3A18%3A16.453Z",
  chaos : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/rock.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHMvcm9jay5qc29uIiwiaWF0IjoxNzI1MDc3OTEyLCJleHAiOjE3NTY2MTM5MTJ9.vv-E6ZzRRisfSPsgofTxmY_J3g29MCAxe-oclV1vyiA&t=2024-08-31T04%3A18%3A33.042Z"
}



function Heading({data}) {
    return(
        <div className='mt-20 flex flex-col justify-center items-center'>
            <div className='text-center font-[Inter] text-5xl font-semibold leading-normal tracking-[1.44px] h-fit text-yellow-orange'>
          EVENT
        </div>
        <div className='w-80 bg-white h-[1px]'></div>
        <div className='text-center font-[Inter] text-8xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {data.event.name}
        </div>
        </div>
    )
}
function Body({data}) {
    return (
      <div className='w-5/6 h-auto border border-yellow-orange rounded-3xl p-10 mt-10 shadow-lg text-yellow-orange'>
        <h2 className='text-5xl font-bold text-center mb-8 text-yellow-orange'>Details</h2>
        <p className='text-lg mb-6'>
          {data.event.introduction}
        </p>

        <div className='flex justify-around items-center text-lg mt-8 mb-8'>
        <div className='text-center'>
          <strong>Participants per Team:</strong>
          <p>{data.event.participants_per_event} participants</p>
        </div>
        <div className='text-center'>
          <strong>Time Provided:</strong>
          <p>{data.event.time_provided}</p>
        </div>
        <div className='text-center'>
          <strong>Location:</strong>
          <p>{data.event.location}</p>
        </div>
      </div>
        
        <h3 className='text-2xl font-semibold mb-4'>Rules and Regulations:</h3>
        <ol className='list-decimal list-inside space-y-3'>
          {data.event.rules_and_regulations.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>

        <div className='w-full p-8 mt-10'>
        <h3 className='text-3xl font-semibold text-yellow-orange mb-6 text-center'>Support and Contact</h3>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='text-center mb-6 md:mb-0'>
            <p className='text-lg'>{data.event.coordinators[0].name}</p>
            <p className='text-lg'>{data.event.coordinators[0].contact_number}</p>
          </div>
          <div className='text-center'>
            <p className='text-lg'>{data.event.coordinators[1].name}</p>
            <p className='text-lg'>{data.event.coordinators[1].contact_number}</p>
          </div>
        </div>
        </div>
      </div>
    );
  }

function Event() {

  const [data, setData] = useState(null);

  const id = useParams().id

  const url  = eventDetails[id]


  useEffect(() => {
    fetch(url)  // Replace with your URL
      .then((response) => response.json())  // Parse the JSON from the response
      .then((data) => setData(data))        // Set the data in state
      .catch((error) => console.error('Error fetching data:', error));
  }, [url]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-background flex flex-col justify-center items-center overflow-hidden'>
        <Header />
        <Heading data = {data}/>
        <Body data = {data}/>
        <Footer />
    </div>
  )
}

export default Event