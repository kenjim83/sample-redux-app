import fetch from 'isomorphic-fetch'
/*
 * action creators
 */

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

export const fetchPosts = (subreddit) => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function(dispatch){
    dispatch(requestPosts(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}


const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if(!posts){
    return true
  }
  else if (posts.isFetching){
    return false
  } else {
    return posts.didInvalidate
  }
}


export const fetchPostsIfNeeded = (subreddit) => {
  // this is a 'thunk' action ie. returns a function rather than an action object

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.
  return (dispatch, getState) => {
    if(shouldFetchPosts(getState(), subreddit)){
      // Dispatch a thunk from a thunk
      return dispatch(fetchPosts(subreddit))
    } else {
      // Let the calling code know there's nothing to wait for
      return Promise.resolve()
    }
  }
}
