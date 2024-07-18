import { sleep } from "k6";
import { postLogin } from "./PostLogin.js";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 20 },
    { duration: '60s', target: 40 },
    { duration: '60s', target: 50 },
    { duration: '1m30s', target: 60 },
    { duration: '1m30s', target: 30 },
    { duration: '60s', target: 15 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  postLogin();
  sleep(1);

}
