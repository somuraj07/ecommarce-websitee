import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import SettingForm from "./components/setting-form";

interface SettingsPageProps {
    params:{
        storeId:string;
    }
}

const SettingsPage:React.FC<SettingsPageProps> = async ({
    params
}) => {

    const { userId } = await auth();
    if(!userId) {
        redirect("/sign-in");
    }
    const store = await prismadb.store.findFirst({
        where:{
            id:params.storeId,
            userId
        }
    });
    if(!store)  {
        redirect("/");
        }
    return (
       <div className="flex-col">
        <div className="flex-1 space-x-4 p-8 pt-6 ">
         <SettingForm initialData={store}/>
        </div>

       </div>
    );
    }
    export default SettingsPage;