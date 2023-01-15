import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: orange;
`;

type Props = {
  children: JSX.Element;
};

function Main({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;
