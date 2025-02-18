import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Vrstaauta')
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}

async function getBySifra(sifra) {
    return await HttpService.get('/Vrstaauta/' + sifra)
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}



async function dodaj(vrstaauta){
    return HttpService.post('Vrstaauta', vrstaauta)
    .then(()=>{return{greska: false, poruka: 'Dodano'}})
.catch(()=>{return{greska:true, poruka:'Problem kod dodavanja'}})
}

async function promjena(sifra,vrstaauta){
    return HttpService.put('/Vrstaauta/' + sifra, vrstaauta)
    .then(()=>{return{greska: false, poruka: 'Promjenjeno'}})
.catch(()=>{return{greska:true, poruka:'Problem kod promjene'}})
}

async function obrisi(sifra){
    return HttpService.delete('/Vrstaauta/' + sifra)
    .then(()=>{return{greska: false, poruka: 'Obrisano'}})
.catch(()=>{return{greska:true, poruka:'Problem kod brisanja'}})
}

export default{
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
}