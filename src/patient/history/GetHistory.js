import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../../config/config.js';

const GET_ENDPOINTS_INPUT_HASIL_PEMERIKSAAN_PASIEN = [
    '/inputhasil/riwayat_pemeriksaan_pasien/read?no_rm=381996&kode_pemeriksaan=RBC&kode_rs=RS02&kode_lab=LAB_DEMO',
];

export function getDataHistory() {
    const requests = GET_ENDPOINTS_INPUT_HASIL_PEMERIKSAAN_PASIEN.map(endpoint => {
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
