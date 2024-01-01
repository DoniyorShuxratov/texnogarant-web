import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar';
import Home from './pages/Home/HomeScreen';

import ProductIndex from './pages/Products/mainScreen/ProductIndex';
import ProductScreen from './pages/Products/ProductScreen';
import NewsIndex from './pages/News/mainScreen/NewsIndex';
import NewsScreen from './pages/News/NewsScreen';
import OfficesIndex from './pages/Offices/MainScreen/OfficesIndex';
import DislocationIndex from './pages/Dislocation/MainScreen/DislocationIndex';
import DislocatioScreen from './pages/Dislocation/DialocationScreen';
import ExtraNumbersScreen from './pages/Offices/ExtraNumbersScreen';
import OfficesScreen from './pages/Offices/OfficesScreen';
import TechnologyScreen from './pages/Offices/TechnologyScreen';
import ManagersScreen from './pages/Offices/ManagersScreen';

function App() {
  return <div className="App">
    <Router>
      <div>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
          <Route path="/products" element={<ProductIndex />} />
          <Route path="/news" element={<NewsIndex/>} />
          <Route path="/offices" element={<OfficesIndex/>} />
          <Route path="/dislocation" element={<DislocationIndex/>} />

          <Route path='/product-screen' element={<ProductScreen />}/>
          <Route path='/news-screen' element={<NewsScreen />}/>
          <Route path='/dislocation-screen' element={<DislocatioScreen />}/>
          
          
          <Route path='/extra-numbers-screen' element={<ExtraNumbersScreen />}/>
          <Route path='/offices-screen' element={<OfficesScreen />}/>
          <Route path='/technology-screen' element={<TechnologyScreen />}/>
          <Route path='/manager-screen' element={<ManagersScreen />}/>

          
        </Routes>
      
      </div>
    </Router>
  </div>
}

export default App;
