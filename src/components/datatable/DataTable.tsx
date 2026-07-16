"use client";

import DataTableLoading from "./DataTableLoading";
import DataTableEmpty from "./DataTableEmpty";
import { Column } from "./types";

interface Props<T>{

    columns:Column<T>[]

    data:T[]

    loading?:boolean

}

export default function DataTable<T>({
    columns,
    data,
    loading=false,
}:Props<T>){

    if(loading){

        return <DataTableLoading/>

    }

    if(data.length===0){

        return <DataTableEmpty/>

    }

    return(

<div className="overflow-hidden rounded-2xl bg-white shadow-sm">

<div className="overflow-x-auto">

<table className="min-w-full">

<thead className="bg-slate-50">

<tr>

{columns.map((column)=>(

<th
key={String(column.key)}
className="px-6 py-4 text-left font-semibold"
>

{column.title}

</th>

))}

</tr>

</thead>

<tbody>

{data.map((row,index)=>(

<tr
key={index}
className="border-t hover:bg-slate-50"
>

{columns.map((column)=>(

<td
key={String(column.key)}
className="px-6 py-4"
>

{column.render
?column.render(row)
:String(
(row as any)[column.key]
)}

</td>

))}

</tr>

))}

</tbody>

</table>

</div>

</div>

    )

}