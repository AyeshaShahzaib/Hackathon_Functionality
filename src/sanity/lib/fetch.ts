import {createClient} from "next-sanity"

const client=createClient({
    projectId:"nkczw42v",
    dataset:"production",
    apiVersion: "2023-10-10",
    useCdn:true,
})

export async function sanityfetch({query,params={}}:{query:string,params?:any}){
    return await client.fetch(query,params)
}