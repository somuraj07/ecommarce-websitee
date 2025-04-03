import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"
import { use } from "react";

export async function PATCH(
    req:Request,
    {params}:{params:{ storeId: string}}
){
    try {
        const {userId} = await auth();
        const body = await req.json();
        const { name } = body;
        if(!userId){
            return new NextResponse("unaunthicated",{status:401});
        }
        if(!name){
            return new NextResponse("name is reqiired",{status:400});
        }
        if(!params.storeId){
            return new NextResponse("storeID is requires",{status:400});
        }

        const store = await prismadb.store.updateMany({
            where: {
                id: params.storeId,
                userId,
            },
            data: {
                name,
            },
        });
        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORES_PATCH]',error);
        return new NextResponse("internal error",{status:500});
    }
}

export async function DELETE(
    req:Request,
    {params}:{params:{ storeId: string}}
){
    try {
        const {userId} = await auth();
        if(!userId){
            return new NextResponse("unaunthicated",{status:401});
        }
        if(!params.storeId){
            return new NextResponse("storeID is requires",{status:400});
        }

        const store = await prismadb.store.deleteMany({
            where: {
                id: params.storeId,
                userId,
            }
        });
        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORES_DELETE]',error);
        return new NextResponse("internal error",{status:500});
    }
}