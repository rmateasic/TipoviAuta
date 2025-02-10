import { HttpService } from "./HttpService";


async function get() {
    return await HttpService.get('/Proizvodjac')
    .then((odgovor)=>{
        console.table(odgovor.data)
    })
    .catch((e)=>{})
}


export default{
    get
}