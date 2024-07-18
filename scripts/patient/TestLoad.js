import {getDataDaftarPasien} from "./GetAllPatient.js";
import {getDataInputHasilPemeriksaanPasien} from "./GetInputResult.js";
import {getDataVerifikasiHasilPemeriksaan} from "./GetVerification.js";
import {putDataAmbilSample} from "./PutCollectSample.js";
import {sleep} from "k6";


export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 30 },
    { duration: '60s', target: 50 },
    { duration: '60s', target: 80 },
    { duration: '1m30s', target: 90 },
    { duration: '1m30s', target: 70 },
    { duration: '60s', target: 60 },
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