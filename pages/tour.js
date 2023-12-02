import { useScript } from "../Hooks/useScript";
import { motion } from "framer-motion";

export default function tour({ variants, transitionSpeed }) {
  useScript("//widget.songkick.com/555021/widget.js");

  return (
    <>
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
          <h1 className="page-header">TOUR</h1>

          <div className="tiles-container">
            <div className="checkers-bg-container">
              <div className="checkers-bg"></div>
            </div>

            <div className="color-rect custom-scroll">
              <div
                style={{
                  zIndex: 100201922102,
                  color: "white",
                  maxWidth: "90%",
                  margin: "auto",
                }}
              >
                <a
                  href="https://www.songkick.com/artists/389710"
                  className="songkick-widget"
                  data-theme="light"
                  data-track-button="on"
                  data-detect-style="on"
                  data-background-color="rgb(255,255,255,0)"
                  data-font-color="rgb(255,255,255,1)"
                  data-button-bg-color="rgba(232, 232, 232, 0.1)"
                  data-button-text-color="#fff"
                  data-locale="en"
                  data-other-artists="on"
                  data-share-button="on"
                  data-country-filter="on"
                  data-rsvp="on"
                  data-request-show="on"
                  data-past-events="off"
                  data-past-events-offtour="off"
                  data-remind-me="off"
                >
                  {<br></br>}
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
