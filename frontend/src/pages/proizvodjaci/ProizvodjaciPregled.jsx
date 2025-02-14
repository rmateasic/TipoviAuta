import { use, useEffect, useState } from "react"
import ProizvodjacService from "../../services/ProizvodjacService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutNames } from "../../constant";


export default function ProizvodjaciPregled(){

const[proizvodjaci, setProizvodjaci] = useState();
const navigate = useNavigate();
 
    async function dohvatiProizvodjace() {

        
        const odgovor = await ProizvodjacService.get()
        setProizvodjaci(odgovor)
    }

    // hooks (kuka) se izvodi prilikom dolaska
    useEffect(()=>{
        dohvatiProizvodjace();
    }, [])

    return(
        <>
        <Link
        to={RoutNames.PROIZVODJAC_NOVI}
        className="btn btn-success siroko"
        >Dodaj novog proizvođača</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Zemlja</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {proizvodjaci && proizvodjaci.map((proizvodjac, index)=>(
                    <tr key={index}>
                        <td>
                            {proizvodjac.naziv}
                        </td>
                        <td>
                            {proizvodjac.zemlja}
                        </td>
                        <td>
                            <Button
                            onClick={()=>navigate(`/proizvodjaci/${proizvodjac.sifra}`)}
                            >Promjena</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </>
    )
}