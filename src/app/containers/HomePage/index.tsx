import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import NavBar from "../../components/NavBar";
import TopSection from "./topSection";
import BookCard from "../../components/BookCard";
import BookingSteps from "./bookingSteps";




const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="8em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
    </PageContainer>
  );
};

export default HomePage;
