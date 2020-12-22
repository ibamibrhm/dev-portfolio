import React from 'react';
import ReactGA from 'react-ga';
import upvolv from '../assets/upvolv.png';
import upvolvmedia from '../assets/upvolvmedia.png';
import languagepicker from '../assets/languagepicker.jpg';
import pijakpijak from '../assets/pijakpijak.jpg';
import npm from '../assets/npm.jpg';
import adakami from '../assets/adakami.jpg';
const eve = 'https://www.youtube.com/embed/kabd8ky4OGI';

const portfolio = [
  {
    header: {
      image: false,
      link: eve,
    },
    name: 'Eve',
    platform: 'Android Apps',
    description:
      'Chatbot application with feature reminder, find nearby restaurant, movies in theaters and relationship status meter.',
    stacks: [
      'React Native',
      'Dialogflow',
      'Node.js',
      'Express',
      'Firebase',
      'MongoDB',
    ],
    footer: {
      link: 'https://github.com/personal-assistant',
      text: 'Repository',
    },
  },
  {
    header: {
      image: true,
      link: upvolv,
    },
    name: 'Upvolv',
    platform: 'Website',
    description:
      'Upvolv is a Game Hub provides an easy, safe and secure way for gamers to sell/buy any game related products.',
    stacks: ['React.js', 'Node.js', 'Fastify', 'MongoDB'],
    footer: {
      link: 'https://upvolv.com',
      text: 'Visit',
    },
  },
  {
    header: {
      image: true,
      link: upvolvmedia,
    },
    name: 'Upvolv Media',
    platform: 'Website',
    description: 'Upvolv Media is a news portal about games.',
    stacks: ['Next.js', 'Node.js', 'Fastify', 'MongoDB'],
    footer: {
      link: 'https://media.upvolv.com',
      text: 'Visit',
    },
  },
  {
    header: {
      image: true,
      link: languagepicker,
    },
    name: 'Language Picker',
    platform: 'Android Apps',
    description:
      'Language Picker is an app for choosing what programming languages suits for you.',
    stacks: ['React Native'],
    footer: {
      link:
        'https://firebasestorage.googleapis.com/v0/b/arsipibrahim.appspot.com/o/language_pickers.apk?alt=media&token=9f8d7717-28e4-4b43-bd84-8933422cf9b3',
      text: 'Download',
    },
  },
  {
    header: {
      image: true,
      link: adakami,
    },
    name: 'AdaKami',
    platform: 'Website',
    description:
      'AdaKami is a peer-to-peer lending provider in Indonesia that provides unsecured loan facilities through online applications.',
    stacks: ['React.js'],
    footer: {
      link: 'https://www.adakami.id',
      text: 'Visit',
    },
  },

  {
    header: {
      image: true,
      link: pijakpijak,
    },
    name: 'PijakPijak',
    platform: 'Website',
    description:
      'PijakPijak is E-commerce for building materials with B2B2C concepts.',
    stacks: ['React.js', 'Node.js', 'Express', 'MySQL'],
    footer: {
      link: 'https://pijakpijak.com',
      text: 'Visit',
    },
  },
  {
    header: {
      image: true,
      link: npm,
    },
    name: 'NPM',
    platform: 'Package',
    description: (
      <>
        NPM created by me: <br />
        <ReactGA.OutboundLink
          eventLabel="NPM angka"
          to="https://www.npmjs.com/package/angka"
          target="_blank"
          rel="noopener noreferrer"
        >
          angka
        </ReactGA.OutboundLink>
        ,{' '}
        <ReactGA.OutboundLink
          eventLabel="NPM menari"
          to="https://www.npmjs.com/package/menari"
          target="_blank"
          rel="noopener noreferrer"
        >
          menari
        </ReactGA.OutboundLink>
      </>
    ),
    stacks: ['Node.js'],
    footer: {
      link: 'https://www.npmjs.com/~ibamibrhm',
      text: 'Visit',
    },
  },
];

export default portfolio;
