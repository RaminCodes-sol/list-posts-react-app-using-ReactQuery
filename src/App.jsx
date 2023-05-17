import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'



const App = () => {

  return (
    <div id='app' className='w-full max-w-[700px] mx-auto p-6'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='post/:id' element={<PostPage />} />
      </Routes>
    </div>
  )
}

export default App
