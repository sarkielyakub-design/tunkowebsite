interface Props {

  title: string;

  children: React.ReactNode;

}

export default function AdminCard({
  title,
  children,
}: Props) {

  return (

<div className="rounded-2xl bg-white shadow-sm">

<div className="border-b px-6 py-5">

<h2 className="text-xl font-semibold">

{title}

</h2>

</div>

<div className="p-6">

{children}

</div>

</div>

  );

}