import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1240px] px-12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
