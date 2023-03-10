import './App.css'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-up';
import Content from './pages/Content';
import { Routes, Route} from 'react-router-dom'; 
import NotFound from './pages/Not-found';
function App() {

  return (
    <div className="App">
      <Routes>
         <Route path="/">
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Route>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/main" element={<Content/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
