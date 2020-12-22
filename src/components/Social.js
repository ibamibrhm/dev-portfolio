import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = styled.section`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
    transition: all 150ms ease-in-out;

    &:hover {
      color: slategrey;
      transform: translateY(-3px);
    }
  }
`;

const Social = () => {
  return (
    <Section itemScope itemType="https://schema.org/Person">
      <link itemProp="url" href="https://github.com/ibamibrhm" />

      <ReactGA.OutboundLink
        itemProp="sameAs"
        eventLabel="LinkedIn Profile"
        to="https://www.linkedin.com/in/ibrahim29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          size="3x"
          title="LinkedIn"
        />
      </ReactGA.OutboundLink>

      <ReactGA.OutboundLink
        itemProp="sameAs"
        eventLabel="Github Profile"
        to="https://github.com/ibamibrhm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'github-square']}
          size="3x"
          title="Github"
        />
      </ReactGA.OutboundLink>

      <ReactGA.OutboundLink
        itemProp="sameAs"
        eventLabel="Medium Profile"
        to="https://medium.com/@ibamibrhm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'medium']} size="3x" title="Medium" />
      </ReactGA.OutboundLink>

      <ReactGA.OutboundLink
        itemProp="sameAs"
        eventLabel="Dev.to Profile"
        to="https://dev.to/ibamibrhm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'dev']} size="3x" title="Dev" />
      </ReactGA.OutboundLink>
    </Section>
  );
};
export default Social;
