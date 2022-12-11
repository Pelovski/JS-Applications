const baseUrl = 'http://localhost:3030';

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(baseUrl + url, options);

        if (response.ok != true) {
            if(response.status == 403){
                localStorage.removeItem('user');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = request.bind({},'get');
const post = request.bind({},'post');
const put = request.bind({},'put');
const del = request.bind({},'delete');


export{
    get,
    post,
    put,
    del as delete 
};
