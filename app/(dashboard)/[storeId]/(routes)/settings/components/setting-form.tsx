"use client"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SettingFormProps {
    initialData: Store;
}
const formSchema = z.object({
    name: z.string().min(1),
}   );

type SettingFormValues = z.infer<typeof formSchema>;


export const SettingForm:
React.FC<SettingFormProps> = ({
    initialData
}) => {
const [open ,setOpen ]= useState(false);
const [loading, setLoading] = useState(false);
const form = useForm<SettingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
});
const onSubmit = async (data: SettingFormValues) => {
    console.log(data);
};
    return(
        <>
         <div className="flex items-center justify-between">
            <Heading
                title="Settings"
                description="Manage your store settings"
            />
            <Button
            disabled={loading}
                variant="destructive"
                size="sm"
                onClick={() => setOpen(true)}
            >
                <Trash className=" h-4 w-4"/> 
                </Button>
        </div>
        <Separator/>
        <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
<div className="grid grid-cols-3 gap-8 pt-4">
    <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
                <Input disabled={loading} placeholder="Store Name" {...field}/>
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />
</div>
<Button
    disabled={loading}
    className="ml-auto"
    type="submit"
    >
        Save changes
    </Button>

       </form>
            </Form>

        </>
       
    )
}
export default SettingForm;