// @flow

import init from './gameloop/init';

import 'assets/styles/global.css';
import './UI/music';

document.addEventListener('DOMContentLoaded', () => {
  init();
}, false);
