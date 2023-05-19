import styled from 'styled-components';
import React from 'react';

const PrivateInternal = styled.img`
  height: 350px;
  margin: 5px;
`;

const DoubleSplitImage = ({src, alt}) => {
  return <PrivateInternal
      src={src}
      alt={alt}
  />
};

const Worked = () => 
    (<>
    <DoubleSplitImage src="./img/postgres14-5430.jpg" alt="conexão com sucesso porta 5432" />

    <DoubleSplitImage src="./img/postgres14-5432.jpg" alt="conexão com sucesso porta 5430" />
    </>);


export default Worked;