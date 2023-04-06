import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import BlobImage from "../../../assets/images/blob.svg";
import McLarenCarImage from "../../../assets/images/mclaren-orange-big.png";
import McLarenCarImg from "../../../assets/images/mclaren-1.png";
import { SCREENS } from "../../components/reponsive/index";
import Button from "../../components/Button";
import { Marginer } from "../../components/marginer";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    md:flex-row
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    md:w-1/2
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-full
    md:w-1/2
    flex
    flex-col
    relative
    mt-20
    
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-extrabold
    text-4xl
    lg:text-5xl
    xl:text-6xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 30em;
  height: 20em;
  position: absolute;
  right: -6em;
  top: -15em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 14em;
  right: -6em;
  top: -8em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 18em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 28em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

const topSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent the Best Quality Car's With Us.</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonContainer>
      </LeftContainer>
      <Marginer direction="vertical" margin="8em" />
      <RightContainer>
        <BlobContainer>
          <img src={BlobImage} alt="" />
        </BlobContainer>
        <StandAloneCar>
          <img src={McLarenCarImage} alt="" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default topSection;
