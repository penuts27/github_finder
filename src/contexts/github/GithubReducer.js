const githubReducer = (state, action) => {
  switch(action.type){
    case 'SET_LOADING_TRUE': 
      return {
        ...state,
        loading: true
      }
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.userRepos,
        loading: false
      }
    case 'CLEAR_ALL_USERS': 
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}
export default githubReducer