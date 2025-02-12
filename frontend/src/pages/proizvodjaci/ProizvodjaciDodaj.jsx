import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RoutNames } from "../../constant";


export default function ProizvodjaciDodaj(){


    return(
        <>
        Dodavanje proizvodjaca
        <Row>
            <Col>
            <Link
            to={RoutNames.PROIZVODJAC_PREGLED}
            className="btn btn-danger siroko"
            >Odustani</Link>
            </Col>
        </Row>
        </>
    )
}