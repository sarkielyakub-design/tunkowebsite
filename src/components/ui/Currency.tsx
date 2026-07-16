interface Props {
  amount: number;
  currency?: string;
}

export default function Currency({
  amount,
  currency = "₦",
}: Props) {

  return (
    <>
      {currency}
      {Number(amount).toLocaleString()}
    </>
  );

}