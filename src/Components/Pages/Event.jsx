import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react';

const eventDetails = {
  anatomy : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/anatomy.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvYW5hdG9teS5qc29uIiwiaWF0IjoxNzU3NjEwODY5LCJleHAiOjE3ODkxNDY4Njl9.rKy3HBqQxbYqX6RdPECws1wW3s27lNcYFtn9lU9adbs",
  ascent : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/ascent.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvYXNjZW50Lmpzb24iLCJpYXQiOjE3NTc2MTA4NzcsImV4cCI6MTc4OTE0Njg3N30.r_NSsv7vbYirndIxYU3RNsKb1K977_bWVN4bsIVY9rU",
  byte : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/byte.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvYnl0ZS5qc29uIiwiaWF0IjoxNzU3NjEwODg1LCJleHAiOjE3ODkxNDY4ODV9.hEtqTD6xD96nMaEkcwyZwCOxKgXgQKxwdSNjuKk_HP4",
  mech : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/mech.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvbWVjaC5qc29uIiwiaWF0IjoxNzU3NjEwODkyLCJleHAiOjE3ODkxNDY4OTJ9.kjkUytfeguCks_zaAYv9rO3I-HHrMIoLTZyuHNpgN24",
  picto : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/picto.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvcGljdG8uanNvbiIsImlhdCI6MTc1NzYxMDg5OSwiZXhwIjoxNzg5MTQ2ODk5fQ.7fy_adV0Qfa8aQAwKtJflqUSCelb9SJF5iKnm3biMbk",
  pseudo : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/pseudo.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvcHNldWRvLmpzb24iLCJpYXQiOjE3NTc2MTA5MDksImV4cCI6MTc4OTE0NjkwOX0.EZIxB5jX4YOuwpzKCgDGcIYC2cymyNrV2-c2rNOdXgo",
  chaos : "https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Events/rock.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNDExMzFlMC1lYmQ4LTQ5NjMtOTIzOC1hOGE2ZGY3MTc2OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudHMvcm9jay5qc29uIiwiaWF0IjoxNzU3NjEwOTE4LCJleHAiOjE3ODkxNDY5MTh9.3L1yOew8zVoS7WvzI6sTXr3tHmE-t42djHM1d51hWmQ"
}



function Heading({data}) {
    return(
        <div className='mt-20 flex flex-col justify-center items-center'>
            <div className='text-center font-[Inter] text-2xl sm:text-5xl font-semibold leading-normal tracking-[1.44px] h-fit text-yellow-orange mb-5'>
          EVENT
        </div>
        <div className='w-40 sm:w-80 bg-white h-[1px]'></div>
        <div className='text-center font-[Inter] text-5xl sm:text-8xl font-semibold leading-normal tracking-[1.44px] h-fit mt-5' style={{
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

        <div className='flex flex-wrap justify-around items-center text-lg mt-8 mb-8 gap-10'>
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

        <div className='w-full sm:p-8 mt-10'>
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
    <div className='bg-background overflow-hidden'>
        <Header />
        <div className='flex flex-col justify-center items-center'>
        <Heading data = {data}/>
        <Body data = {data}/>
        </div>
        <Footer />
    </div>
  )
}

export default Event