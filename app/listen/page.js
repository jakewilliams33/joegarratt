import "../../styles/listen.css";
import { attributes } from "../../content/listen.md";

export default function listen() {
  let { releases } = attributes;
  return (
    <main
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
      }}
    >
      <h1
        style={{
          zIndex: 10909,
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          marginTop: "12px",
        }}
      >
        LISTEN
      </h1>
      <div className="listen-page">
        <div className="releases">
          {releases.map((item, index) => {
            return (
              <div key={index} className="listen-item">
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      textTransform: "uppercase",
                      overflowWrap: "break-word",
                      display: "inline-block",
                      wordBreak: "break-word",
                    }}
                  >
                    <p>{item.title}</p>
                  </div>
                </div>

                <div className="listen-container">
                  <img
                    style={{
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
