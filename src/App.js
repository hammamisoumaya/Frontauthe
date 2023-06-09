import Register from './Components/Register'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/app/Private' element={<PrivateRoute/>}/>
     </Routes>

    </div>
  );
}

export default App;
