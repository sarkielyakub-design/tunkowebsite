import { LucideIcon } from "lucide-react";

interface Props {

  title: string;

  value: string | number;

  icon: LucideIcon;

  color: string;

}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {

  return (

<div className="rounded-2xl bg-white p-6 shadow-sm">

<div className="flex items-center justify-between">

<div>

<p className="text-sm text-slate-500">

{title}

</p>

<h2 className="mt-3 text-3xl font-bold">

{value}

</h2>

</div>

<div
className={`${color} rounded-2xl p-4 text-white`}
>

<Icon className="h-7 w-7"/>

</div>

</div>

</div>

  );

}