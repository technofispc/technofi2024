import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

function Heading(){
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
          Bytes of Brilliance
        </div>
        </div>
    )
}
function Body() {
    return (
      <div className='w-5/6 h-auto border border-yellow-orange rounded-3xl p-10 mt-10 shadow-lg text-yellow-orange'>
        <h2 className='text-5xl font-bold text-center mb-8 text-yellow-orange'>Details</h2>
        <p className='text-lg mb-6'>
          "Bytes of Brilliance" is a unique challenge that combines the power of AI development with the thrill of solving complex puzzles. Participants will engage in a competitive environment where they must strategically balance their time between building a Generative AI product and solving puzzles to unlock valuable resources.
        </p>

        <div className='flex justify-around items-center text-lg mt-8 mb-8'>
        <div className='text-center'>
          <strong>Participants per Team:</strong>
          <p>2 participants</p>
        </div>
        <div className='text-center'>
          <strong>Time Provided:</strong>
          <p>2 hours</p>
        </div>
        <div className='text-center'>
          <strong>Location:</strong>
          <p>Computer Lab</p>
        </div>
      </div>
        
        <h3 className='text-2xl font-semibold mb-4'>Rules and Regulations:</h3>
        <ol className='list-decimal list-inside space-y-3'>
          <li>
             Build a Generative AI (GENAI) product that generates structured documents or media. The product can be either a CLI or GUI application.
          </li>
          <li>
                     Includes a mandatory initial puzzle to obtain an API key and optional puzzles for additional tools or hints.
          </li>
          <li>
                     The first puzzle is mandatory. Additional puzzles are optional and provide advantages in product development.
          </li>
          <li>
                     Use any programming languages, libraries, or frameworks. Internet use is allowed but participants cannot connect with anyone externally for help.
          </li>
          <li>
                     Code must be pushed to a GitHub repository created via a GitHub assignment. Instructions must be provided in the README.
          </li>
          <li>
                     Functionality is the primary criterion. Innovation, user experience, and efficiency will be considered in case of similar submissions.
          </li>
          <li>
             External communication or tampering with other teams' work will result in disqualification.
          </li>
        </ol>

        <div className='w-full p-8 mt-10'>
        <h3 className='text-3xl font-semibold text-yellow-orange mb-6 text-center'>Support and Contact</h3>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='text-center mb-6 md:mb-0'>
            <p className='text-lg'>Adeesh Garg</p>
            <p className='text-lg'>+91 8218668427</p>
          </div>
          <div className='text-center'>
            <p className='text-lg'>Krrish Verma</p>
            <p className='text-lg'>+91 70170 45758</p>
          </div>
        </div>
        </div>
      </div>
    );
  }

function Event() {
  const { id } = useParams();

  return (
    <div className='bg-background flex flex-col justify-center items-center'>
        <Header />
        <Heading />
        <Body />
        <Footer />
    </div>
  )
}

export default Event