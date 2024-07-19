import {sleep} from "k6";
import {getDataHistory} from "./GetHistory.js";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '60s', target: 200 },
    { duration: '60s', target: 400 },
    { duration: '1m30s', target: 500 },
    { duration: '1m30s', target: 550 },
    { duration: '60s', target: 100 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getDataHistory();
  sleep(1);
}