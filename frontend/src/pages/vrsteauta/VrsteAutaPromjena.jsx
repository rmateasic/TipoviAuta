import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutNames } from "../../constant";
import VrstaautaService from "../../services/VrstaautaService";
import { useEffect, useState } from "react";


export default function VrsteautaPromjena(){

    const navigate = useNavigate();
    const [vrstaauta, setVrstaauta] = useState({});
    const routeParams = useParams();

    async function dohvatiVrsteauta(){
        const odgovor = await VrstaautaService.getBySifra(routeParams.sifra)
        setVrstaauta(odgovor)
    }


    useEffect(()=>{
        dohvatiVrsteauta();
    }, []);

    async function promjena(vrstaauta){
        const odgovor = await VrstaautaService.promjena(routeParams.sifra, vrstaauta);
        if((odgovor).greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RoutNames.VRSTAAUTA_PREGLED)

    }

    function odradiSubmit(e){ // e je event
        e.preventDefault();

        let podaci = new FormData(e.target);

        promjena(

            {
            naziv: podaci.get('naziv')
            }
        );
    }

    return(
        <>
        Promjena vrste auta
        <Form onSubmit={odradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={vrstaauta.naziv}/>
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
                    Promjeni vrstu auta
                </Button>
            </Col>
        </Row>

        </Form>
        
        </>
    )
}