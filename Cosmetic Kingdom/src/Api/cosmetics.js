import * as api from './api.js';

const endpoints = {
    products: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    byId: '/data/products/',
    update: '/data/products/',
    deleteById: '/data/products/'
};


export async function getProducts(){
    return api.get(endpoints.products);
}

export async function getById(id){
    return api.get(endpoints.byId + id);
}

export async function create(data){
   return api.post(endpoints.create, data);
}

export async function update(id, data){
    return api.put(endpoints.update + id, data);
}

export async function deleteById(id){
    return api.delete(endpoints.deleteById + id);
}