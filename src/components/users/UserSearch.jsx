import {useState, useContext} from 'react'
import GithubContext from '../../contexts/github/githubContext'
import AlertContext from '../../contexts/alert/AlertContext'
import {searchUsers} from '../../contexts/github/githubAction'

function UserSearch() {
  const {users, dispatch} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)
  const [text, setText] = useState('')
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(text.trim().length === 0){
      setAlert('Please enter something', 'error')
    }else{
      dispatch({
        type: 'SET_LOADING_TRUE',
      })
      // need to add await
      const users = await searchUsers(text)
       dispatch({
        type: 'GET_USERS',
        payload: users
      })
    }
    setText('')
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input 
              type="text" 
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange = {handleChange}
              />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button className="btn btn-ghost btn-lg" onClick={() => dispatch({type: 'CLEAR_ALL_USERS'})}>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}

export default UserSearch
