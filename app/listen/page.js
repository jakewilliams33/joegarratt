export default function Listen() {
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
        }}
      >
        <section style={{ display: "flex" }}>
          <p>LISTEN</p>
          <div className="coverart-container">
            <img
              style={{
                position: "absolute",
                zIndex: 10000,
                height: "inherit",
                width: "inherit",
                marginLeft: "35px",
                marginTop: "20px",
              }}
              src="https://hypeddit-gates-prod.s3.amazonaws.com/twwu99_coverartmanual"
            ></img>
            <div className="checkers-bg-container">
              <div className="checkers-bg"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
