import {sleep} from "k6";
import {getDataHistory} from "./GetHistory.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getDataHistory();
  sleep(1);
}