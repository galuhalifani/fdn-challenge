import { SET_EDITOR_CHOICE, SET_ARTICLES, SET_REVIEWS } from "./actionTypes.js";

const initialState = {
  editorCard: [],
  latestArticles: [],
  latestReviews: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_EDITOR_CHOICE:
      return {...state, editorCard: payload};
    case SET_ARTICLES:
      return {...state, latestArticles: payload};
    case SET_REVIEWS:
      return {...state, latestReviews: payload};
    default:
      return state;
  }
}

export default reducer;
