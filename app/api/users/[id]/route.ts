import { NextResponse } from "next/server";
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
    const {id}=params;
    const data=await request.json();
    return NextResponse.json({
        idForUpdate:id,
        dataUpdate:data
    })
}