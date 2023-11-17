"use client";

import Link from "next/link";
import Head from "next/head";
import "../styles/home.css";
import { attributes } from "../content/menulinks.md";
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
      </main>
    </>
  );
}
