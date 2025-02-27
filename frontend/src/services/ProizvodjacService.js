import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Proizvodjac')
    .then((odgovor)=>{
    
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{

        return {greska: true, poruka: 'Problem kod dohvaćanja proizvođača'}
    })
}

async function getBySifra(sifra) {
    return await HttpService.get('/Proizvodjac/' + sifra)
    .then((odgovor)=>{
    
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{

        return {greska: true, poruka: 'Problem kod dohvaćanja proizvođača s šifrom '+sifra} 
    })
}



async function dodaj(proizvodjac){
    return await HttpService.post('Proizvodjac', proizvodjac)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke='';
                for(const kljuc in e.response.data.errors){
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Proizvođač se ne može dodati!'}
        }
    })
}

async function promjena(sifra,proizvodjac){
    return await HttpService.put('/Proizvodjac/' + sifra, proizvodjac)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke='';
                for(const kljuc in e.response.data.errors){
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                console.log(poruke)
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Proizvođač se ne može promjeniti!'}
        }
    })
}

async function obrisi(sifra){
    return await HttpService.delete('/Proizvodjac/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja proizvođača'}   
    })
}

export default{
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
}