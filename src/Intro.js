import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import Background from './Background';
import { mainTitle, subTitle } from './Constants';

const Img = styled.img`
  width: 160px;
  border: 6px solid #fff;
  border-radius: 50%;
`;

const Name = styled.h1`
  color: #ffffff;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const Social = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  color: #ffffff;
`;

const SocialTwitter = ({userName}) => {
  const hrefSocial = `https://twitter.com/${userName}`
  return <Social href={hrefSocial} target="_blank">
    <FaTwitter size="22px" />
    <a>{userName}</a>
  </Social>
}

const SocialGithub = ({userName}) => {
  const hrefSocial = `https://github.com/${userName}`
  return <Social href={hrefSocial} target="_blank">
    <FaGithub size="22px" />
    <a>{userName}</a>
  </Social>
}

const Intro = () => {
  return (
    <Background background="#03d69d">
      <Img src="https://github.com/jeffque.png" />
      <Name>{mainTitle}</Name>
      <Socials>
        <SocialTwitter userName="jeffquesado" />
        <SocialGithub userName="jeffque" />
      </Socials>
      <Logo>
        <img width="240px" fillcolor="#fff" src="./img/whale.png"/>
        <Title>{subTitle}</Title>
      </Logo>
    </Background>
  );
};

export default Intro;
