import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4 = styled.h4`
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;

const Rating = styled.span`
  opacity: 0.3;
  height: 15px;
  width: 15px;
  background-color: #757575;
  display: block;
  float: left;
  margin-right: 1px;
  border: 2px solid #eee;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`;

const Skill = ({ name, score }) => {
  return (
    <div className="d-flex justify-content-between my-2">
      <H4>{name}</H4>
      <div className="mr-4">
        {Array.from({ length: 7 }, (_, i) =>
          i < score ? (
            <Rating key={i} style={{ opacity: 1 }} />
          ) : (
              <Rating key={i} />
            )
        )}
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Skill;
