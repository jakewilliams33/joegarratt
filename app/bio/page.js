import { attributes } from "../../content/bio.md";

export default function () {
  let { body } = attributes;

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100vw",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <h3 style={{ color: "white" }}>BIO</h3>
        <div
          style={{ width: "360px", height: "500px", marginLeft: "-20px" }}
          className="tiles-container"
        >
          <div className="checkers-bg-container">
            <div className="checkers-bg"></div>
          </div>

          <div className="color-rect">
            <div
              style={{
                width: "115%",
                textAlign: "left",
                whiteSpace: "pre-wrap",
                color: "white",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  margin: "25px 0px 0px 25px",
                }}
              >
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
