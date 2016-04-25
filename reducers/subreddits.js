// Reducers take a specific part of the *state* tree, could be an array, object, boolean, whatever, and *action* object
// then returns the NEW state.  Redux's store then handles merging the new state into the existing state tree.

export const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case 'SELECT_SUBREDDIT':
      return action.subreddit
    default:
      return state
  }
}


const defaultPostsState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

export const posts = (state = defaultPostsState, action) => {
  switch (action.type) {
    case 'INVALIDATE_SUBREDDIT':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case 'INVALIDATE_SUBREDDIT':
    case 'RECEIVE_POSTS':
    case 'REQUEST_POSTS':
      // The below code uses ES6 computed property syntax and is equivalent to:
      // let nextState = {}
      // nextState[action.subreddit] = posts(state[action.subreddit], action)
      // return Object.assign({}, state, nextState)
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}
