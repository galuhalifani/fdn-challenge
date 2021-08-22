import { SET_EDITOR_CHOICE, SET_ARTICLES, SET_REVIEWS } from "./actionTypes.js";

export function setEditorChoice(array) {
    return {
        type: SET_EDITOR_CHOICE,
        payload: array
    }
}

export function setArticles(array) {
    return {
        type: SET_ARTICLES,
        payload: array
    }
}

export function setReviews(array) {
    return {
        type: SET_REVIEWS,
        payload: array
    }
}

export function fetchAPI() {
    return function (dispatch) {
        fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
        .then((response) => response.json())
        .then((data) => {
            console.log('success fetching')
            dispatch(setEditorChoice(data["editor's choice"]))
            dispatch(setArticles(data["latest articles"]))
            dispatch(setReviews(data["latest review"]))
        })
        .catch((err) => {
            console.log(err, 'error fetching')
        })
    }
}
