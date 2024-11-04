import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../../config/config.js';

const ENDPOINTS = {
    'item_pemeriksaan_aktif': '/datamaster/item_pemeriksaan_aktif/read?nama=&page=0&page_size=1000&kode_rs=RS02&kode_lab=LAB_DEMO',
    'pemeriksaan_non_duplo_new': '/rekapitulasi/rekap_pemeriksaan_non_duplo_new/read?start_date=2024-07-01&end_date=2024-07-31&kode_rs=RS02&kode_lab=LAB_DEMO',
    'pemeriksaan_duplo_new': '/rekapitulasi/rekap_pemeriksaan_duplo_new/read?start_date=2024-07-01&end_date=2024-07-31&kode_rs=RS02&kode_lab=LAB_DEMO',
};

// endpoint pemeriksaan aktif
export function getPemeriksaanAktif() {
    const res = http.get(`${BASE_URL_TEST}${ENDPOINTS.item_pemeriksaan_aktif}`);
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 500ms': (r) => r.timings.duration < 500,
        'response time is less than 1s': (r) => r.timings.duration < 1000,
        'response time is less than 2s': (r) => r.timings.duration < 2000,
        'response time is less than 5s': (r) => r.timings.duration < 5000,
        'response time is less than 10s': (r) => r.timings.duration < 10000,
    });
}

// endpoint pemeriksaan non duplo new
export function  getPemeriksaanNonDuploNew() {
    const res = http.get(`${BASE_URL_TEST}${ENDPOINTS.pemeriksaan_non_duplo_new}`);
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 500ms': (r) => r.timings.duration < 500,
        'response time is less than 1s': (r) => r.timings.duration < 1000,
        'response time is less than 2s': (r) => r.timings.duration < 2000,
        'response time is less than 5s': (r) => r.timings.duration < 5000,
        'response time is less than 10s': (r) => r.timings.duration < 10000,
    });
}

// endpoint pemeriksaan duplo new
export function  getPemeriksaanDuploNew() {
    const res = http.get(`${BASE_URL_TEST}${ENDPOINTS.pemeriksaan_duplo_new}`);
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 500ms': (r) => r.timings.duration < 500,
        'response time is less than 1s': (r) => r.timings.duration < 1000,
        'response time is less than 2s': (r) => r.timings.duration < 2000,
        'response time is less than 5s': (r) => r.timings.duration < 5000,
        'response time is less than 10s': (r) => r.timings.duration < 10000,
    });
}
