import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBar Edunova'
import { Route, Routes } from 'react-router-dom'
import { RoutNames } from './constant'
import Pocetna from './pages/Pocetna'
import ProizvodjaciPregled from './pages/Proizvodjaci/ProizvodjaciPregled'
import ProizvodjaciDodaj from './pages/proizvodjaci/ProizvodjaciDodaj'

function App() {

  return (
    <>
      <Container>
       <NavBarEdunova />
       <Routes>
        <Route path={RoutNames.HOME} element={<Pocetna />} />
        <Route path={RoutNames.PROIZVODJAC_PREGLED} element={<ProizvodjaciPregled />} />
        <Route path={RoutNames.PROIZVODJAC_NOVI} element={<ProizvodjaciDodaj />} />
       </Routes>


       <hr />
       &copy; Robert Mateašić
      </Container>
     
    </>
  )
}

export default App
