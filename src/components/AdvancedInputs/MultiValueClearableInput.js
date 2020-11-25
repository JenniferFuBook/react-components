import React, { useState, useCallback, useMemo } from 'react';
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
  ${(props) => (props.isError ? 'border-color:red' : 'border-color:black')};
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0;
  align-items: center;
  min-width: 0;
`;

const Item = styled.div`
  display: grid;
  margin: 2px 5px;
  padding: 2px;
  background: lightgrey;
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

export const MultiValueClearableInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const isError = useMemo(() => {
    return values.length > new Set(values).size;
  }, [values]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
        const value = inputValue.trim();
        if (value.length > 0) {
          setValues([...values, value]);
        }
        setInputValue('');
      } else if (event.key === 'Backspace' || event.keyCode === 8) {
        if (inputValue.length === 0 && values.length > 0) {
          setValues(values.slice(0, -1));
        }
      }
    },
    [inputValue, values]
  );

  return (
    <Container isError={isError}>
      <InputContainer>
        {values.map((value, index) => (
          <Item key={`${value}-${index}`}>{value}</Item>
        ))}
        <TextInput
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </InputContainer>
      <Icon>
        <Clear
          width="20px"
          height="20px"
          stroke={isError ? 'red' : 'black'}
          onClick={() => {
            setInputValue('');
            setValues([]);
          }}
        />
      </Icon>
    </Container>
  );
};
