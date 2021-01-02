// document.querySelector("button").onclick = () => clicked();

import {Filter} from './filter.mjs';

export const clicked = new Filter();
document.querySelector("button").addEventListener('click', () => clicked.add());
