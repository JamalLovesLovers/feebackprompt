import { useState } from 'react'
import MainComp from './components/MainComp'
import Thanks from './components/Thanks'

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [value, setValue] = useState()

  const handleSubmit = (val) => {
    setHasSubmitted(true)
    setValue(val)

    

  }
 
  return (
    <div className="app">
      {!hasSubmitted && (
        <MainComp
          handleSubmit={handleSubmit} />
      )
      }
      {hasSubmitted && (
        <Thanks value={value} />
      )
      }
    </div>
  )

}

export default App
