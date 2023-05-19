import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
`;

const Website = () => {
  return (
    <>
      <h1>obrigado</h1>
      <h1>blog</h1>
      <Img src="./img/website-qrcode.png" />
      <Link href="https://computaria.gitlab.io/blog/" target="_blank">
        <h2>computaria</h2>
      </Link>
    </>
  );
};

export default Website;
