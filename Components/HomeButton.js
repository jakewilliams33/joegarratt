"use client";

import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function HomeButton() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? null : (
        <Link
          style={{
            position: "fixed",
            zIndex: 10000000000,
            WebkitTapHighlightColor: "transparent",
          }}
          href="/"
        >
          <div className="home-button">
            <AiFillHome size={40} style={{ margin: "20px 0 0 20px" }} />
          </div>
        </Link>
      )}
    </>
  );
}
