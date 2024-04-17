import { Suspense, lazy, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';

const MyAppOs = lazy(()=> import('./apps/MyAppOs'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<PageLoader/>}>
        <MyAppOs/>
      </Suspense>     
    </BrowserRouter>
    </Provider>
  )
}

export default App
