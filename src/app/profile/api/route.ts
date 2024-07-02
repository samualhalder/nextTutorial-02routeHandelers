import { log } from "console";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
    const headerList=headers()
    console.log(headerList.get("Authorization"));
    console.log(req.cookies.get('theme'));
    
    return new Response("Profile Api route",{
        headers:{
            'Content-Type':'application/json',
            'Set-Cookie':'theme=dark'
        }
    })
}