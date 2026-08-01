import { Navbar } from './components/navbar'
import { Homepage } from './pages/home'
import { LazyMotion, domAnimation } from 'framer-motion'
function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <Homepage />
    </LazyMotion>
  )
}

export default App
