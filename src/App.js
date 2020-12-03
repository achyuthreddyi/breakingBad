import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const characters = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(characters.data)
    }
    fetchItems()
    setIsLoading(false)
  }, [query])
  console.log(items)

  return (
    <div>
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
