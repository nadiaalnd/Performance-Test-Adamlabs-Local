import {
  getKunjunganPelaporanNilaiKritis, getKunjunganPelaporanNilaiKritisExport,
  getKunjunganPemeriksaanDuplo, getKunjunganPemeriksaanNonDuplo,
  getKunjunganPenjaminExport,
  getKunjunganReguler, getKunjunganTAT, getKunjunganTATExport,
  getKunjunganUnitAsal, getKunjunganUnitAsalExport
} from "./GetDataReport.js";
import {sleep} from "k6";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 15 },
    { duration: '60s', target: 25 },
    { duration: '60s', target: 45 },
    { duration: '1m30s', target: 40 },
    { duration: '1m30s', target: 30 },
    { duration: '60s', target: 5 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getKunjunganReguler();
  getKunjunganUnitAsal();
  getKunjunganPenjaminExport();
  getKunjunganPemeriksaanDuplo();
  getKunjunganTAT();
  getKunjunganPelaporanNilaiKritis();
  getKunjunganPelaporanNilaiKritisExport();
  getKunjunganTATExport();
  getKunjunganPemeriksaanNonDuplo();
  getKunjunganUnitAsalExport();
  getKunjunganPenjaminExport();
  sleep(1);
}