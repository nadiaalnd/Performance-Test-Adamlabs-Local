import {sleep} from "k6";
import {getPemeriksaanAktif, getPemeriksaanDuploNew, getPemeriksaanNonDuploNew} from "./GetRecapCheckUp.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getPemeriksaanDuploNew();
  getPemeriksaanAktif();
  getPemeriksaanNonDuploNew();
  sleep(1);
}