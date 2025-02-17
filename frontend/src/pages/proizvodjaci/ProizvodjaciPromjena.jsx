import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutNames } from "../../constant";
import ProizvodjacService from "../../services/ProizvodjacService";
import { useEffect, useState } from "react";


export default function ProizvodjaciPromjena(){

    const navigate = useNavigate();
    const [proizvodjac, setProizvodjac] = useState({});
    const routeParams = useParams();

    async function dohvatiProizvodjace(){
        const odgovor = await ProizvodjacService.getBySifra(routeParams.sifra)
        setProizvodjac(odgovor)
    }


    useEffect(()=>{
        dohvatiProizvodjace();
    }, []);

    async function promjena(proizvodjac){
        const odgovor = await ProizvodjacService.promjena(routeParams.sifra, proizvodjac);
        if((odgovor).greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RoutNames.PROIZVODJAC_PREGLED)

    }

    function odradiSubmit(e){ // e je event
        e.preventDefault();

        let podaci = new FormData(e.target);

        promjena(

            {
            naziv: podaci.get('naziv'),
            zemlja: podaci.get('zemlja')
            }
        );
    }

    return(
        <>
        Promjena proizvođača
        <Form onSubmit={odradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={proizvodjac.naziv}/>
            </Form.Group>

            <Form.Group controlId="zemlja">
                <Form.Label>Zemlja</Form.Label>
                <Form.Control type="text" name="zemlja" required defaultValue={proizvodjac.zemlja}/>
            </Form.Group>

            <hr/>

            <Row>
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link
            to={RoutNames.PROIZVODJAC_PREGLED}
            className="btn btn-danger siroko"
            >Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Promjeni proizvođača
                </Button>
            </Col>
        </Row>

        </Form>
        
        </>
    )
}