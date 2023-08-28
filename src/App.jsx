import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Men from './components/Men/Men'
import Women from './components/Women/Women'
import Footer from './components/Footer/Footer'
import Magazine from './components/Magazine/Magazine'
// import Card from './components/Card/Card'



function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Navigate to="shop" />} />
        <Route path="shop/*" element={<Shop size={5} />} />
        <Route path='/shop'  element={<Shop />}/>
        {/* <Route path='/shop/:id' element={<Card/>}/> */}
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/magazine' element={<Magazine/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
<Header/>

export default App
