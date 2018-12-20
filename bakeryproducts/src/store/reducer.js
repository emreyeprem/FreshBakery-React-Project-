// to get token from local storage
let token = localStorage.getItem('jsonwebtoken')

const initialState = {

  token : token? token: '',
  username : '',
  itemCount : 0


}

const reducer = (state = initialState, action) => {

  if(action.type == "AUTHENTICATED") {

   return {
    ...state,
    token : action.token
   }

 } else if(action.type == "USER"){

   return {
   ...state,
   username : action.user.username
}

} else if(action.type == "DELETETOKEN"){

       return {
         ...state,
        token : '',
        username : ''
       }
 }else if(action.type == "CAKE"){

        return {
          ...state,
         Obj: action.obj
        }
  }

 return state

}

export default reducer
