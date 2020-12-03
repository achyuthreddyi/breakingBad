import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ isLoading, items }) => {
  console.log('items in the grid', items)
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.length > 0 &&
        items.map(item => <CharacterItem key={item.char_id} item={item} />)}
    </section>
  )
}

export default CharacterGrid
