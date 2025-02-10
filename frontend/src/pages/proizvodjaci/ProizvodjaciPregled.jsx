import { useEffect, useState } from "react"
import ProizvodjacService from "../../services/ProizvodjacService"
import { Table } from "react-bootstrap";


export default function ProizvodjaciPregled(){

const[proizvodjaci, setProizvodjaci] = useState();
 
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
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Zemlja</th>
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
                    </tr>
                ))}
            </tbody>
            </Table>
        </>
    )
}