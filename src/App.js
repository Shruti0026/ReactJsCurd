import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/common/Header';

import Demo from './pages/Demo'
import AddForm from './pages/Form';
import EditStud from './pages/EditStud';


function App() {
    return ( 
      <div className = 'App' >
        <Header />
          <Router >
            <Routes >
              <Route path = '/'element = { < Demo /> } > </Route>
              <Route path='/form' element={<AddForm/>}></Route>
              <Route path="/edit/:id" element={<EditStud/>}></Route>
            </Routes >
          </Router>
        </div>

    );
}

export default App;