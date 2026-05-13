import type { IncomingMessage, ServerResponse } from "node:http";
import { homeRoute } from "../controlers/homeRoute";
import { aboutRoutes } from "../controlers/aboutRoutes";
import { productController } from "../controlers/productControler";


export const mainRoute = (req: IncomingMessage, res:ServerResponse) => {
    const url = req.url ;
    const method = req.method ;

    

    

    if (url === "/") {
        return homeRoute(req, res);
    }

    if (url === "/about") {
        return aboutRoutes(req, res);
    }

    if(url === "/product"){
        return productController(req, res);
    }else if( method === "GET"){
        console.log("GET request received");
    }

    if( method === "GET" && url === "/prod"){
        
    }

   

}



