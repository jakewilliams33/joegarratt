import Link from "next/link";
import Head from "next/head";
import "../styles/home.css";

import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import {
  BsTwitterX,
  BsSpotify,
  BsApple,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main
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
                <a
                  className="link"
                  href="https://joegarratt.bandcamp.com/"
                  target="blank"
                >
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
            <li style={{ position: "relative", top: 1 }}>
              <BsInstagram />
            </li>
            <li>
              <ImFacebook />
            </li>
            <li>
              <BsTwitterX />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsSpotify />
            </li>
            <li style={{ position: "relative", bottom: 4 }}>
              <BsApple />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
