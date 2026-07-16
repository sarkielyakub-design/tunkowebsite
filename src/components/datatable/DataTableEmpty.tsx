import { Inbox } from "lucide-react";

export default function DataTableEmpty(){

    return(

        <div className="flex flex-col items-center justify-center py-20">

            <Inbox
                className="mb-5 h-16 w-16 text-slate-300"
            />

            <h2 className="text-xl font-bold">

                No Records Found

            </h2>

            <p className="mt-2 text-slate-500">

                Nothing to display.

            </p>

        </div>

    )

}