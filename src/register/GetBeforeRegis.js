import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const GET_ENDPOINTS_BEFORE = [
  '/datamaster/item_pemeriksaan_all/read?&page=0&page_size=1000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/pasien/pasien_aktif/read?&no_rm=&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/paket_pemeriksaan_aktif/read?&page=0&page_size=1000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/provinsi_aktif/read?nama=&page=0&page_size=10000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/unit_asal_aktif/read?nama=&page=0&page_size=10&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/penjamin_aktif/read?nama=&page=0&page_size=10&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/dokter_pengirim_aktif/read?nama=&page=0&page_size=1000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/icdt_aktif/read?nama=&page=0&page_size=1000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/kabupaten_aktif/read?&provinsi_id=35&page=0&page_size=10000&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/datamaster/kecamatan_aktif/read?page=0&page_size=10000&kabupaten_id=3578&kode_rs=RS02&kode_lab=LAB_DEMO',
  '/registrasi/pemeriksaan_hitung_umur_pasien/read?tanggal_lahir=2004-02-04&kode_rs=RS02&kode_lab=LAB_DEMO'
];

export function getBeforeRegis() {
  const requests = GET_ENDPOINTS_BEFORE.map(endpoint => {
    const url = `${BASE_URL_TEST}${endpoint}`;
    return http.get(url);
  });

  requests.forEach(req => {
    check(req, {
      'status is 200': (r) => r.status === 200,
      'response time is less than 500ms': (r) => r.timings.duration < 500,
      'response time is less than 1s': (r) => r.timings.duration < 1000,
      'response time is less than 2s': (r) => r.timings.duration < 2000,
      'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    });
  });
}

export default function() {
  getBeforeRegis();
}
