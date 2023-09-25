import Link from "next/link";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsSpotify, BsApple } from "react-icons/bs";

export default function Home() {
  return (
    <main style={{ position: "absolute", width: "100vw", height: "100%" }}>
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
            <AiOutlineInstagram size={40} />
          </li>
          <li>
            <ImFacebook size={33} />
          </li>
          <li>
            <BsTwitter size={33} />
          </li>
          <li>
            <AiFillYoutube size={40} />
          </li>
          <li>
            <BsSpotify size={33} />
          </li>
          <li>
            <BsApple size={33} />
          </li>
        </ul>
      </div>
    </main>
  );
}
