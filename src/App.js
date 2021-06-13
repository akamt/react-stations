// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/eskimo/n02109961_8295.jpg')

  return (
    <div>
      <header>
        Dog App
      </header>
      <div>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl} alt='dog' />
      </div>
    </div>
  )
}
