import { getUserData } from "../api/utils.js";


export function AddSession(ctx, next){
    ctx.user = getUserData();

    next();
}