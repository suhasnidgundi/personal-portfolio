import { portfolio } from "@/portfolioInfo";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="aboutme">
        <h1>Hi!</h1>
        <p className="bgColor" id="selftext">
          {portfolio.personalInfo.description}
        </p>
        <br />
        <h3 id="findme">Find me here</h3>
        <div className="SocialWidgetDiv">
          {portfolio.socialLinks.map((social, index) => (
            <Link
              key={index}
              className="socialDiv"
              href={social.url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="socialImg"
                src={social.image}
                width={100}
                height={100}
                alt={social.name}
              />
              <p className="socialText">{social.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
