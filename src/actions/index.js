import { auth, provider } from "firebase";
import { SET_USER } from "actions/actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload
})

export function signInAPI () {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then((payload) => dispatch(setUser(payload.user)))
            .catch((err) => alert(err.message));
    };
}

export function getUserAuth () {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        })
    };
}
