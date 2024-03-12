import { useState, useEffect } from "react"
function About() {
    const [data, setData] = useState([])
   useEffect(()=>{
    fetch('https://api.github.com/users/pari08yadav')
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })
   }, [])

  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="my-about">
      <h1 className='bg-gray-900 text-white-500 p-8 ml-5 mr-5 text-center text-5xl font-bold rounded-lg '>About Me</h1>
      <div className="flex flex-col items-center text-center justify-center">
        
      <div className="w-44 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      </div>

  <div className="container px-5 py-8  mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden ">
        {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://media.licdn.com/dms/image/D5616AQEb5zvhS8bkWA/profile-displaybackgroundimage-shrink_350_1400/0/1677698897735?e=1703116800&v=beta&t=ilS_2strsG4weRgHyrQmWuPTHr4CkcKwULM0hAop_yo"/> */}
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
            <img className="rounded-full" src={data.avatar_url} alt="" />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-white text-lg">{data.name}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-400">HTML | CSS | Python | Flask | MYSQL | Django</p>
            <p className="bg-orange-600 rounded-md text-white font-mono font-bold p-1 mt-2">PYTHON</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-indigo-500 text-3xl  pb-4 font-mono">MY INTRO</h2>
            <h3 className="font-extrabold text-xl mb-2 mt-3">Backend Developer || Django Dev</h3>

          <p className="leading-relaxed text-lg mb-4">I am extremely proficient in Backend Development using python, Django, flask, 
          And apart from Back-End, I have good knowledge in Front-End using 
          HTML & CSS as well as in designing using Adobe Photoshop & Canva. And databases like MySQL, MySQLite
           and continuously engage in trying to extend my skills with new technology.</p>
          
          <a className="text-indigo-400 inline-flex items-center cursor-pointer" href="https://www.linkedin.com/in/parishram-yadav-a102a0231/">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About