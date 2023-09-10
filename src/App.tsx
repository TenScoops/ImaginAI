import Navbar from "./components/Navbar"
import HomeLanding from "./components/HomeLanding"
import {useState} from "react"

function App() {
  const[darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className={darkMode ? "dark":""}>
      <div className="bg-slate-900 text-slate-50 w-full">
        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} />
        <HomeLanding />
      </div>
    </div>
    )
}

export default App
