import { BUY_ICECREAME } from "./ActionTypes";
const initialIcecreameState = {
    numberOfIcecreams: 20,
};
const reducer = (state = initialIcecreameState, action) => {
    switch (action.type) {
        case BUY_ICECREAME: return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1,
        }
        default: return { ...state };
    }
}
export default reducer;