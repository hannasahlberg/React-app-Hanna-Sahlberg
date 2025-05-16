import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />

      </div>
    </>
  )
}

export default App
