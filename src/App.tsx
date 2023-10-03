import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import {useEffect, useState} from "react"
import { SelectedPage } from "@/shared/types"



function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfpage, setIsTopOfpage] =useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfpage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfpage(false)
    }
    window.addEventListener("scroll" ,handleScroll)
    return() => window.removeEventListener("scroll",handleScroll)
  } , [])
  return (
    <div className="app bg-gray-20 ">
      <Navbar
          isTopOfpage ={isTopOfpage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
         />
         <Home setSelectedPage={setSelectedPage}/>
         <Benefits setSelectedPage={setSelectedPage}/>
         <OurClasses setSelectedPage={setSelectedPage}/>
         <ContactUs setSelectedPage={setSelectedPage}/>
         <Footer setSelectedPage={setSelectedPage}/>


    </div>
  )
}

export default App
