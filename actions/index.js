/*
 * action creators
 */

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const selectSubreddit = (subreddit) => {
    return {
        type: 'SELECT_SUBREDDIT',
        subreddit
    }
}

export const invalidateSubreddit = (subreddit) => {
    return {
        type: 'INVALIDATE_SUBREDDIT',
        subreddit
    }
}


export const requestPosts = (subreddit) => {
    return {
        type: 'REQUEST_POSTS',
        subreddit
    }
}

export const receivePosts = (subreddit, json) => {
    return {
        type: 'RECEIVE_POSTS',
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

