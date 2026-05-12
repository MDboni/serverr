import type { IncomingMessage, ServerResponse } from "node:http";

export const homeRoute = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
}
