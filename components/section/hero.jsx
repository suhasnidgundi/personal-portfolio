import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section>
        <h1 id="aboutme">Hi!</h1>
        <p class="bgColor" id="selftext">
          
        </p>
        <br />
        <h3 id="findme">Find me here</h3>
        <div class="SocialWidgetDiv">
          <div class="socialDiv">
            <Image
              class="socialImg"
              src="/images/linkedin_icon.png"
              width={100}
              height={100}
            />
            <p class="socialText">LinkedIn</p>
          </div>
          <div class="socialDiv">
            <img class="socialImg" src="images/github.webp" />
            <p class="socialText">GitHub</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
