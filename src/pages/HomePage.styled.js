import styled from 'styled-components';

import { GiNotebook } from 'react-icons/gi';
export const StyledHomePage = styled.main`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Section = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
export const HomeImg = styled.img`
  width: 550px;
  height: auto;
  border-radius: 20px;
`;
export const HomeText = styled.p`
  font-size: 26px;
`;
export const HomeTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
`;
export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 80px;
`;
export const MainBox = styled.div`
  display: flex;
  gap: 46px;
  align-items: center;
`;
export const TextBox = styled.div`
  width: 550px;
  background-image: linear-gradient(to right top, #e6deeb, #e8ddea, #eae0e9);
  padding: 25px;
  border-radius: 20px;
`;

export const StyledIcon = styled(GiNotebook)`
  display: block;
  width: 70px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;
