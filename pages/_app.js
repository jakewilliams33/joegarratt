import { useRouter } from "next/router";
import MyShader from "../Components/MyShader";
import HomeButton from "../Components/HomeButton";
import { useState } from "react";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";
import "../styles/watch.css";
import "../styles/bio.css";
import "../styles/tour.css";
import "../styles/listen.css";
import {} from "react-device-detect";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const variants = {
    initial: { x: "-114vw", opacity: 1 },
    animate: { x: "0vw", opacity: 1 },
    exit: { x: "114vw", opacity: 1 },
  };

  const transitionSpeed = isMobile ? 0.5 : 0.5;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon.ico" />
      </Head>

      <div className="sky-background"></div>

      <MyShader isMobile={isMobile} whenLoaded={() => setIsLoaded(true)} />

      <AnimatePresence mode={isMobile ? "wait" : "sync"}>
        <div key={router.pathname}>
          <HomeButton />
          <Component
            {...pageProps}
            variants={variants}
            transitionSpeed={transitionSpeed}
          />
        </div>
      </AnimatePresence>
    </>
  );
}
