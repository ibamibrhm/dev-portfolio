import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainHeading = styled.section`
  margin: 0px 2px 0px 0px;
  padding: 0px 0px 14px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  border-bottom: 1px solid #ebebeb;

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    right: 0;
    left: 0;
    bottom: -1px;
    width: 40px;
    background: ${({ theme }) => theme.secondaryText};
  }
`;

const Title = ({ name, children }) => {
  return (
    <>
      <MainHeading className="mt-5">
        <h5>{name}</h5>
      </MainHeading>
      {children}
    </>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Title;
