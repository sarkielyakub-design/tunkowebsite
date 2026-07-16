interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({
  title,
  description,
}: AuthHeaderProps) {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-3 text-base leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}