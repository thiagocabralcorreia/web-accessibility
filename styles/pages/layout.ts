"use client";
import styled from "styled-components";

export const PageContainer = styled.body`
  width: 100%;
  ${({ theme }) => `background-color: ${theme.colors.primary_background};`}
`;
