import { Page } from '@constants/pages';
import styled, { css } from 'styled-components';
import BgHome from '@src/assets/images/bg-home.jpg';
import BgCharacters from '@src/assets/images/bg-characters.jpg';
import BgLocations from '@src/assets/images/bg-locations.jpg';
import BgEpisodes from '@src/assets/images/bg-episodes.jpg';
import BgDefault from '@src/assets/images/bg-default.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
`;

export const Background = styled.div<{ $path: string }>`
  margin: auto;
  background: center / cover no-repeat;
  transition: background-image 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &::after {
    content: '';
    background-color: rgba(255 255 255 / 10%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ${({ $path }) => {
    switch ($path) {
      case Page.home:
        return css`
          background-image: url(${BgHome});
        `;
      case Page.characters:
        return css`
          background-image: url(${BgCharacters});
        `;
      case Page.locations:
        return css`
          background-image: url(${BgLocations});
        `;
      case Page.episodes:
        return css`
          background-image: url(${BgEpisodes});
        `;
      default:
        return css`
          background-image: url(${BgDefault});
        `;
    }
  }}
`;

export const OutletWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  padding: 10vh 3vh;
  background-color: rgba(0 0 0 / 70%);
  box-shadow: -1px 0px 20px #000000;
  user-select: none;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 7vh;
  margin: 0;
  padding: 0;
  list-style: none;

  span {
    font-size: 42px;
  }
`;
