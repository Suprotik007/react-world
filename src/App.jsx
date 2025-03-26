import Countries from './countries'
import './App.css'
import { Suspense } from 'react'

const countryPromises=fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
function App() {
  

  return (
    <>
      
      <h1>React World</h1>
      <Suspense fallback={<h3>Going to...</h3>}>
      <Countries countryPromises={countryPromises}> </Countries>
      </Suspense>
      
      
    </>
  )
}

export default App
