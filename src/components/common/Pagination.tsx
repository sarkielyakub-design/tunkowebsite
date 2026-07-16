"use client";

interface Props {
  current: number;
  last: number;
  onChange: (
    page: number
  ) => void;
}

export default function Pagination({
  current,
  last,
  onChange,
}: Props) {

  return (

    <div className="flex items-center justify-end gap-3">

      <button
        disabled={current === 1}
        onClick={() =>
          onChange(current - 1)
        }
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span>

        {current} / {last}

      </span>

      <button
        disabled={current === last}
        onClick={() =>
          onChange(current + 1)
        }
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>

    </div>

  );

}