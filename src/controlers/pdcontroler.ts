import type { IncomingMessage, ServerResponse } from "http";
import { demoData } from "../service/demmodat";


export const prodetails = (req: IncomingMessage, res:ServerResponse) =>{
 const data = demoData()

 const product = data.find((item) => item.id === 1)

 if(product){
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(product))
 } else {   
    res.writeHead(404, {"Content-Type": "application/json"})
    res.end(JSON.stringify({message: "Product not found"}))
 }
}