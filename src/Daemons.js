import Imgable from './components';

import styled from 'styled-components';
import React from 'react';

const DivH = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivV = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  text-align: left;
`;

const Daemons = () => {
    return (<>
        <DivV>
            <DivH>
                <Imgable src="./img/melting-clock.jpg" />
                <Ul>
                    <li>existia a máquina</li>
                    <li>compilava local</li>
                    <li>instalava</li>
                </Ul>
            </DivH>
            <>
                <p>Confiável?</p>

                <p>Faz-me rir</p>
            </>
        </DivV>
    </>);
}

export default Daemons;