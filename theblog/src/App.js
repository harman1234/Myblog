import React from 'react';
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles/header.css'
import Home from './components/Home';
import Blog from './components/Blog';
import CreateBlog from './components/create';


function App() {
  return (
      <BrowserRouter>
          <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container d-flex justify-content-between align-items-center'>
              <h3 className='text-secondary'>The Blog</h3>
              <ul className='list d-flex'>
                <li className='m-2'><Link to="/" className='link-primary'>Home</Link></li>
                <li className='m-2'><Link to="/create">Add Blog</Link></li>
              </ul>
            </div>
          </nav>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='blog/:id' element={<Blog/>}/>
                <Route path='create' element={<CreateBlog/>}/>
              </Routes>

      </BrowserRouter>
  );
}

export default App;
