import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()


export const GithubProvider = ({children}) => {
  // init
  const INIT_STATE = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReducer, INIT_STATE)
  
  
  return (
    <GithubContext.Provider value={{
      ...state,
      dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext