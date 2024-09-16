"use client";

import { Container, Text } from "@mantine/core";

import classes from "./FooterSocial.module.css";
import Link from "next/link";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container
        className={classes.inner}
        ta="center"
        style={{ justifyContent: "center" }}
      >
        {/* <MantineLogo size={28} /> */}
        <Text className={classes.text} ta="center">
          Made with ❤️ using{" "}
          <Link style={{ textDecoration: "none" }} href="https://nextjs.org/">
            Next.js
          </Link>
          ,{" "}
          <Link href="https://mantine.dev/" style={{ textDecoration: "none" }}>
            mantine.dev
          </Link>
          . Check out the source code on{" "}
          <Link href="" style={{ textDecoration: "none" }}>
            Github
          </Link>
          . © 2024 Suhas Nidgundi
        </Text>
      </Container>
    </div>
  );
}
