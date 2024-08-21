import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
export async function POST(req:Request,res:Response){
    try {
        const filePath=path.join(process.cwd(),"database","products.json");
    const products=JSON.parse(fs.readFileSync(filePath,'utf8'));
    const newProduct=await req.json();
    products.push(newProduct);
    fs.writeFileSync(filePath,JSON.stringify(products));
    return NextResponse.json({message:"Thêm mới thành công",data:products})
    } catch (error) {
        return NextResponse.json({message:"Thêm mới không thành công"})
    }
    
}
export async function GET(){
    try {
        const filePath=path.join(process.cwd(),"database","products.json");
        const products=JSON.parse(fs.readFileSync(filePath,'utf8'));
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(error)
    }
}
