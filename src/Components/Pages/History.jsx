import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const LeadersName = {
    2014:["Kartik Chhabra", "Benjamin Clarance", "Sehaj Gulati", "Ayushmaan Khemariya", "Anshuman Gilani", "Shrey Khetrapal", "Samridh Mahajan", "Namit Batra", "Yash Khandelwal", "Akhil Gupta"],

    2015 : ["Anmol Gupta", "Atishay Jain", "Anshul Saxena"," Ninaad Milton", "Tarun Kumar", "Chirag Garg", "Manan Agarwal", "Pranjal Gupta", "Apoorva Sharma", "Saksham Agarwal", "Samayak Kuheley", "Yash Jain", "Ayush Singh", "Parth Batra"],

    2016 : ['Shreyans Jain','Anmol Sehgal',  'Pranav Ashra', 'Ayush Grover', 'Shivang Sharma', 'Shrey Agarwal', 'Sagar Khandelwal'],

    2017 : ['Suryansh Gupta', 'Mohd. Anas Ali', 'Harshit Patel', 'Simar Singh Gulati', 'Prabudh Sharma', 'Manvendra Rana', 'Anish Garg', 'Saksham Jain', 'Pratik Dhanwani', 'Abhishek Sharma', 'Pranay Sharma', 'Adarsh Arora', 'Tanmay Jain', 'Varun Singh', 'Darpan Dixit', 'Shantanu Sarawat', 'Shashwat Sharma', 'Siddhartha', 'Aryan Verma', 'Aryaman Verma', 'Aditya Tiwari', 'Nehit Benara', 'Yash Agarwal', 'Varun Kashyap', 'Nidhip Taneja', 'Anant Singh', 'Jeevansh Mehrotra', 'Piyush Garg', 'Pranjul Goyal', 'Akshay Jain', 'Yash Vardhan', 'Apoorva Mehra', 'Rohan Sharma', 'Garvit Kumar', 'Praveg Vashishtha', 'Kushagra Singh', 'Aseem Agarwal', 'Garvit Mahajan', 'Harsh Upadhyaya', 'Pavitra Mohnani', 'Krishna Pareek', 'Lakshay', 'Sahil Jain', 'Shivam Tiwari'],

    2018: ['Manvendra Rana', 'Shivam Tiwari', 'Taran Chawla', 'Hrishabh Mishra', 'Lakshay Bharadwaj', 'Ammar Khaleeque', 'Divyansh Upadhyaya', 'Atishay Goyal', 'Parth Johri', 'Sanskar Sarawat', 'Nakul Gupta', 'Aman Zaidi', 'Neelohit Dutta', 'Kartikay Singhal', 'Sanchit Singhal', 'Skund Srivastava', 'Akshat Jain', 'Nakul Singh', 'Aryan Chandel', 'Harshit Taneja', 'Parv Jain', 'Shobit Verma', 'Abhishek Yadav', 'Vatsal Agarwal', 'Shrey Sabarwal', 'Anush Mangal', 'Prem Jadhwani', 'Anish Garg', 'Saksham Jain', 'Saiyam Sawhney', 'Gaurav Singh', 'Saarim Khan', 'Subhan Shamsi', 'Raunaq Arora', 'Huzaif Hussain', 'Anvit Mathur', 'Yash Tikkha', 'Manas Kumar', 'Aryan Singh', 'Chintan Jain', 'Utkarsh Chaudhary'],

    2019: ['Mohd. Huzaifa', 'Anmol Khandelwal', 'Shubham Singh', 'Kartikey Dutt Gautam', 'Aviral Srivastava', 'Manu Sharma', 'Prakhar Singh', 'Uttkarsh Chaudhary', 'Aayam Chaturvedi', 'Rishabh Rochlani', 'Shaswat Sharma', 'Anush Mangal', 'Shritik Raj', 'Akshat Garg', 'Suryansh Joshi', 'Jai Mehrotra', 'Arjav Jain', 'Gaurang Sharma', 'Aksh Jain', 'Ashutosh Sharma', 'Kartikey Johri', 'Naman Jain', 'Sumit Guwalani', 'Nimit Agarwal', 'Gaurav Mohnani', 'Dhruv Malhotra', 'Pradyumn Mittal', 'Sanskar Kapoor', 'Kushagra Bharadwaj', 'Akshat Mishra', 'Prem Jadwani', 'Ambuj Jain', 'Govind Arora', 'Brahmansh Dhawan'],

    2022: ['Akarsh Agarwal', 'Dhruv Dev', 'Anany Doneria', 'Vansh Tiwari', 'Aditya Agarwal', 'Aryaman Agarwal', 'Shivam Verma', 'Sanidhya Sharma', 'Bhavya Tandon', 'Divyansh Sharma', 'Saumya Khubchandani', 'Rudransh Jain', 'Vishal Parashar', 'Devansh Jain', 'Aakarsh Agarwal']
}

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
        <div className=''>
            <div className='h-fit xl:h-full border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2014</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2014].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
            <div className='h-fit xl:h-full border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2015</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2015].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
        <div className='h-fit xl:h-full border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2016</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2016].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
        <div className='h-fit border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2017</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2017].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
        <div className='h-fit border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2018</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2018].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
        <div className='h-fit border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2019</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2019].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
            </div>
        </div>
        <div className='h-fit border m-10 rounded-2xl border-yellow-orange flex flex-row pt-4'>
            <div className='flex flex-col justify-center items-center text-yellow-600 h-full w-full'>
                <div className='h-fit w-fit text-2xl font-bold'>2022</div>
                <div className='flex-1 flex m-4 gap-10 flex-wrap justify-center items-center'>
                    {LeadersName[2022].map((name) => (
                        <div className='text-white font-bold text-2xl text-center'>{name}</div>
                    ))}
                </div>
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
