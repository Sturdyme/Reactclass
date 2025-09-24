 
import './App.css'
import Conditon from './components/Conditon'
import Home from './pages/Home'
import State from './pages/state'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import Todo from './pages/Todo'
import Postpage from './pages/Postpage'
import AuthPage from './pages/AuthPage'
import SingleProductPage from './pages/SingleProductPage'
import SinglePostPage from './pages/SinglePostPage'
import Error from './pages/Error'
import SignInpage from './pages/SignInpage'
import Counter from './pages/Counter'

function App() {
 

  return (
    <section>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/state' element={<State/>} />
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/todo' element={<Todo/>} />
         <Route path='/post' element={<Postpage/>} />
         <Route path='/authpage' element={<AuthPage/>} />
         <Route path='/products/:id' element={<SingleProductPage />}/>
         <Route path='/post/:id' element={<SinglePostPage/>}/>
        <Route path="*" element={<Error/>} />
        <Route path='/signinpage' element={<SignInpage/>} />
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
  
    {/* <State />
    <Conditon/> */}

  
   </section>
  )
}

export default App
