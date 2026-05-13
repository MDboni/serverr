import type { IncomingMessage, ServerResponse } from "node:http";

import { demoData } from "../service/demmodat";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is the product page.", data: demoData()  }));
};
