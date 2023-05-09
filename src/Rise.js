import Imgable from './components';

import styled from 'styled-components';
import React from 'react';

const DivH = styled.div`
  display: flex;
  flex-direction: row;
`;

const Center = styled.div`
  height: inherit;
`;

const LiCode = ({children}) => {
  return (
    <li><code>{children}</code></li>
  );
}

const Rise = () => {
    return (<>
          <DivH>
              <Imgable src="./img/palpatine.jpg" />
              <Center>
                <ul>
                    <LiCode>apt-get install xpto zyx</LiCode>
                    <li>dependente de distro</li>
                    <li>"funciona na minha máquina"</li>
                </ul>
              </Center>
          </DivH>
    </>);
}

export default Rise;