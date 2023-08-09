import Navbar from "./components/Navbar"
import HomeLanding from "./components/HomeLanding"
import {useState} from "react"

function App() {
  const[darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className={darkMode ? "dark":""}>
      <div className="h-screen bg-gray-950 text-slate-100 ">
        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} />
        <HomeLanding />
      </div>
    </div>
    )
}

export default App
