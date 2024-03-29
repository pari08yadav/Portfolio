

function Header() {
  return (
    <header className=" text-gray-400  bg-gray-900  body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Developer</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-home">Home</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-statistic">Statistic</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-about">About</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-service-provider">Services</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-skills">Skills</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-projects">Projects</a>
          <a className="mr-10 hover:text-white cursor-pointer" href="#my-contact">Contact</a>
        </nav>
        <button
          className="inline-flex items-center bg-purple-900
            border-0 py-1 px-3
            focus:outline-none hover:bg-purple-700
            rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;