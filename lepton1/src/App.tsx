import Navbar from './components/navbar/Navbar.tsx'
import Header from './components/home/Home.tsx'
import Experience from './components/experience/Experience.tsx'
import './App.scss'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Experience/>
      </div>
    </>
  )
}

export default App
