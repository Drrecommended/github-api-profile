import { useEffect } from "react"
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"

const GET_DATA = 'GetData/GET_DATA'
// const GET_REPOS = 'GetData/GET_REPOS'

const initialState = {
    data: []
    // repos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA: 
        console.log(action)
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

function getData() {
    return dispatch => {
      axios.get('https://api.github.com/users/Drrecommended').then(resp => {
          dispatch({ 
              type: GET_DATA,
              payload: resp.data
          })
      })
    }
} 

export function useData() {
    const dispatch = useDispatch()
    const myGit = useSelector(appState => appState.dataState.data)
  
    const getProfile = () => dispatch(getData())
  
    return { myGit, getProfile }

}