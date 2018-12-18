import axios from 'axios'

export function setAuthenticationToken(token) {

  if(token) {
    // set the token in request headers
  axios.defaults.headers.common['authorization'] = `Bearer ${token}`
  } else {
    // remove the token from request headers
    delete axios.defaults.headers.common['authorization']
  }

}
