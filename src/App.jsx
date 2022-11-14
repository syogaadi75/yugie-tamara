import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='flex flex-col'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
      {/* <div className='w-full h-screen flex justify-center items-center'>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true" className='text-3xl font-bold'>I will fade in</div>
      </div> */}
    </div>
  )
}

export default App
