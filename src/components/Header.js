import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme }) => theme.headerH1};
  font-size: 30px;
  font-weight: 900;
  line-height: 40px;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.headerH2};
  font-size: 15px;
  line-height: 20px;
`;

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-between mb-3">
      <section itemScope itemType="https://schema.org/Person">
        <H1 itemProp="name">IBRAHIM</H1>
        <H2 itemProp="jobTitle">SOFTWARE ENGINEER </H2>
      </section>

      <Social />
    </header>
  );
};

export default React.memo(Header);
