import { useEffect, useState } from "react"
import myImg from '../assets/img/pari3.png'

function Home() {
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
    <section className="text-gray-400 bg-gray-900 body-font pb-5" id="my-home">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">


      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h4>HELLO, I AM</h4>
        <h1 className="title-font  text-9xl font-extrabold mb-4  text-purple-600"> Parishram
          <br className="hidden lg:inline-block"/>
          <span className="typing"></span>
        </h1>
        <p className="mb-8 leading-relaxed">
            {data.bio}
                  
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none shadow-lg
           hover:shadow-indigo-500/50  rounded text-lg "
           >
              <a href="https://github.com">Download CV</a>

            
          </button>
          <button className="ml-4 inline-flex text-gray-400
           bg-gray-800 border-0 py-2 px-6 focus:outline-none shadow-lg
            hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              <a href="https://github.com/pari08yadav">GitHub</a>
            </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
        <img className="object-cover object-center rounded-3xl border-b-purple-600 border-b-8  " alt="Developer Picture" src={myImg} width='300' />
    {/* <div className=" bg-purple-600 max-w-2xl rounded-full  h-12 blur-xl "> </div> */}

      </div>
    </div>
  </section>
  )
}

export default Home