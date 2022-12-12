import * as api from './api.js';

const endpoint = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    catalog: '/data/games?sortBy=_createdOn%20desc'
};

export async function getRecent(){

    return api.get(endpoint.recent);
}

export async function getAll(){
    return api.get(endpoint.catalog);
}