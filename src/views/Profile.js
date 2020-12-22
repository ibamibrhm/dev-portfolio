import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ContentContainer from '../styles/ContentContainer.styled';
import photo from '../assets/photo.jpeg';

const Img = styled.img`
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 5px 6px 0px #777;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 1rem;
`;

const ProfileContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 499px) {
    flex-wrap: wrap;
    margin-left: 0;
  }
`;

const Profile = () => {
  const { t } = useTranslation();

  return (
    <ProfileContainer
      className="py-3"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <Img
        src={photo}
        alt="ibrahim"
        itemProp="image"
        width="170"
        height="170"
        loading="lazy"
      />
      <P className="mt-3 mt-md-0 mb-0" itemProp="about">
        {t('Profile.firstLine')} <br />
        {t('Profile.secondLine')}
      </P>
    </ProfileContainer>
  );
};

export default React.memo(Profile);
