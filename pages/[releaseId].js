"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { attributes } from "../content/listen.md";
import { convertToId } from "../Hooks/convertToId";
import ColorRect from "../Components/ColorRect";

export default function LandingPage({ variants, transitionSpeed }) {
  const router = useRouter();
  const { releases } = attributes; // Use destructuring here directly
  const { releaseId } = router.query;
  const [current, setCurrent] = useState(null); // Initialize current as null

  const releasesLookup = releases.reduce((acc, item) => {
    const id = convertToId(item.title);
    acc[id] = item;
    return acc;
  }, {});

  // Look up match and set as current release
  useEffect(() => {
    if (releaseId) {
      const x = releasesLookup[releaseId];
      setCurrent(x);
    }
  }, [releaseId, releasesLookup]);

  // Display loading state if current is not set yet
  if (!current) {
    return <></>;
  }

  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: transitionSpeed }}
      className="tour-page"
      style={{
        position: "absolute",
        height: "100%",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <section style={{ color: "white" }}>
        <div
          style={{ maxWidth: "420px", marginTop: 20 }}
          className="tiles-container"
        >
          <div className="checkers-bg-container">
            <div className="checkers-bg"></div>
          </div>

          <ColorRect styles={{ maxWidth: "420px" }}>
            <div
              style={{
                zIndex: 100201922102,
                color: "white",
                maxWidth: "90%",
                margin: "auto",
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={current.image}
                style={{
                  width: "150px",
                  marginTop: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></img>
              <ul
                style={{ margin: "20px 0 40px 0", minHeight: "100%", flex: 1 }}
                className="streaming-links"
              >
                {current.apple_music && (
                  <li>
                    <a target="_blank" href={current.spotify}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/spotify.svg"
                        alt="Spotify"
                      />
                    </a>
                  </li>
                )}
                {current.apple_music && (
                  <li>
                    <a target="_blank" href={current.apple}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/apple.svg"
                        alt="Apple Music"
                      />
                    </a>
                  </li>
                )}
                {current.youtube && (
                  <li>
                    <a target="_blank" href={current.youtube}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/youtube.svg"
                        alt="YouTube"
                      />
                    </a>
                  </li>
                )}
                {current.tidal && (
                  <li>
                    <a target="_blank" href={current.tidal}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/tidal.svg"
                        alt="Tidal"
                      />
                    </a>
                  </li>
                )}
                {current.amazon_music && (
                  <li>
                    <a target="_blank" href={current.amazon}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/amazon.svg"
                        alt="Amazon Music"
                      />
                    </a>
                  </li>
                )}
                {current.deezer && (
                  <li>
                    <a target="_blank" href={current.deezer}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/deezer.svg"
                        alt="Deezer"
                      />
                    </a>
                  </li>
                )}
                {current.bandcamp && (
                  <li>
                    <a target="_blank" href={current.bandcamp}>
                      <img
                        data-test="music-service-item-image"
                        src="/images/streaming/bandcamp.svg"
                        alt="bandcamp"
                      />
                    </a>
                  </li>
                )}
                {current.presave && (
                  <li>
                    <a
                      style={{
                        color: "white",
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                      target="_blank"
                      href={current.presave}
                    >
                      <p
                        className="presave-link"
                        style={{
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "10px",
                          display: "table",
                          margin: "10px auto 0 auto",
                          padding: "0 5px 0 5px",
                          backgroundColor: "rgba(255, 255, 255, 0.28)",
                        }}
                      >
                        PRE-SAVE HERE
                      </p>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </ColorRect>
        </div>
      </section>
    </motion.main>
  );
}
