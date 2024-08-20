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

export async function GET(request:Request) { 
    const url=new URL(request.url);
    const name=url.searchParams.get('user_name');
    if(!name) return NextResponse.json(users)
    const listFilterByName=users.filter(btn=>btn.user_name.toLowerCase().includes(name));
    if(listFilterByName.length==0){
        return NextResponse.json("Không tìm thấy người dùng")
    }
    return NextResponse.json(listFilterByName)
}
export async function POST(request:Request) {   
    const data=await request.json();
    console.log(data)
    return NextResponse.json(data)
}
