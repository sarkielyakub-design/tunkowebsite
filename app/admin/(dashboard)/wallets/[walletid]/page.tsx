import WalletDetailsPage from "@/src/features/admin/wallets/pages/WalletDetailsPage";

interface Props {
  params: {
    walletId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <WalletDetailsPage
      walletId={params.walletId}
    />
  );
}