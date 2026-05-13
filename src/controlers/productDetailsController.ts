import { demoData } from "../service/demmodat"
import type { Product } from "../types/type";


export const productDetailsController = (req: IncomingMessage, res: ServerResponse , id:number) => {
    const data = demoData()

    const product = data.find((item: Product) => item.id === id)

    if (product) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product details", data: product }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product not found" }));
    }
}
