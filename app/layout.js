"use client";

import MyShader from "../Components/MyShader";
import "../styles/globals.css";
import HomeButton from "../Components/HomeButton";
import { useState } from "react";
import useIsTabActive from "../Hooks/useIsTabActive";

export default function RootLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <html lang="en">
      <body>
        <div>
          <div className="sky-background"></div>

          <MyShader whenLoaded={() => setIsLoaded(true)} />

          {isLoaded && (
            <div>
              <HomeButton />
              {children}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
