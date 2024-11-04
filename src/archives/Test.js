import {sleep} from "k6";
import {getPemeriksaanArsip, postPemeriksaanArsip} from "./PostDataArchives.js";


export const options = {
  vus: 10,
  duration: '30s',
};

// let cycle = 1;
// let run = 1;

export default function() {
  postPemeriksaanArsip();
  sleep(1);

  // console.log(`Cycle: ${cycle}, Run: ${run}, Current VU: ${__VU}, Iteration: ${__ITER}`);
  //
  // // cycle & run
  // if (__ITER % 2 === 0) {
  //   run++;
  //   if (run > 2) {
  //     run = 1;
  //     cycle++;
  //   }
  // }
}