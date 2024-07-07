import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, description, imageSrc, link }) => {
  return (
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
        <h3>{title}</h3>
        <p style={{ flexGrow: "1" }}>{description}</p>
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
              href={link}
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
        src={imageSrc}
        width={100}
        height={200}
        alt=""
      />
    </div>
  );
};

export default ProjectCard;
