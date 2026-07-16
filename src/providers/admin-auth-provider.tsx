"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminAuthProvider({
  children,
}: Props) {
  return <>{children}</>;
}