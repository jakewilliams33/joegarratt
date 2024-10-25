import { attributes } from "../content/listen.md";
import { useRef } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { convertToId } from "../Hooks/convertToId";
import Link from "next/link";

export default function listen({ variants, transitionSpeed }) {
  let { releases } = attributes;
  const text = useRef({});
  const coverImage = useRef({});

  const handleEnter = (title, image) => {
    if (isMobile) {
      return;
    } else {
      text.current[title].current.className = "text on-hover";
      coverImage.current[image].current.className = "image on-hover";
    }
  };

  const handleLeave = (title, image) => {
    if (isMobile) {
      return;
    } else {
      text.current[title].current.className = "text";
      coverImage.current[image].current.className = "image";
    }
  };

  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: transitionSpeed }}
      className="bio-page"
      style={{
        position: "absolute",
        height: "100%",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h1 className="page-header">LISTEN</h1>
      <div className="listen-page">
        <div className="releases">
          {releases.map((item, index) => {
            if (item.displayOnMusicPage === "yes") {
              return (
                <div key={index} className="listen-item">
                  <div className="text-side">
                    <Link
                      className="link"
                      href={`/landing/${convertToId(item.title)}`}
                    >
                      <div style={{ marginRight: "10px" }}>
                        <p
                          className="text"
                          ref={(text.current[item.title] ??= { current: null })}
                          onMouseEnter={() =>
                            handleEnter(item.title, item.image)
                          }
                          onMouseLeave={() =>
                            handleLeave(item.title, item.image)
                          }
                        >
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  </div>

                  <Link
                    className="link"
                    href={`/landing/${convertToId(item.title)}`}
                  >
                    {" "}
                    <div
                      onMouseEnter={() => handleEnter(item.title, item.image)}
                      onMouseLeave={() => handleLeave(item.title, item.image)}
                      className="listen-container"
                    >
                      <img
                        className="image"
                        ref={
                          (coverImage.current[item.image] ??= { current: null })
                        }
                        style={{
                          paddingBottom: "2vw",
                          position: "absolute",
                          zIndex: 10000,
                          height: "inherit",
                          width: "inherit",
                        }}
                        src={item.image}
                      ></img>
                      <div className="checkers-bg-container">
                        <div className="checkers-bg"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </motion.main>
  );
}
