import { useState } from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form/Form';


const App = () => {
  // const [show, setShow] = useState({ path: 'list', param: '1'})

  return (
      <div className="App">
        {/* <div>
          <button onClick={() => setShow('/list')}>List</button>
          <button onClick={() => setShow('/detail')}>Detail</button>
        </div>
        {show === '/list' ? <ItemListContainer /> : null}
        {show === '/detail/1' ? <ItemDetailContainer /> : null} */}
        <BrowserRouter>
          <NavBar />
          {/* <div>
            <Link to='/list'>List</Link>
            <Link to='/detail'>Detalle</Link>
          </div> */}
          <Link to='/form' className='Option' > Form </Link>
          <Routes>
            {/* <Route path='/' element={<h1>HOME</h1>} />
            <Route path='/list' element={<ItemListContainer />} />
            <Route path='/detail' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>} /> */}
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
