// src/admin/dataProvider.js
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://127.0.0.1:8000/api';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}/`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length, // Adjust for pagination if needed
        }));
    },
    getOne: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },
    create: (resource, params) => {
        const url = `${apiUrl}/${resource}/`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
    update: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
    delete: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url, { method: 'DELETE' }).then(() => ({ data: {} }));
    },
};

export default dataProvider;
