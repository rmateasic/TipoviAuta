import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Proizvodjac')
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


export default{
    get,
    dodaj
}