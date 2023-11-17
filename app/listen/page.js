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
      <h1 className="page-header">LISTEN</h1>
      <div className="listen-page">
        <div className="releases">
          {releases.map((item, index) => {
            return (
              <div key={index} className="listen-item">
                <div className="text-side">
                  <a target="blank" className="link" href={item.url}>
                    <p>{item.title}</p>
                  </a>
                </div>

                <a target="blank" href={item.url}>
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
