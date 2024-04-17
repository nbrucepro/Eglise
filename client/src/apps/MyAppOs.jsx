import React, { Suspense, lazy } from 'react'
import PageLoader from '../components/PageLoader'
const MyApp = lazy(() => import('./MyApp'))

const MyAppOs = () => {
  return (
  <Suspense fallback={<PageLoader />}>
    <MyApp />
  </Suspense>
  )
}

export default MyAppOs