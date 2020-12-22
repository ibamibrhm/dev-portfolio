import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { ThemeContext } from '../lib/themeContext';

const goSun = keyframes`
  50% {
    color: #fff;
  }
  100% {
    content: "☼";
    color: #deb212;
  }
`

const goMoon = keyframes`
  50% {
    color: #fff;
  }
  100% {
    content: "☽";
    color: #23228e;
  }
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
  text-align: center;

  input {
    display: none;
    
    &:not(:checked) + .slider:before {
      animation: ${goSun} 0.7s linear forwards;
    }

    &:checked + .slider {
      background-position-x: 100%;
      box-shadow: 0px 0px 10px 0 #333;
    }

    &:checked + .slider:before {
      transform: translateX(36px);
      animation: ${goMoon} 0.7s linear forwards;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #deb212, #816a50, #23228e 100%);
    transition: all 0.7s ease;
    border-radius: 24px;
    background-size: 300%;
    background-position-x: 0;
    box-shadow: 0px 0px 10px 0 #666;

    &:before {
      position: absolute;
      content: "☼";
      font-size: 15px;
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: 0px;
      background-color: white;
      transition: all 0.7s ease;
      border-radius: 50%;
      color: #deb212;
    }
  }
`;

const SwitchThemeButton = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Switch title={theme === 'dark' ? 'Switch light mode' : 'Switch dark mode'}>
      <input
        type="checkbox"
        onChange={switchTheme}
        checked={theme === 'dark'}
      />
      <span className="slider" />
    </Switch>
  );
};

export default SwitchThemeButton;
