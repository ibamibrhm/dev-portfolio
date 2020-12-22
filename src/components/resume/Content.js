import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResumeContentWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.secondaryText};
`;

const ContentChildrenWrapper = styled.div`
  margin: 5px 0px 0px;
  color: ${({ theme }) => theme.text};
`;

const H4 = styled.h4`
  line-height: 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;

const H5 = styled.h5`
  line-height: 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.secondaryText};
  text-align: right;
`;

const H6 = styled.h6`
  line-height: 18px;
  font-size: 13px;
  color: #999;
`;

const Content = ({ title, subtitle, time, children }) => {
  return (
    <ResumeContentWrapper className="mt-3 mr-3">
      <div className="ml-3">
        <div className="d-flex justify-content-between">
          <H4>{title}</H4>
          <H5>{time}</H5>
        </div>
        <H6>{subtitle}</H6>

        <ContentChildrenWrapper>{children}</ContentChildrenWrapper>
      </div>
    </ResumeContentWrapper>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Content;
