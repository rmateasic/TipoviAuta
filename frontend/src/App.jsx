import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import ProizvodjaciPregled from './pages/Proizvodjaci/ProizvodjaciPregled'
import ProizvodjaciDodaj from './pages/proizvodjaci/ProizvodjaciDodaj'
import ProizvodjaciPromjena from './pages/proizvodjaci/ProizvodjaciPromjena'
import VrsteautaPregled from './pages/vrsteauta/VrsteAutaPregled'
import VrsteautaPromjena from './pages/vrsteauta/VrsteAutaPromjena'
import VrsteautaDodaj from './pages/vrsteauta/VrsteAutaDodaj'
import AutomobiliPregled from './pages/automobili/AutomobiliPregled'
import AutomobiliPromjena from './pages/automobili/AutomobiliPromjena'
import AutomobiliDodaj from './pages/automobili/AutomobiliDodaj'
import EraDijagram from './pages/EraDiagram'

function App() {

  return (
    <>
      <Container>
       <NavBarEdunova />
       <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna />} />

        <Route path={RouteNames.PROIZVODJAC_PREGLED} element={<ProizvodjaciPregled />} />
        <Route path={RouteNames.PROIZVODJAC_NOVI} element={<ProizvodjaciDodaj />} />
        <Route path={RouteNames.PROIZVODJAC_PROMJENA} element={<ProizvodjaciPromjena />} />

        <Route path={RouteNames.VRSTAAUTA_PREGLED} element={<VrsteautaPregled />} />
        <Route path={RouteNames.VRSTAAUTA_NOVI} element={<VrsteautaDodaj />} />
        <Route path={RouteNames.VRSTAAUTA_PROMJENA} element={<VrsteautaPromjena />} />

        <Route path={RouteNames.AUTOMOBIL_PREGLED} element={<AutomobiliPregled />} />
        <Route path={RouteNames.AUTOMOBIL_NOVI} element={<AutomobiliDodaj />} />
        <Route path={RouteNames.AUTOMOBIL_PROMJENA} element={<AutomobiliPromjena />} />

        <Route path={RouteNames.ERA} element={<EraDijagram />} /> 

        </Routes>


       <hr />
       &copy; Robert Mateašić
      </Container>
     
    </>
  )
}

export default App
