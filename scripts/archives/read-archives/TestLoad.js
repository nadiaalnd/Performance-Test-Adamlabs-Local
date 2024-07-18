import {sleep} from "k6";
import {getDataArchives} from "./GetDataArchives.js";


export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 200 },
    { duration: '60s', target: 300 },
    { duration: '60s', target: 500 },
    { duration: '1m30s', target: 600 },
    { duration: '1m30s', target: 650 },
    { duration: '60s', target: 100 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getDataArchives();
  sleep(1);
}