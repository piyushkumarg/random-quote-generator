
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Bookmark from './components/Bookmark';

const App = () => {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/bookmark' element={<Bookmark/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

