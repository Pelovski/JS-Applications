import { showView } from "./util.js";

const section = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(section);
    displayMovie(id);
}

async function displayMovie(id) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [movie, likes, ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id,user)
    ]);
    section.replaceChildren(createMovieCard(movie));
}

function createMovieCard(movie) {
    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == movie._ownerId;

    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
 <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}"
                     alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                ${isOwner ? 
                    `<a class="btn btn-danger" href="#">Delete</a>
                    <a class="btn btn-warning" href="#">Edit</a>` :
                     `<a class="btn btn-primary" href="#">Like</a>
                    <span class="enrolled-span">Liked 1</span>`
                }
                
                
            </div>
        </div>
 `
    return element;
}

async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await res.json();

    return movie;
}

async function getLikes(id){
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const likes = await res.json();

    return likes;
}

async function getOwnLike(movieId, user){
    if(!user){
        return false;
    }else{
        const userId = user._id;

        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
        const like = await res.json();
    
        return like;
    }
   
}