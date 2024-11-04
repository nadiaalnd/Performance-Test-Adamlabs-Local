import { sleep } from 'k6';
import {getDataHistory} from "./GetHistory.js";

export const options = {
  stages: [
    { duration: '15s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '60s', target: 1800 },
    { duration: '60s', target: 2000 },
    { duration: '1m30s', target: 2500 },
    { duration: '1m30s', target: 3000 },
    { duration: '2m', target: 3500 },
    { duration: '60s', target: 700 },
    { duration: '15s', target: 0 },
  ],
};


export default function() {
  getDataHistory();
  sleep(1);
}
