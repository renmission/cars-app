import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
}

const BaseButton = styled.button`
  ${tw`
        px-5
        py-3
        outline-none
        rounded-md
        to-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        mr-2
        mb-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
        bg-red-500
        text-white
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500
    `};
`;
const FilledButton = styled(BaseButton)`
  ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent
    `};
`;

const Button = ({ theme, text }: IButtonProps) => {
  if (theme === "filled") {
    return <FilledButton>{text}</FilledButton>;
  }
  return <OutlinedButton>{text}</OutlinedButton>;
};

export default Button;
