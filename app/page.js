import Link from "next/link";
import Head from "next/head";
import "../styles/home.css";

import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsSpotify, BsApple } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main
        className="home"
        style={{ position: "absolute", width: "100vw", height: "100%" }}
      >
        <div className="tiles-container">
          <div className="checkers-bg-container">
            <div className="checkers-bg"></div>
          </div>
          <div className="color-rect">
            <h3 className="jg-logo">JOEGARRATT</h3>

            <div className="list-container">
              <ul>
                <Link className="link" href="/listen">
                  <li>LISTEN</li>
                </Link>
                <Link className="link" href="/watch">
                  <li>WATCH</li>
                </Link>
                <li>TOUR</li>
                <li>SHOP</li>
                <Link className="link" href="/bio">
                  <li>BIO</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="socials-container">
          <ul style={{}} className="socials">
            <li>
              <AiOutlineInstagram className="socials-bigger" />
            </li>
            <li>
              <ImFacebook className="socials-smaller" />
            </li>
            <li>
              <BsTwitter className="socials-smaller" />
            </li>
            <li>
              <AiFillYoutube className="socials-bigger" />
            </li>
            <li>
              <BsSpotify className="socials-smaller" />
            </li>
            <li>
              <BsApple className="socials-smaller" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
