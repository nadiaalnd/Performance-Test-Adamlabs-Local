import { sleep } from 'k6';
import {getDataHistory} from "./GetHistory.js";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '60s', target: 200 },
    { duration: '60s', target: 500 },
    { duration: '1m30s', target: 800 },
    { duration: '1m30s', target: 1200 },
    { duration: '2m', target: 1500 },
    { duration: '60s', target: 300 },
    { duration: '15s', target: 0 },
  ],
};


export default function() {
  getDataHistory();
  sleep(1);
}
