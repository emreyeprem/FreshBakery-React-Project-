const initialState = {
  isAuthenticated : true,

}

const reducer = (state = initialState, action) => {

  if(action.type == "AUTHENTICATED") {
  return {
    ...state,
    isAuthenticated : true
   }
 } else if(action.type == "NOTAUTHENTICATED"){
   return {

   ...state,
  isAuthenticated : false
}

}

 return state

}

export default reducer
