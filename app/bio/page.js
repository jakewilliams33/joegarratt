import { react as HomeContent } from "../../content/bio.md";
import "../../styles/bio.css";

export default function () {
  return (
    <>
      <main
        className="bio-page"
        style={{
          position: "absolute",
          height: "100%",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            zIndex: 10909,
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            marginTop: "12px",
          }}
        >
          BIO
        </h3>
        <div className="tiles-container" style={{ marginLeft: "-18px" }}>
          <div className="checkers-bg-container">
            <div className="checkers-bg"></div>
          </div>

          <div className="color-rect">
            <div
              style={{
                width: "110%",
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
      </main>
    </>
  );
}
