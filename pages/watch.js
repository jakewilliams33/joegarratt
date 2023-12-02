import { attributes } from "../content/watch.md";
import { motion } from "framer-motion";

export default function watch({ variants, transitionSpeed }) {
  let { youtubeurls } = attributes;

  return (
    <>
      <motion.div
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="night-filter"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></motion.div>
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
                      exit: { opacity: 0 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1.2, ease: "easeInOut" }}
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
