import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const users=[
    {
        id:1,
        user_name:"ngoc",
        age:20
    },
    {
        id:2,
        user_name:"linh",
        age:26
    }
]
type ParamType={
    params:{
        id:number
    }
}
export async function GET(request:Request,{params}:ParamType) {
    const {id}=params;
    const user=users.find(btn=>btn.id==id);
    if(user){
        return NextResponse.json(user)
    }else{
        return NextResponse.json("Không tìm thấy")
    }
   
}
export async function DELETE(request:Request,{params}:ParamType) {
    const {id}=params;
    return NextResponse.json({
        message:"Đã xóa bản ghi",
        id:id
    })
}
export async function PUT(request:Request,{params}:ParamType) {
    const filePath=path.join(process.cwd(),"database/users.json");
    const users=JSON.parse(fs.readFileSync(filePath,"utf8"));
    const findIndex=users.findIndex((btn:any)=>btn.id==params.id);
    const userEdit=await request.json();
    if(findIndex!=-1){
        users[findIndex]=userEdit;
        fs.writeFileSync(filePath,JSON.stringify(users),"utf8");
        return NextResponse.json({
            message:"Cập nhật thành công",
            user:userEdit
        })
    }

}
export async function PATCH(request:Request,{params}:ParamType) {
    const filePath=path.join(process.cwd(),"database","users.json");
    const users=JSON.parse(fs.readFileSync(filePath,"utf8"));    
}