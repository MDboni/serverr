import fs from "fs"
import path from "node:path"

const  filepath = path.join(process.cwd(), "src", "data.json")

export const demoData = () => {
    // console.log(process.cwd())
    // console.log(filepath)
    const readData = fs.readFileSync(filepath, "utf-8")
    // console.log(readData)
    console.log(readData)
    return JSON.parse(readData)

}