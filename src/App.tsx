import Navbar from "./components/Navbar"
import HomeLanding from "./components/HomeLanding"
import LearnMore from "./components/LearnMore"
import {useState} from "react"

function App() {
  const[darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className={darkMode ? "dark":""}>
      <div className="bg-slate-50 text-slate-900 w-full">
        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} />
        <HomeLanding />
        <LearnMore />
      </div>
    </div>
    )
}

export default App
