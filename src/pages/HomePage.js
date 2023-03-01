import {
  HomeImg,
  HomeText,
  HomeTitle,
  MainBox,
  MainTitle,
  Section,
  StyledHomePage,
  StyledIcon,
  TextBox,
} from './HomePage.styled';

import image from '../images/image-home.jpg';

export const Home = () => {
  return (
    <StyledHomePage>
      <Section>
        <StyledIcon />
        <MainTitle>WELCOME TO YOUR ONLINE PHONEBOOK!</MainTitle>
        <MainBox>
          <div>
            <HomeImg src={image} alt="notebook" />
          </div>
          <TextBox>
            <HomeTitle>About</HomeTitle>
            <HomeText>
              Your personal PhoneBook will help you keep an organized list of
              contacts and find the contact easily and quickly! Let's get
              started!
            </HomeText>
          </TextBox>
        </MainBox>
      </Section>
    </StyledHomePage>
  );
};
