import { json } from 'stream/consumers';
import {commentData} from '../data'
import { redirect } from 'next/navigation';
export async function GET(req:Request,{params}:{
    params:{
        id:string,
    }
}){
    const id=parseInt(params.id)
    const comment=commentData.find((com)=>com.id===parseInt(params.id))
    if(!comment){
        redirect('/comment')
        return new Response("No such comments",{
            headers:{
                "Content-Type":'application/json'
            },
            status:404
        })
    }
    
    return new Response(JSON.stringify(comment));
}

export async function PATCH(req:Request,{params}:{
    params:{
        id:string
    }
}){
    const id=parseInt(params.id)
    const comment=await req.json()
    commentData.forEach((com)=>com.id===id?(com.comment=comment.text):null)
    return new Response(JSON.stringify(comment),{
            headers:{
                "Content-Type":'application/json'
            },
            status:201
        })
}

export async function DELETE(req:Request,{params}:{
    params:{
        id:string
    }
}){
    const id=parseInt(params.id)
   const index=commentData.findIndex(com=>com.id===id)
   commentData.splice(index,1)
    return new Response("comment deleted sussesfully",{
            headers:{
                "Content-Type":'application/json'
            },
            status:200
        })
}