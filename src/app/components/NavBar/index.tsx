import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";
import NavItems from './navItems';

const NavBarContainer = styled.div`
  min.height: 68px;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:px-12
        justify-between
        py-4
    `};
`;

const LogoContainer = styled.div`
  ${tw`
    ml-4
  `}
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
};

export default NavBar;
