import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"

const GET_DATA = 'GetData/GET_DATA'

const initialState = {
    data: {},
    repos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA: 
      console.log(action)
        return { ...state, data: action.payload.data, repos: action.payload.repos }
      default:
        return state
    }
  }


function getData() {
    return dispatch => {
      Promise.all([
        axios.get('https://api.github.com/users/Drrecommended'),
        axios.get('https://api.github.com/users/Drrecommended/repos')
      ]).then(resp => {
        console.log(resp)
        dispatch({
          type: GET_DATA,
          payload: {
            data: resp[0].data,
            repos: resp[1].data,
          }
        })
      })
    }
} 


export function useData() {
    const dispatch = useDispatch()
    const myGit = useSelector(appState => appState.dataState.data)
    const repos = useSelector(appState => appState.dataState.repos)
  
    const getProfile = () => dispatch(getData())
    const getRepo = () => dispatch(getData())
  
    return { myGit, repos, getProfile, getRepo }

}