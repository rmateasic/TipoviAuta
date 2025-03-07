import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Vrstaauta')
    .then((odgovor)=>{
    
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra) {
    return await HttpService.get('/Vrstaauta/' + sifra)
    .then((odgovor)=>{
    
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Ne postoji Vrsta auta!'}
    })
}



async function dodaj(vrstaauta){
    return await HttpService.post('Vrstaauta', vrstaauta)
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
                return {greska: true, poruka: 'Vrsta auta se ne može dodati!'}
        }
    })
}

async function promjena(sifra,vrstaauta){
    return await HttpService.put('/Vrstaauta/' + sifra, vrstaauta)
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
                return {greska: true, poruka: 'Vrsta auta se ne može promjeniti!'}
        }
    })
}

async function obrisi(sifra){
    return await HttpService.delete('/Vrstaauta/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Vrsta auta se ne može obrisati!'}
    })
}

export default{
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
}