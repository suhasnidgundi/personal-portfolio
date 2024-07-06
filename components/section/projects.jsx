import Image from "next/image";

export default function Projects() {
  return (
    <>
      <section>
        <h2 id="projects">My projects</h2>
        <div class="ProgramBox_Regular">
          <Image
            class="ProgramBox_Image"
            src="/images/placeholder.svg"
            width={100}
            height={200}
          />
          <div sryle={{ height: "8px", fontSize: "4px" }}>
            <span>&nbsp;</span>
          </div>
          <div
            style={{
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              verticalAlign: "middle",
              height: "100%",
            }}
          >
            <h3>Project Name</h3>
            <p style={{ flexGrow: "1" }}>

            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "bottom",
                verticalAlign: "middle",
              }}
            >
              <button style={{ flexGrow: "1", margin: "0 3px 0 0" }}>
                Project homepage
              </button>
            </div>
          </div>
        </div>
        <div class="ProgramBox_Reversed">
          <div
            style={{
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              verticalAlign: "middle",
              height: "100%",
            }}
          >
            <h3>Project Name</h3>
            <p style={{ flexGrow: "1" }}>
              
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "bottom",
                verticalAlign: "middle",
              }}
            >
              <button style={{ flexGrow: 1, margin: "0 3px 0 0" }}>
                Project homepage
              </button>
            </div>
          </div>
          <div style={{ height: "8px", fontSize: "4px" }}>
            <span>&nbsp;</span>
          </div>
          <Image
            class="ProgramBox_Image"
            src="/images/placeholder.svg"
            width={100}
            height={200}
          />
        </div>
      </section>
    </>
  );
}
