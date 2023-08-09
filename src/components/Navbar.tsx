

type NavProp = {
  darkMode:boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<NavProp> = () => {
 

  return (
    <nav className="flex justify-between">
      <h1>RealAI</h1>

      <ul className="flex">
        {/* <li className="mr-4">Home</li>
        <li className="mr-4">Learn More</li>
        <li className="mr-4">Visit The Gallery</li> */}
        <li className="mr-8">Some text</li>
        <li className="mr-8">Some text</li>
        <li className="mr-8">Some text</li>
        {/* <li>Prices</li> */}
        {/* <li>Contact us</li> */}
      </ul>
      {/* <button onClick={() => setDarkMode(!darkMode)}>Click</button> */}

      <h1 className="mr-4">Log in</h1>
    </nav>
  )
}

export default Navbar