// import portrait from "../assets/portrait.jpg"
import Blonde from "../assets/blonde.png"
import Underwater from "../assets/underwater.jpg"
import Man from "../assets/Man.png"
import Aviation from "../assets/Aviation.png"

const HomeLanding = () => {
  return (
<div>
  {/* home section */}
    <div id="home" className="h-screen w-full flex flex-col items-center justify-center 
                    md:flex-row md:justify-center space-y-4 md:space-x-6 lg:space-x-16 ">
                      
      <div className="text-center flex flex-col mb-5 lg:mr-[20px]">
        <div className=" md:mt-0">
          <h1 className="text-5xl md:text-7xl md:mb-8 ">
              {/* Make It A Reality */}
              <h1 className="mb-4"><span className="text-blue-500 ">Imagin</span> it,</h1>
              <h1 className="mb-7 md:mb-12">make it a reality!</h1>
          </h1>
          <button className="w-1/3 py-2.5 md:py-4 mr-4 md:mr-10 bg-slate-900 text-white font-normal rounded">Get started</button>
          {/* <p>Join millions of users who've used the power of ai to bring their own imaginations to life!</p> */}
          <button className="underline hover:no-underline">Join the community </button>
        </div>
        {/* <div className="bg-slate-100 h-44">
          <h2>Create your own comics</h2>
          <h1 className="text-8xl">+</h1>
        </div> */}
      </div>
      <div className="flex flex-col text-center">
        <div className="flex flex-col space-y-4">
          <img className="rounded-xl" src={Aviation} height={450} width={450} alt="Blonde woman" />
        </div>
        <h2 className="tracking-wide"><b><i>"Man in aviation, sunset"</i></b></h2>
        {/* <div className="bg-black h-40">
          <h2>Showcase your imagination</h2>
          
        </div> */}
      </div>
    </div>

    {/* learn more section */}
    <div id="learn-more" className="py-8 h-screen">
      <h2>What is AI Art?</h2>
        
      <input/>
      
      <div className="flex flex-col space-y-4">
          <img className="rounded-xl" src={Underwater} height={450} width={450} alt="Blonde woman" />
      </div>
    </div>

  </div>
  )
}

export default HomeLanding