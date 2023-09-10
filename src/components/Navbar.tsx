import {useState, useEffect} from "react"
import {RxHamburgerMenu} from "react-icons/rx"
import {IoEnterOutline} from "react-icons/io5"
import {AiOutlineClose} from "react-icons/ai"
// import { IoIosAdd } from "react-icons/io"

type NavProp = {
  darkMode:boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<NavProp> = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentHash, setCurrentHash] = useState<string>('');

  // for position highlight navbar effect, Home will highlight if on home screen
  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById('home');
      const learnMoreElement = document.getElementById('learn-more');
  
      if (!homeElement || !learnMoreElement) return;
  
      const homePosition = homeElement.offsetTop;
      const learnMorePosition = learnMoreElement.offsetTop;
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= homePosition && scrollPosition < learnMorePosition) {
        setCurrentHash('#home');
      } else if (scrollPosition >= learnMorePosition) {
        setCurrentHash('#learn-more');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    
    //cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-2 fixed top-0 w-full z-50 bg-slate-800">
      <h1 className="ml-5 text-lg">Imagin<span className="text-blue-400">AI</span></h1>

      <button 
          className={`${isOpen?"hidden":"block"} mr-5 md:hidden`} 
          onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu size={25}/>
      </button>
      
     
      
      {/* mobile screens */}
      <div className={`${isOpen ? "block" : "hidden"} fixed inset-0 bg-gray-800 
                    flex justify-center items-center md:hidden`}>
      <button
        className="absolute top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineClose size={25}/>
      </button>

        <ul className="cursor-pointer text-lg flex flex-col items-center">
          {/* <li className="text-4xl">ImaginAI</li> */}
          <li className="hover:underline ">Learn More</li>
          <li className="hover:underline mt-8">Some text</li>
          <li className="hover:underline mt-8">Some text</li>
          <li className="hover:underline mt-8">Some text</li>
          <li className="hover:underline mt-8 text-blue-400">Log in</li>
        </ul>

      </div>

      {/* medium screens and above */}
      <ul className="cursor-pointer hidden md:flex">
        <li className={`hover:text-blue-400 mr-8 ${currentHash === '#home' ? 'text-blue-400' : ''}`}>
          <a href="#home">
            Home
          </a>
        </li>
        <li className={`hover:text-blue-400 mr-8 ${currentHash === '#learn-more' ? 'text-blue-400' : ''}`}>
          <a href="#learn-more">
            Learn More
          </a>
        </li>
        <li className="hover:text-blue-400 mr-8">Some text</li>
        <li className="hover:text-blue-400 mr-8">Some text</li>
        <li className="hover:text-blue-400 mr-8">Some text</li>
      </ul>


      <button className="hidden mr-5 bg-white text-black w-32 py-2 md:block ">
        <span className="flex justify-center items-center text-md font-bold">
          Log in <IoEnterOutline className="ml-3" size={25}/>
        </span>
      </button>
      
    </nav>
  )
}

export default Navbar