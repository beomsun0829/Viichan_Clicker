import { useState } from 'react'
import './App.css'

import popviichan1 from './popviichan1.png'
import popviichan2 from './popviichan2.png'

let nowimg = popviichan1

function App() {
  const [count, setCount] = useState(1)

  function clickimg() {
    setCount(count + 1)
    if(count % 2 === 0) {
      nowimg = popviichan1
    }
    else {
      nowimg = popviichan2
    }
  }



  return (
      <div className="App" onClick={clickimg}>
      
        <div className="Title">
          POP Viichan
        </div>

        <div className='Count'>
          {count}
        </div>

        <div className="ViichanImg">
          <img src={nowimg} height={700}/>
        </div>
    </div>
  )
}

export default App
