import styled from 'styled-components';
// Component
import { motion } from 'framer-motion';
// Data
import { deviceSize } from '../data/data';

/** [Styled component] Travel log page components */
export const TLogPage = {
  Background: styled.img`
    height: 100%;
    object-fit: cover;
    position: fixed;
    width: 100%;
    z-index: 1;
  `,
  BackgroundCover: styled(motion.div)`
    background-color: #000000;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 3;
    @media (min-width: 768px) {
      width: auto;
    }
  `,
  ContainerBody: styled.div`
    align-items: flex-end;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;
  `,
  ContainerHeader: styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    height: 120px;
    position: relative;
    width: 100%;
    @media ${deviceSize.mobile} {
      justify-content: center;
      height: 180px;
    }
  `,
  Layout: styled.div`
    height: 100vh;
    position: relative;
    user-select: none;
    width: 100vw;
  `,
};
/** [Styled component] Travel log form components */
export const TLogForm = {
  Title: styled(motion.h2)`
    color: #FFFFFF;
    font-size: 72px;
    font-weight: 700;
    margin: 0;
    @media ${deviceSize.mobile} {
      font-size: 60px;
    }
  `,
}