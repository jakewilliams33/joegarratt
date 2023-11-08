import { attributes } from "../../content/watch.md";
import "../../styles/watch.css";

export default function watch() {
  let { youtubeurls } = attributes;

  return (
    <>
      <div
        className="night-filter"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      ></div>
      <main
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
        }}
      >
        <h3
          style={{
            zIndex: 10909,
            textAlign: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          WATCH
        </h3>
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
                  <div className="checkers-bg-container">
                    <div className="checkers-bg"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
