import { useEffect } from "react"
import PriozvodjacService from "../../services/PriozvodjacService"


export default function ProizvodjaciPregled(){

    async function dohvatiProizvodjace() {
        const odgovor = PriozvodjacService.get()
    }

    // hooks (kuka) se izvodi 
    useEffect(()=>{
        dohvatiProizvodjace();
    }, [])

    return(
        <>
        Ovdje će se vidjeti proizvodjaci iz baze
        </>
    )
}