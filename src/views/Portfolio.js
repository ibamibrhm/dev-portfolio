import React from 'react';
import ReactGA from 'react-ga';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import ContentContainer from '../styles/ContentContainer.styled';
import PortfolioItems from '../constants/portfolio';

const Ul = styled.ul`
  padding: 0 0 0 17px;
`;

const Portfolio = () => {
  return (
    <ContentContainer className="card-columns p-3">
      {PortfolioItems.map((item, index) => (
        <Card key={index}>
          {item.header.image ? (
            <Card.Img
              variant="top"
              src={item.header.link}
              alt={item.name}
              loading="lazy"
              width="auto"
              height="auto"
            />
          ) : (
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title={item.name}
                  src={item.header.link}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.platform}
            </Card.Subtitle>
            <Card.Text>{item.description}</Card.Text>
            Tech Stack:
            <Ul>
              {item.stacks.map((stack, idx) => <li key={idx}>{stack}</li>)}
            </Ul>
            <Card.Text className="text-right">
              <ReactGA.OutboundLink
                eventLabel={`${item.footer.text} ${item.name}`}
                to={item.footer.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.footer.text}
              </ReactGA.OutboundLink>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </ContentContainer>
  );
};

export default React.memo(Portfolio);
