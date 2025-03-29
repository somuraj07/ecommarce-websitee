import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const { userId } = await auth();
        const body = await req.json();
        const { name } = body;
        if(!userId) {
            return new NextResponse("unthorized",{status: 401});
        }
        if(!name) {
            return new NextResponse("name is required",{status: 400});
        }
        const store = await prismadb.store.create({
            data:{
                name,
                userId
            }
        });
        return NextResponse.json(store)
    } catch (error) {
        console.log('[STROES_POST',error);
        return new NextResponse("internal error",{status:500})
    }
}