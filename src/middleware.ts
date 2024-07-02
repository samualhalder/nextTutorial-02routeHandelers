import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest){
    const res=NextResponse.next()
    const theme=req.cookies.get('theme')
    if(!theme){
        res.cookies.set("theme","dark")
        return res
    }else{
        return res
    }
    if(req.nextUrl.pathname=="/profile"){
        return NextResponse.redirect(new URL('/hello',req.url))
    }
}