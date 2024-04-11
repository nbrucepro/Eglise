import { Suspense, lazy, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyAppOs = lazy(()=> import('./apps/MyAppOs'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader/>}>
        <MyAppOs/>
      </Suspense>     
    </BrowserRouter>
  )
}

export default App
