'use strict'

// import subredditActions from './subreddits'
// import todoActions from './todos'
import { selectSubreddit,
        invalidateSubreddit,
        requestPosts,
        receivePosts,
        fetchPosts,
        fetchPostsIfNeeded } from './subreddits'

import {addTodo, setVisibilityFilter, toggleTodo} from './todos'

// const selectSubreddit = subredditActions.selectSubreddit
// const invalidateSubreddit = subredditActions.invalidateSubreddit
// const requestPosts = subredditActions.requestPosts
// const receivePosts = subredditActions.receivePosts
// const fetchPosts = subredditActions.fetchPosts

// const addTodo = todoActions.addTodo
// const setVisibilityFilter = todoActions.setVisibilityFilter
// const toggleTodo = todoActions.toggleTodo



module.exports = {

    // subreddits
    selectSubreddit,
    invalidateSubreddit,
    requestPosts,
    receivePosts,
    fetchPosts,
    fetchPostsIfNeeded,


    // todos
    addTodo,
    setVisibilityFilter,
    toggleTodo

};
