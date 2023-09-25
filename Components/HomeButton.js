"use client";

import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function HomeButton() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? null : (
        <Link style={{ position: "absolute", zIndex: 10000000000 }} href="/">
          <div className="home-button">
            <AiFillHome size={30} style={{ margin: "20px 0 0 20px" }} />
          </div>
        </Link>
      )}
    </>
  );
}
