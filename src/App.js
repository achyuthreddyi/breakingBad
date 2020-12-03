import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/ui/Header'

const App = () => {
  const [item, setItem] = useState([])
  
  return (
    <div>
      <Header />
    </div>
  )
}

export default App
