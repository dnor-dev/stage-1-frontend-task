import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./components/App'))
const Form = lazy(() => import('./components/ContactForm'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Form />} />
    </Routes>
  )
}

export default AppRoutes
