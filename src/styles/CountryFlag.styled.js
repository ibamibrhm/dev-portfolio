import styled from 'styled-components';

const CountryFlag = styled.svg`
  width: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export default CountryFlag;
