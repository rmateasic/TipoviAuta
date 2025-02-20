import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RoutNames } from './constant'
import Pocetna from './pages/Pocetna'
import ProizvodjaciPregled from './pages/Proizvodjaci/ProizvodjaciPregled'
import ProizvodjaciDodaj from './pages/proizvodjaci/ProizvodjaciDodaj'
import ProizvodjaciPromjena from './pages/proizvodjaci/ProizvodjaciPromjena'
import VrsteautaPregled from './pages/vrsteauta/VrsteAutaPregled'
import VrsteautaPromjena from './pages/vrsteauta/VrsteAutaPromjena'
import VrsteautaDodaj from './pages/vrsteauta/VrsteAutaDodaj'

function App() {

  return (
    <>
      <Container>
       <NavBarEdunova />
       <Routes>
        <Route path={RoutNames.HOME} element={<Pocetna />} />

        <Route path={RoutNames.PROIZVODJAC_PREGLED} element={<ProizvodjaciPregled />} />
        <Route path={RoutNames.PROIZVODJAC_NOVI} element={<ProizvodjaciDodaj />} />
        <Route path={RoutNames.PROIZVODJAC_PROMJENA} element={<ProizvodjaciPromjena />} />

        <Route path={RoutNames.VRSTAAUTA_PREGLED} element={<VrsteautaPregled />} />
        <Route path={RoutNames.VRSTAAUTA_NOVI} element={<VrsteautaDodaj />} />
        <Route path={RoutNames.VRSTAAUTA_PROMJENA} element={<VrsteautaPromjena />} />
       </Routes>


       <hr />
       &copy; Robert Mateašić
      </Container>
     
    </>
  )
}

export default App
