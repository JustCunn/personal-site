import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

/**
 * Example Text Gradient Animation
 */

export default function TextGradientComponent(props) {
  return (
    <>
      <AnimatedGradientText size={props.size} weight={props.weight}>{props.message}</AnimatedGradientText>
    </>
  );
}

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);;
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
`;