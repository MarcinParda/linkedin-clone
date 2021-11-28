import db, { auth, provider, storage } from "firebase";
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "actions/actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload
})

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status
})

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload
})

export function signInAPI() {
  return (dispatch) => {
    auth.signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload.user)))
      .catch((err) => alert(err.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    })
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth.signOut()
      .then(() => {
        dispatch(setUser(null))
      })
      .catch((err) => console.log(err));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    console.log(payload);
    dispatch(setLoading(true));
    if (payload.image !== '') {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on('state_changed',
        () => {
        }, () => {
        },
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection('articles').add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          }).finally(() =>
            dispatch(setLoading(false))
          )
        })
    } else if (payload.video) {
      db.collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      }).finally(() =>
        dispatch(setLoading(false))
      )

    } else {
      db.collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      }).finally(() =>
        dispatch(setLoading(false))
      )
    }
  };
}

export function getArticleAPI() {
  return (dispatch) => {
    let payload;
    db.collection('articles').orderBy('actor.date', 'desc')
      .onSnapshot(snapshot => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      })
  }
}
