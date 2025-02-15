// import {createClient} from "next-sanity"

// const client=createClient({
//     projectId:"nkczw42v",
//     dataset:"production",
//     apiVersion: "2023-10-10",
//     useCdn:true,
// })

// export async function sanityfetch({query,params={}}:{query:string,params?:any}){
//     return await client.fetch(query,params)
// }

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "nkczw42v",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to `true` for faster but potentially stale data
});

export async function sanityfetch({ query, params = {} }: { query: string; params?: Record<string, any> }) {
  return client.fetch(query, params);
}