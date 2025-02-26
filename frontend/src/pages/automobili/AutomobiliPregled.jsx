import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Service from "../../services/AutomobilService";
import { RouteNames } from "../../constants";

export default function AutomobiliPregled(){
    const [automobili,setAutomobili] = useState();
    let navigate = useNavigate(); 

    async function dohvatiAutomobile(){
        await Service.get()
        .then((odgovor)=>{
            setAutomobili(odgovor);
        })
        .catch((e)=>{console.log(e)});
    }

    async function obrisiAutomobil(sifra) {
        const odgovor = await Service.obrisi(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiAutomobile();
    }

    useEffect(()=>{
        dohvatiAutomobile();
    },[]);


    return (

        <Container>
            <Link to={RouteNames.AUTOMOBIL_NOVI} className="btn btn-success siroko">
                <IoIosAdd
                size={25}
                /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Gorivo</th>
                        <th>Model</th>
                        <th> Godiste</th>
                        <th> Proizvodjac</th>
                        <th> Vrstaauta</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {automobili && automobili.map((entitet,index)=>(
                        <tr key={index}>
                            <td>{entitet.naziv}</td>
                            <td>{entitet.proizvodjacNaziv}</td>
                            <td>{entitet.vrstaautaNaziv}</td>
                            <td>{entitet.gorivo}</td>
                            <td>{entitet.model}</td>
                            <td>{entitet.godiste}</td>
                            <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/automobili/${entitet.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiAutomobil(entitet.sifra)}
                                    >
                                        <FaTrash
                                        size={25}/>
                                    </Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );

}