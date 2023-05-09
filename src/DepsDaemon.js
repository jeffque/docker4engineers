import Imgable from './components';

import styled from 'styled-components';
import React from 'react';

const DivH = styled.div`
  display: flex;
  flex-direction: row;
`;

const Center = styled.div`
  height: inherit;
  text-align: left;
`;

const Subitens = ({children, title}) => {
  return (<li>
    {title}
    <ul>
      {children}
    </ul>
  </li>

  )
};

const Img = styled(Imgable)`
  transform: scaleX(-1);
`;

const DepsDaemon = () => {
    return (<>
          <DivH>
              <Img src="./img/daemon.png" />
              <Center>
                <ul>
                    <Subitens title='daemons'>
                      <li>postgresql</li>
                      <li>redis</li>
                      <li>sidekiq</li>
                    </Subitens>
                    <Subitens title='execs'>
                      <li>cronjobs</li>
                      <li>onetime/perdidas</li>
                    </Subitens>
                    <Subitens title='libs'>
                      <li>adicionam poder a execs/daemons</li>
                      <li>plugins</li>
                    </Subitens>
                </ul>
              </Center>
          </DivH>
    </>);
}

export default DepsDaemon;