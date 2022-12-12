import * as api from './api.js';

const endpoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    byId: '/data/cars/',
    update: '/data/cars/',
    deleteById: '/data/cars/',
};

export async function getAll() {
    return api.get(endpoints.getAll);
}

export async function create(data) {

    return api.post(endpoints.create, data)
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data)
}

export async function deleteById(id) {
    return api.delete(endpoints.deleteById + id);
}

