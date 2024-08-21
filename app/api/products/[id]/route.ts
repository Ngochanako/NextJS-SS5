import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
type ParamType={
    params:{
        id:number
    }
}
export async function DELETE(req:Request,{params}:ParamType) {
    try {
        const pathname=path.join(process.cwd(),"database","products.json");
        const products=JSON.parse(fs.readFileSync(pathname,'utf8'));
        const findIndex=products.findIndex((p:any)=>p.id===+params.id);
        if(findIndex!==-1){
            const newProducts=products.filter((product:any)=>product.id!==+params.id);
        fs.writeFileSync(pathname,JSON.stringify(newProducts),'utf8');
        return NextResponse.json({message:"Xóa thành công",data:newProducts})
        }else{
            return NextResponse.json({message:"Không tìm thấy sản phẩm"})
        }
       
    } catch (error) {
        return NextResponse.json(error);
    }  
}
export async function PUT(req:Request,{params}:ParamType) {
    try {
        const data=await req.json();
    const pathname=path.join(process.cwd(),"database","products.json");
    const products=JSON.parse(fs.readFileSync(pathname,"utf8"));
    const findIndex=products.findIndex((p:any)=>p.id===+params.id);
    if(findIndex!==-1){
        products[findIndex]=data;
        fs.writeFileSync(pathname,JSON.stringify(products),'utf8');
        return NextResponse.json({message:"Cập nhập thành công",data:data});
    }else{
        return NextResponse.json({message:"Không tìm thấy sản phẩm"})
    }
    } catch (error) {
        return NextResponse.json(error);
    }
    
}