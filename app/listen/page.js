import { attributes } from "../../content/listen.md";

export default function Listen() {
  let { releases } = attributes;

  return (
    <>
      <h3
        style={{
          zIndex: 10909,
          textAlign: "center",
          fontSize: "40px",
          color: "white",
        }}
      >
        LISTEN
      </h3>
      <main
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {releases.map((item, index) => {
          return (
            <section key={index} style={{ display: "flex" }}>
              <p>{item.title}</p>
              <div className="coverart-container">
                <a
                  target="blank"
                  style={{
                    zIndex: 10000,
                    height: "inherit",
                    width: "inherit",
                  }}
                  href={item.url}
                >
                  <img
                    style={{
                      position: "absolute",
                      zIndex: 10000,
                      height: "inherit",
                      width: "inherit",
                      marginLeft: "35px",
                      marginTop: "20px",
                    }}
                    src={item.image}
                  ></img>
                </a>
                <div className="checkers-bg-container">
                  <div className="checkers-bg"></div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
