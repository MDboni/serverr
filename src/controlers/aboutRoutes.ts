import type { IncomingMessage, ServerResponse } from "node:http";

export const aboutRoutes = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is the about page.", data: { name: "John Doe", age: 30 } }));
}   