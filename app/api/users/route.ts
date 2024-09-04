import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { json } from "stream/consumers";
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
// export async function GET() {
//     try {
//         const filePath=path.join(process.cwd(),"database/users.json");
//         const data=fs.readFileSync(filePath, "utf8");
//         console.log(JSON.parse(data))
//         return NextResponse.json(JSON.parse(data));
//     } catch (error) {
//         return NextResponse.json(error)
//     }
   
// }
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
// export async function POST(request:Request) {   
//     const data=await request.json();
//     console.log(data)
//     return NextResponse.json(data)
// }

export async function POST(request:Request,res:NextResponse) {
    try {
    //lấy dữ liệu từ client
         const user=await request.json();
    //lấy đường dẫn file hiện tại
    const filePath=path.join(process.cwd(),"database/users.json");
    //đọc file cần ghi file
    const users=JSON.parse(fs.readFileSync(filePath,"utf8"))
    //Thêm dữ liệu vào users
    users.push(user);
    //chuyển đổi dữ liệu thành json
    const data=JSON.stringify(users);
    //ghi file
    fs.writeFileSync(filePath,data,'utf8')
    return NextResponse.json(JSON.parse(data))
    } catch (error) {
       return NextResponse.json({error:"error"}); 
    }
    
}