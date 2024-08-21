import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
export async function POST(request:Request){
    try {
        const config=await request.json();
     const filePath=path.join(process.cwd(),"database","config.json");
    // const config=JSON.parse(fs.readFileSync(filePath,'utf8'));
    // config.push(data);
    fs.writeFileSync(filePath,JSON.stringify(config),'utf8');
    return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json(error);
    }
    
}
export async function GET() {
    try {
        const filePath=path.join(process.cwd(),"database","config.json");
    const config=JSON.parse(fs.readFileSync(filePath,'utf8'));
    return NextResponse.json(config)
    } catch (error) {
        return NextResponse.json(error);
    }
}