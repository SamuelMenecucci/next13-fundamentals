import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p className="tx-xl font-bold">Logo do App</p>
      <div>{children}</div>
    </div>
  );
}
