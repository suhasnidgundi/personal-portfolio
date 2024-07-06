import { portfolio } from "@/portfolioInfo";
import "@/styles/button.css";
import "@/styles/textblock-textarea.css";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/contactForm"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ContactMe = () => {
  return (
    <section>
      <h2
        class="bgColor"
        style={{ position: "relative", top: "calc(50% - 5px)", left: "0px" }}
        id="contact"
      >
        Contact me!
      </h2>
      <p class="bgColor" style={{ width: "100%" }}>
        Want to get in touch with me? Fill the <b>following form</b>. I will
        reply as soon as I can.
      </p>
      <ContactForm />
      <p>
        Note: If after two weeks I have not replied, perhaps I have not received
        your email due to some uncaught sever error. Should this be the case,
        you may also contact me
        <b>
          <i style={{ fontStyle: "italic" }}> at</i> {portfolio.personalInfo.email}
        </b>
      </p>
    </section>
  );
};

export default ContactMe;
