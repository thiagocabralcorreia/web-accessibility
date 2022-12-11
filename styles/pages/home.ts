"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
`;

export const Title = styled.h1`
  margin: 50px;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const Description = styled.p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Link = styled.a`
  &:link {
    color: ${({ theme }) => theme.colors.main};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.complementary};
  }
  &:active {
    color: ${({ theme }) => theme.colors.main};
  }
`;
