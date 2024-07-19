import { postDataRegis } from './PostDataRegis.js';
import {getBeforeRegis} from "./GetBeforeRegis.js";
import {getAfterRegis} from "./GetAfterRegis.js";
import {sleep} from "k6";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '60s', target: 90 },
    { duration: '60s', target: 100 },
    { duration: '1m30s', target: 100 },
    { duration: '1m30s', target: 100 },
    { duration: '60s', target: 15 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getBeforeRegis();
  postDataRegis();
  getAfterRegis();
  sleep(1);

  // console.log(`Cycle: ${cycle}, Run: ${run}, Current VU: ${__VU}, Iteration: ${__ITER}`);
}