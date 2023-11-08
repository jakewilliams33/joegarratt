import { react as HomeContent } from "../../content/bio.md";
import "../../styles/bio.css";

export default function () {
  return (
    <>
      <div
        className="bio-page"
        style={{
          position: "absolute",
          height: "100%",
          width: "100vw",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <h3 style={{ color: "white" }}>BIO</h3>
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
      </div>
    </>
  );
}
