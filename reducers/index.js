import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { postsBySubreddit, selectedSubreddit } from './subreddits'


// combineReducers is very important in managing which part of the state tree is
// passed to the reducers
// http://redux.js.org/docs/basics/Reducers.html#splitting-reducers
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})

export default todoApp


// EXAMPLE STATE TREE:

// {
//   selectedSubreddit: 'frontend',
//
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//         {
//           id: 42,
//           title: 'Confusion about Flux and Relay'
//         },
//         {
//           id: 500,
//           title: 'Creating a Simple Application Using React JS and Flux Architecture'
//         }
//       ]
//     }
//   }
// }
