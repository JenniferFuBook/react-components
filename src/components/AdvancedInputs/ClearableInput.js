import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Clear } from './clear.svg';

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
`;

export const ClearableInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <TextInput
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Icon>
        <Clear
          width="20px"
          height="20px"
          stroke="black"
          onClick={() => {
            setInputValue('');
          }}
        />
      </Icon>
    </Container>
  );
};
