import {GET_ARTICLES, SET_LOADING_STATUS} from "actions/actionType";

export const initialState = {
    loading: false,
    articles: [],
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                ids: action.id,
            };
        case SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.status,
            };
        default:
            return state;
    }
}

export default articleReducer;
