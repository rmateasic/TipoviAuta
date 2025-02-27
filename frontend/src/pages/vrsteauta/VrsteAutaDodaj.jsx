import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutNames } from "../../constant";
import VrstaautaService from "../../services/VrstaautaService";


export default function VrsteautaDodaj(){

    const navigate = useNavigate();

    async function dodaj(vrstaauta){
        const odgovor = await VrstaautaService.dodaj(vrstaauta)
        if((odgovor).greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RoutNames.VRSTAAUTA_PREGLED)

    }

    function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);

        dodaj(

            {
            naziv: podaci.get('naziv')
            }
        );
    }

    return(
        <>
        Dodavanje vrste auta
        <Form onSubmit={odradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <hr/>

            <Row>
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link
            to={RoutNames.VRSTAAUTA_PREGLED}
            className="btn btn-danger siroko"
            >Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Dodaj vrstu auta
                </Button>
            </Col>
        </Row>

        </Form>
        
        </>
    )
}