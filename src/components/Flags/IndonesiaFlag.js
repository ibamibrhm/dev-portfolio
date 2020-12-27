import React from 'react';
import CountryFlag from '../../styles/CountryFlag.styled';
import PropTypes from 'prop-types';

const IndonesiaFlag = ({ switchLang, lang }) => {
  return (
    <CountryFlag
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 480"
      onClick={() => switchLang('id')}
      style={{ border: `2px solid ${lang === 'id' ? 'blue' : 'transparent'}` }}
    >
      <title>Bahasa Indonesia</title>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#e70011" d="M0 0h640v249H0z" />
        <path fill="#fff" d="M0 240h640v240H0z" />
      </g>
    </CountryFlag>
  );
};

IndonesiaFlag.propTypes = {
  switchLang: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default IndonesiaFlag;
