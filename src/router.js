import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'

const Home = lazy(() => import('./components/App'))
const Form = lazy(() => import('./components/ContactForm'))

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
        </motion.div>
      </Suspense>
    </AnimatePresence>
  )
}

export default AppRoutes
