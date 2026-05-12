
import { createServer, IncomingMessage, Server } from "http";
import {  mainRoute } from "./routers/mainRoute";


// const server:Server = createServer((req:IncomingMessage, res) => {
//     console.log(req)
// });

const server: Server = createServer((req: IncomingMessage, res) => {
    
    return mainRoute(req, res)
    
    
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});