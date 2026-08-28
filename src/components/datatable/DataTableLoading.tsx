export default function DataTableLoading() {

  return (

    <div className="space-y-4 p-6">

      {[1,2,3,4,5,6].map((i)=>(
        <div
          key={i}
          className="h-16 animate-pulse rounded-xl bg-slate-100"
        />
      ))}

    </div>

  );

}