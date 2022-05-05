import { BUY_CAKE } from "./ActionTypes";
export const buyCake = (number = 1) => ({
    type: BUY_CAKE,
    payload: number,
});