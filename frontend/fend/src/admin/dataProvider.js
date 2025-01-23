// src/admin/dataProvider.js
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://127.0.0.1:8000/api'; // Your DRF base URL
const httpClient = fetchUtils.fetchJson;    // or custom if you need auth

const dataProvider = {
    getList: (resource, params) => {
        // Example for listing items: GET /api/blogs/
        // Typically, you'd map RA's params to DRF query params if you want filtering/sorting
        const url = `${apiUrl}/${resource}/`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length, // or a separate count if DRF returns it
        }));
    },

    getOne: (resource, params) => {
        // GET /api/blogs/123/
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) => {
        // POST /api/blogs/
        const url = `${apiUrl}/${resource}/`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    update: (resource, params) => {
        // PUT /api/blogs/123/
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    delete: (resource, params) => {
        // DELETE /api/blogs/123/
        const url = `${apiUrl}/${resource}/${params.id}/`;
        return httpClient(url, { method: 'DELETE' }).then(() => ({ data: {} }));
    },
    
    // ... you can add more if needed (getMany, getManyReference, etc.)
};

export default dataProvider;
