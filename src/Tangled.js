import Imgable from './components';

import styled from 'styled-components';
import React from 'react';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;


const Tangled = () => {
    return <Div>
        <>
            <ul>
                <li>java</li>
                <li>redis</li>
                <li>postgresql</li>
                <li>extensões nativas</li>
            </ul>
        </>
        <Imgable src='./img/tangled.jpg' />
    </Div>
};

export default Tangled;