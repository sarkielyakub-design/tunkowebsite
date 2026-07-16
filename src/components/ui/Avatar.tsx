interface Props {
  first: string;
  last: string;
}

export default function Avatar({
  first,
  last,
}: Props) {

  return (

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">

      {first.charAt(0)}
      {last.charAt(0)}

    </div>

  );

}