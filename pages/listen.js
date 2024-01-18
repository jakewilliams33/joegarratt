import { attributes } from "../content/listen.md";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function listen({ variants, transitionSpeed }) {
  let { releases } = attributes;
  const text = useRef({});
  const coverImage = useRef({});

  const [linkTarget, setLinkTarget] = useState("");

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

  useEffect(() => {
    if (isMobile) {
      setLinkTarget("_self");
    } else {
      setLinkTarget("blank");
    }
  }, []);

  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: transitionSpeed }}
      // style={{
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   width: "100vw",
      //   height: "100%",
      // }}
    >
      <h1 className="page-header">LISTEN</h1>
      <div className="listen-page">
        <div className="releases">
          {releases.map((item, index) => {
            return (
              <div key={index} className="listen-item">
                <div className="text-side">
                  <a target="blank" className="link" href={item.url}>
                    <div style={{ marginRight: "10px" }}>
                      <p
                        className="text"
                        ref={(text.current[item.title] ??= { current: null })}
                        onMouseEnter={() => handleEnter(item.title, item.image)}
                        onMouseLeave={() => handleLeave(item.title, item.image)}
                      >
                        {item.title}
                      </p>
                    </div>
                  </a>
                </div>

                <a target={linkTarget} href={item.url}>
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.main>
  );
}
