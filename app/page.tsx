"use client";

import React from "react";
import { Container, Description, Title } from "../styles/pages/home";

export default function Home() {
  return (
    <Container>
      <Title>Web Accessibility</Title>

      <Description>
        Web accessibility or eAccessibility is a social issue, essential for
        people with physical or situational disabilities, as well as users with
        low bandwidth. This inclusive practice allows provide equal access and
        equal opportunity. <b>The Internet should be for everyone.</b>
      </Description>

      <Description>
        To remove barriers that can prevent someone with disability to access,
        navigate, or understand content on the Internet, is essential to design,
        develop and edit websites correctly, following
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Web Content Accessibility Guidelines (WCAG)
        </a>
        .
      </Description>
    </Container>
  );
}
