import styled from 'styled-components';

export const Select = styled.select`
  background: transparent;
  font-size: 16px;
  color: black;
  font-weight: 600;
  background-color: #F4F7F6;
  margin-right: 20px;
  cursor: pointer;
  text-transform: uppercase;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: 0.5s;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #08D0BD;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    margin-bottom: -20px;
    font-weight: 300;
  }
`;

export const Option = styled.option`
  background: transparent;
  font-size: 12px;
  color: black;
  font-weight: 600;
  background-color: #F4F7F6;
  @media screen and (max-width: 991px) {
    font-weight: 300;
  }
`;