import Link from "next/link";
import Script from "next/script";

import { attributes } from "../content/menulinks.md";
import { ImFacebook } from "react-icons/im";
import {
  BsTwitterX,
  BsSpotify,
  BsApple,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import Page from "../Components/Page";
import { motion } from "framer-motion";

export default function Home({ variants, transitionSpeed }) {
  return (
    <Page>
      <Script>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Script>
      <motion.main
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: transitionSpeed }}
        className="home"
        style={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          minHeight: "570px",
        }}
      >
        <div className="tiles-container">
          <div className="checkers-bg-container" style={{ minHeight: "340px" }}>
            <div className="checkers-bg"></div>
          </div>
          <div className="color-rect" style={{ minHeight: "340px" }}>
            <h3 className="jg-logo">JOEGARRATT</h3>

            <div className="list-container">
              <ul>
                <Link className="link" href="/listen">
                  <li>LISTEN</li>
                </Link>
                <Link className="link" href="/watch">
                  <li>WATCH</li>
                </Link>
                <Link className="link" href="/tour">
                  <li>TOUR</li>
                </Link>

                <a target="blank" className="link" href={attributes.shop}>
                  <li>SHOP</li>
                </a>
                <Link className="link" href="/bio">
                  <li>BIO</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="socials-container">
          <ul className="socials">
            <a className="link" target="blank" href={attributes.instagram}>
              <li style={{ position: "relative", bottom: -1 }}>
                <BsInstagram />
              </li>
            </a>
            <a className="link" target="blank" href={attributes.facebook}>
              <li>
                <ImFacebook />
              </li>
            </a>
            <a className="link" target="blank" href={attributes.x}>
              <li>
                <BsTwitterX />
              </li>
            </a>
            <a className="link" target="blank" href={attributes.youtube}>
              <li>
                <BsYoutube />
              </li>
            </a>
            <a className="link" target="blank" href={attributes.spotify}>
              <li>
                <BsSpotify />
              </li>
            </a>
            <a className="link" target="blank" href={attributes.apple}>
              <li style={{ position: "relative", bottom: 4 }}>
                <BsApple />
              </li>
            </a>
          </ul>
        </div>
      </motion.main>
    </Page>
  );
}
