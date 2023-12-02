import { react as HomeContent } from "../content/bio.md";
import { motion } from "framer-motion";

export default function ({ variants, transitionSpeed }) {
  return (
    <>
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
        <h1 className="page-header">BIO</h1>
        <div className="tiles-container" style={{ marginLeft: "-20px" }}>
          <div className="checkers-bg-container">
            <div className="checkers-bg"></div>
          </div>

          <div className="color-rect">
            <div
              style={{
                width: "112%",
                textAlign: "left",
                whiteSpace: "pre-wrap",
                color: "white",
              }}
            >
              <div
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  margin: "15px 0px 0px 25px",
                }}
              >
                <HomeContent />
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
}
