import { use, useEffect, useState } from "react"
import VrstaautaService from "../../services/VrstaautaService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutNames } from "../../constant";


export default function VrsteautaPregled(){

const[vrsteauta, setVrsteauta] = useState();

const navigate = useNavigate();
 
    async function dohvatiVrsteauta() {

        
        const odgovor = await VrstaautaService.get()
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        setVrsteauta(odgovor)
    }

    useEffect(()=>{
        dohvatiVrsteauta();
    }, [])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return
        }
        brisanjeVrsteauta(sifra);
    }

    async function brisanjeVrsteauta(sifra) {
        const odgovor = await VrstaautaService.obrisi(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiVrsteauta();
    }

    return(
        <>
        <Link
        to={RoutNames.VRSTAAUTA_NOVI}
        className="btn btn-success siroko"
        >Dodaj novu vrstu auta</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {vrsteauta && vrsteauta.map((vrstaauta, index)=>(
                    <tr key={index}>
                        <td>
                            {vrstaauta.naziv}
                        </td>
                        <td>

                        <Button
                            variant="danger"
                            onClick={()=>obrisi(vrstaauta.sifra)}
                            >
                            Obriši
                            </Button>

                            &nbsp;&nbsp;&nbsp;

                            <Button
                            onClick={()=>navigate(`/vrsteauta/${vrstaauta.sifra}`)}
                            >
                            Promjena
                            </Button>
                           
                            
                        </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </>
    )
}