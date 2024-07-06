import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <h2>My projects</h2>
        <div className="ProgramBox_Regular">
          <Image
            className="ProgramBox_Image"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
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
                <Link
                  href="/projects/1"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "normal",
                    opacity: "80%",
                  }}
                >
                  Project homepage
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="ProgramBox_Reversed">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
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
                <Link
                  href="/projects/1"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "normal",
                    opacity: "80%",
                  }}
                >
                  Project homepage
                </Link>
              </button>
            </div>
          </div>
          <div style={{ height: "8px", fontSize: "4px" }}>
            <span>&nbsp;</span>
          </div>
          <Image
            className="ProgramBox_Image"
            src="/images/placeholder.svg"
            width={100}
            height={200}
          />
        </div>
      </section>
    </>
  );
}
