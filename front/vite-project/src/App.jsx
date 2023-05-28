import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Orders from './Orders'
import Suggestions from './Suggestions'
import MyOrders from './MyOrders'
import CreateOrder from './CreateOrder'
import CreateSuggestion from './CreateSuggestion'
import MySuggestions from './MySuggestions'


function App() {

  return (
  <>  
    <Routes>
    <Route path = '/' element = {<Home />}/>
    <Route path = '/orders' element = {<Orders />}/>
    <Route path = '/myorders' element = {<MyOrders />}/>
    <Route path = '/create' element = {<CreateOrder />}/>
    <Route path = '/suggestions' element = {<Suggestions />}/>
    <Route path = '/mysuggestions' element = {<MySuggestions />}/>
    <Route path = '/add' element = {<CreateSuggestion />}/>
    </Routes>
  </>
  )
         
}

export default App
