import { sleep } from 'k6';
import {getDataDaftarPasien} from "./GetAllPatient.js";
import {getDataInputHasilPemeriksaanPasien} from "./GetInputResult.js";
import {getDataVerifikasiHasilPemeriksaan} from "./GetVerification.js";
import {putDataAmbilSample} from "./PutCollectSample.js";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '60s', target: 100 },
    { duration: '60s', target: 300 },
    { duration: '1m30s', target: 400 },
    { duration: '1m30s', target: 600 },
    { duration: '2m', target: 1000 },
    { duration: '60s', target: 200 },
    { duration: '15s', target: 0 },
  ],
};


export default function() {
  getDataDaftarPasien();
  getDataInputHasilPemeriksaanPasien();
  getDataVerifikasiHasilPemeriksaan();
  putDataAmbilSample();
  sleep(1);

}
