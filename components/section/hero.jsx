import { portfolio } from "@/portfolioInfo";
import Image from "next/image";
import Link from "next/link";
import "@/styles/hero/style.css";

const Hero = () => {
  return (
    <>
      <section id="aboutMe">
        <h1>
          Hi <span className="waving-hand">👋</span>
        </h1>
        <p>
          I&apos;m a tech enthusiast on a journey to make my mark in
          the world of computer engineering. Let me give you a quick snapshot of
          where I&apos;ve been, where I am, and where I&apos;m headed.
        </p>
        <p>
          <strong>Past 🕰️</strong>
          <br />
          In the past year, I&apos;ve been busy laying the groundwork for my career.
          I wrapped up my <strong>
            diploma in Information Technology
          </strong>{" "}
          from <strong><a href="https://www.sinhgad.edu/">Sou. Venutai Chavan Polytechnic</a></strong>, and during that
          time, I managed to squeeze in internships at{" "}
          <em>two private limited companies</em>. Oh, and did I mention I
          snagged <em>two national-level prizes</em> in project and idea
          competitions? Not too shabby, right? 🏆🏆
        </p>
        <p>
          <strong>Present 📚</strong>
          <br />
          Currently, I&apos;m hitting the books at{" "}
          <strong>
            <a href="https://www.dypcoei.edu.in/">
              Dr. D. Y. Patil College of Engineering and Innovation
            </a>
          </strong>
          , pursuing my bachelor&apos;s in Computer Engineering. It&apos;s challenging,
          but I&apos;m loving every bit of it. The late-night coding sessions, the
          eureka moments, and yes, even the occasional coffee-fueled debugging
          marathons – they&apos;re all part of the adventure. ☕💡
        </p>
        <p>
          <strong>Future 🚀</strong>
          <br />
          Looking ahead, I&apos;m excited to dive deeper into the world of tech and
          make a real impact. I&apos;m aiming to blend my academic knowledge with
          hands-on experience to become a versatile and innovative computer
          engineer. Whether it&apos;s developing cutting-edge software, exploring the
          realms of AI, or contributing to groundbreaking projects, I&apos;m ready to
          take on whatever challenges come my way.
        </p>
        <p>
          So, that&apos;s me in a nutshell – a mix of accomplishments, ongoing
          learning, and big dreams. Stick around, and let&apos;s see where this
          journey takes us! 🌟
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
