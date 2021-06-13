// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>
        Dog App
      </header>
      <div>
        <p>犬の画像を表示するサイトです</p>
        <img src='https://images.dog.ceo/breeds/eskimo/n02109961_8295.jpg' alt='dog' />
      </div>
    </div>
  )
}
