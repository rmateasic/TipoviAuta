import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import ProizvodjacService from "../../services/ProizvodjacService";


export default function ProizvodjaciDodaj(){

    const navigate = useNavigate();

    async function dodaj(proizvodjac){
        const odgovor = await ProizvodjacService.dodaj(proizvodjac)
        if((odgovor).greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.PROIZVODJAC_PREGLED)

    }

    function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);

        dodaj(

            {
            naziv: podaci.get('naziv'),
            zemlja: podaci.get('zemlja')
            }
        );
    }

    return(
        <>
        Dodavanje proizvođača
        <Form onSubmit={odradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="zemlja">
                <Form.Label>Zemlja</Form.Label>
                <Form.Control type="text" name="zemlja" required />
            </Form.Group>

            <hr/>

            <Row>
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link
            to={RouteNames.PROIZVODJAC_PREGLED}
            className="btn btn-danger siroko"
            >Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Dodaj proizvođača
                </Button>
            </Col>
        </Row>

        </Form>
        
        </>
    )
}