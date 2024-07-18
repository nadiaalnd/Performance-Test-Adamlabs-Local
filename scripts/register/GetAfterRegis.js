import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const GET_ENDPOINTS_AFTER = [
  '/registrasi/pemeriksaan_pasien_registrasi/read?all=&no_reg_rs=&page=0&page_size=10&jenis_regis=patologi&kode_rs=RS02&kode_lab=LAB_DEMO'
];

export function getAfterRegis() {
  const requests = GET_ENDPOINTS_AFTER.map(endpoint => {
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
  getAfterRegis();
}
