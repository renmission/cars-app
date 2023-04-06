import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import Car from "../../components/Car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/reponsive";
import carService from "../../services/carService";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { setTopCars } from "./homePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { MoonLoader } from "react-spinners";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise(rs => setTimeout(rs, timeout));

const TopCars = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setIsLoading(true);
    const cars = await carService
      .getCars()
      .catch((err) => console.log("ERROR:", err));

    await wait(5000);  
    console.log("CARS:", cars);
    if (cars) setTopCars(cars);
    setIsLoading(false);
  };

  useEffect(() => {
    wait(5000);
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;
  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car key={car.id} {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];

  console.log("Cars:::", cars);

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  if (isEmptyTopCars) return null;

  return (
    <TopCarsContainer>
      <Title>Explore our car deal</Title>
      {isLoading && <LoadingContainer><MoonLoader loading size={20} /></LoadingContainer>}
      {isEmptyTopCars && !isLoading && <EmptyCars>No cars found.</EmptyCars>}
      {!isEmptyTopCars && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
};

export default TopCars;
