import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import About from './pages/About'
import Subscribe from './pages/Subscribe'
import Producto from './pages/Producto'
import Caracteristicas from './pages/Caracteristicas'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="producto" element={<Producto />} />
          <Route path="caracteristicas" element={<Caracteristicas />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<PostDetail />} />
          <Route path="about" element={<About />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
