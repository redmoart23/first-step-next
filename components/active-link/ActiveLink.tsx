"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${style.link} ${pathname === path && style["active-link"]}`}
      href={path}
    >
      {label}
    </Link>
  );
};
