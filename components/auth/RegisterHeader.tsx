import Image from "next/image";

export default function RegisterHeader() {
  return (
    <div className="mb-10 text-center">
      <Image
        src="/logo.png"
        alt="Tunko"
        width={72}
        height={72}
        className="mx-auto mb-4"
        priority
      />

      <h1 className="text-3xl font-bold text-slate-900">
        Create Your Account
      </h1>

      <p className="mt-3 text-slate-500">
        Join Tunko and start sending money
        across Africa securely.
      </p>
    </div>
  );
}