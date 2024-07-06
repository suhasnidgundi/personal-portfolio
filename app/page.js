import Projects from "@/components/section/projects";
import "./page.module.css";
import Hero from "@/components/section/hero";
import MySetup from "@/components/MySetup";
import ContactMe from "./contactMe/page";

export const metadata = {
  title: "Home - Personal Portfolio",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero />
      <br />
      <Projects />
      <br />
      <MySetup />
      <br />
      <ContactMe />
    </>
  );
}
