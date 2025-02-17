import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Proizvodjac')
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}

async function getBySifra(sifra) {
    return await HttpService.get('/Proizvodjac/' + sifra)
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return odgovor.data;
    })
    .catch((e)=>{})
}



async function dodaj(proizvodjac){
    return HttpService.post('Proizvodjac', proizvodjac)
    .then(()=>{return{greska: false, poruka: 'Dodano'}})
.catch(()=>{return{greska:true, poruka:'Problem kod dodavanja'}})
}

async function promjena(sifra,proizvodjac){
    return HttpService.put('/Proizvodjac/' + sifra, proizvodjac)
    .then(()=>{return{greska: false, poruka: 'Promjenjeno'}})
.catch(()=>{return{greska:true, poruka:'Problem kod promjene'}})
}

async function obrisi(sifra){
    return HttpService.delete('/Proizvodjac/' + sifra)
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