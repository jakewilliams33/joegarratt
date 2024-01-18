import { attributes } from "../content/watch.md";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function watch({ transitionSpeed }) {
  let { youtubeurls } = attributes;

  const variants = {
    initial: { x: "0vw", opacity: 0 },
    animate: { x: "0vw", opacity: 1 },
    exit: { x: "0vw", opacity: 0 },
  };

  return (
    <>
      <motion.main
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: transitionSpeed }}
        className="watch-page"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
        }}
      >
        <h3 className="page-header">WATCH</h3>

        <div className="videos-page">
          {youtubeurls.map((item, index) => {
            return (
              <div key={index} className="videos-item">
                <div className="videos-container">
                  <iframe
                    style={{
                      position: "absolute",
                      zIndex: 10000,
                      height: "inherit",
                      width: "inherit",
                    }}
                    src={`https://www.youtube.com/embed/${item.url
                      .split("=")
                      .pop()}`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <motion.div
                    variants={{
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                    }}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="checkers-bg-container"
                  >
                    <div className="checkers-bg"></div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.main>
    </>
  );
}
