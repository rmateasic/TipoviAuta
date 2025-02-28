import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Service from '../../services/AutomobilService';
import ProizvodjacService from '../../services/ProizvodjacService';
import VrstaautaService from '../../services/VrstaautaService';
import { RouteNames } from '../../constants';


export default function AutomobiliDodaj() {

  const navigate = useNavigate();

  const [proizvodjaci, setProizvodjaci] = useState([]);
  const [vrsteauta, setVrsteauta] = useState([]);
  const [proizvodjacSifra, setProizvodjacSifra] = useState(0);
  const [vrstaautaSifra, setVrstaautaSifra] = useState(0);

  async function dohvatiProizvodjace(){
    const odgovor = await ProizvodjacService.get();
    setProizvodjaci(odgovor.poruka);
    setProizvodjacSifra(odgovor.poruka[0].sifra);
  }

  async function dohvatiVrsteauta(){
    const odgovor = await VrstaautaService.get();
    setVrsteauta(odgovor.poruka);
    setVrstaautaSifra(odgovor.poruka[0].sifra);
  }



  useEffect(()=>{
    dohvatiProizvodjace();
    dohvatiVrsteauta();
  },[]);

  async function dodaj(e) {
    const odgovor = await Service.dodaj(e);
    if(odgovor.greska){
      alert(odgovor.poruka);
      return;
    }
    navigate(RouteNames.AUTOMOBIL_PREGLED);
  }

  function obradiSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);


    dodaj({
      naziv: podaci.get('naziv'),
      gorivo: podaci.get('gorivo'),
      model: podaci.get('model'),
      godiste: int.get('godiste'),
      proizvodjacSifra: parseInt(proizvodjacSifra),
      vrstaautaSifra: parseInt(vrstaautaSifra)
    });
  }

  return (
      <>
      Dodavanje automobila
      
      <Form onSubmit={obradiSubmit}>
          <Form.Group controlId="naziv">
              <Form.Label>Naziv</Form.Label>
              <Form.Control type="text" name="naziv" required />
          </Form.Group>

          <Form.Group controlId="gorivo">
              <Form.Label>Gorivo</Form.Label>
              <Form.Control type="text" name="gorivo" required />
          </Form.Group>

          <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" name="model" required />
          </Form.Group>

          <Form.Group controlId="godiste">
              <Form.Label>Godiste</Form.Label>
              <Form.Control type="text" name="godiste" required />
          </Form.Group>

          <Form.Group className='mb-3' controlId='proizvodjac'>
            <Form.Label>Proizvodjac</Form.Label>
            <Form.Select 
            onChange={(e)=>{setProizvodjacSifra(e.target.value)}}
            >
            {proizvodjaci && proizvodjaci.map((s,index)=>(
              <option key={index} value={s.sifra}>
                {s.naziv}
              </option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='vrstaauta'>
            <Form.Label>Vrstaauta</Form.Label>
            <Form.Select 
            onChange={(e)=>{setVrstaautaSifra(e.target.value)}}
            >
            {vrsteauta && vrsteauta.map((s,index)=>(
              <option key={index} value={s.sifra}>
                {s.naziv}
              </option>
            ))}
            </Form.Select>
          </Form.Group>

         
          <hr />
          <Row>
              <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
              <Link to={RouteNames.AUTOMOBIL_PREGLED}
              className="btn btn-danger siroko">
              Odustani
              </Link>
              </Col>
              <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
              <Button variant="primary" type="submit" className="siroko">
                  Dodaj automobil
              </Button>
              </Col>
          </Row>
      </Form>
  </>
  );
}